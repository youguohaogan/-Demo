// import request from '@/utils/request'
import { mockRoute } from '@/utils/mock'
export const getMenuList = () => {
  // 获取菜单列表
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mockRoute)
    })
  })
}
