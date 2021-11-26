import { saveAs } from 'file-saver'
import { Message } from 'element-ui'
export const successMessage = (msg) => {
  if (!document.getElementsByClassName('el-message')[0]) {
    Message({
      type: 'success',
      duration: 1500,
      message: msg || '请求成功'
    })
  }
}
export const errorMessage = (msg) => {
  if (!document.getElementsByClassName('el-message')[0]) {
    Message({
      type: 'error',
      duration: 1500,
      message: msg || '请求失败'
    })
  }
}

export const getQueryString = (name) => {
  // 解析url参数
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  const r = window.location.search.substr(1).match(reg)
  if (r != null) {
    return unescape(r[2])
  }
  return null
}
export const loginTimeOut = () => {
  // 登录过期重定向
  setTimeout(() => {
    localStorage.removeItem('user')
    location.reload()
  }, 1500)
}
export const requestErr = err => {
  // 接口报错处理
  if (err && err.response) {
    switch (err.response.status) {
      case 302:
        err.msg = '请求错误(302)'
        break
      case 400:
        err.msg = '请求错误(400)'
        break
      case 401:
        // 登录过期或未授权处理
        err.msg = '登录过期,即将重新登录'
        loginTimeOut()
        break
      case 403:
        err.msg = '请求错误(403)'
        break
      case 404:
        err.msg = '请求出错(404)'
        break
      case 408:
        err.msg = '请求超时(408)'
        break
      case 409:
        err.msg = '登录过期,即将重新登录'
        loginTimeOut()
        break
      case 428:
        // 登录过期或未登录处理
        err.msg = '登录过期,即将重新登录'
        loginTimeOut()
        break
      case 500:
        err.msg = '服务器错误(500)'
        break
      case 501:
        err.msg = '服务未实现(501)'
        break
      case 502:
        err.msg = '网络错误(502)'
        break
      case 503:
        err.msg = '服务不可用(503)'
        break
      case 504:
        err.msg = '网络超时(504)'
        break
      case 505:
        err.msg = 'HTTP版本不受支持(505)'
        break
      default:
        err.msg = `请求失败!`
    }
  } else if (err.toString().indexOf('timeout') > -1) {
    err.msg = '请求超时'
  } else {
    err.msg = '请求失败!'
  }
  errorMessage(err.msg)
}
export const compare = (pro) => {
  // 数组排序方法
  // eslint-disable-next-line space-before-function-paren
  return function (obj1, obj2) {
    var val1 = obj1[pro]
    var val2 = obj2[pro]
    if (val1 < val2) {
      // 正序
      return -1
    } else if (val1 > val2) {
      return 1
    } else {
      return 0
    }
  }
}
export const getNowTime = () => {
  // 获取当前时间
  const now = new Date().getTime()
  const year = now.getFullYear() // 年
  const month =
    now.getMonth() + 1 < 10
      ? '0' + (now.getMonth() + 1)
      : now.getMonth() + 1 // 月
  const day = now.getDate() < 10 ? '0' + now.getDate() : now.getDate() // 日
  const hh = now.getHours() < 10 ? '0' + now.getHours() : now.getHours() // 时
  const mm = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes() // 分
  const ss = now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds() // 秒
  return {
    year,
    month,
    day,
    hh,
    mm,
    ss,
    am: hh < 12 ? 'AM' : 'PM'
  }
}
export const exportData = (response, type) => {
  // 导出下载文件
  const { year, month, day, hh, mm, ss } = getNowTime()
  const blob = new Blob([response], { type: type || 'application/zip' })
  saveAs(blob, `${year}-${month}-${day} ${hh}_${mm}_${ss}`)
}
export const recursionArr = (arr, callback, name = 'children') => {
  // 处理递归数据
  if (arr && arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][name]) {
        recursionArr(arr[i][name], callback, name)
      }
      callback(arr[i])
    }
    return arr
  } else {
    return []
  }
}

export const formattingRoute = (data) => {
  // 处理菜单数据成vue可用的路由格式
  recursionArr(data, (res) => {
    res.component = res.component === 'layout' ? () => import('../views/layout/index.vue') : () => import('../views' + res.path + '/index.vue')
  }, 'children')
  return data
}
export const getToken = () => {
  let user = null
  try {
    user = JSON.parse(window.atob(localStorage.getItem('user') || 'e30='))
  } catch (err) {
    user = {}
  }
  return user
}
export const colorList = [
  'rgb(47,105,229)',
  'rgb(223,114,114)',
  'rgb(254,67,101)',
  'rgb(252,157,154)',
  'rgb(200,200,169)',
  'rgb(131,175,155)',
  'rgb(3,38,58)',
  'rgb(222,125,44)',
  'rgb(182,194,154)',
  'rgb(29,131,8)',
  'rgb(220,87,18)',
  'rgb(178,200,187)',
  'rgb(69,137,148)',
  'rgb(117,121,71)',
  'rgb(114,83,52)',
  'rgb(29,191,151)',
  'rgb(69,39,39)',
  'rgb(110,112,73)',
  'rgb(117,27,19)',
  'rgb(113,150,159)',
  'rgb(213,26,33)',
  'rgb(130,57,53)',
  'rgb(222,156,83)',
  'rgb(101,147,64)',
  'rgb(3,35,14)',
  'rgb(255,94,72)',
  'rgb(38,188,213)'
]
