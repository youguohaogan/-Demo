import store from '@/store'
import router from '@/router'
import NProgress from 'nprogress'
import { getMenuList } from '@/apis/auth'
import { formattingRoute } from '@/utils/tools'
const LOGIN_WHITE_LIST = ['login', '404', 'err']
async function routeRedirect (to, from, next, router) {
  // 动态路由处理
  const cacheRoute = store.state.login.route
  try {
    const menuData = await getMenuList()
    const firstIndex = menuData.findIndex(x => x.children && x.children.length > 0)
    if (firstIndex < 0) {
      next('/err')
    } else {
      menuData[firstIndex].redirect = menuData[firstIndex].children[0].path
      const routeData = formattingRoute(menuData)
      store.commit('login/SET_ROUTE', routeData)
      if (cacheRoute.length > 0) {
        // 有缓存的路由,当前路由和请求的路由比对
        const { path } = to
        if (JSON.stringify(routeData).match(path)) {
          // 即将进入的路由有权限
          next()
        } else {
          // 即将进入的路由无权限
          next('/err')
        }
      } else {
        router.addRoutes(routeData)
        next({ ...to, replace: true })
      }
    }
  } catch (err) {
    console.log(err, 'err')
    next('/err')
  }
}
router.beforeEach((to, from, next) => {
  const { name } = to
  NProgress.start()
  if (LOGIN_WHITE_LIST.indexOf(name) > -1) {
    // 免登录白名单
    next()
  } else {
    const user = store.state.login.user
    const { sessionId, emsNum } = user
    if (sessionId && emsNum) {
      // 已登录,判断路由的权限
      routeRedirect(to, from, next, router)
    } else {
      // 未登录,跳转到登录页
      next({
        path: '/login',
        query: {
          redirect: to.path
        }
      })
    }
  }
})
router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
