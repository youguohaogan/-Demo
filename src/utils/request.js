import axios from 'axios'
import { requestErr, loginTimeOut, errorMessage } from '@/utils/tools'
import store from '@/store/index'
axios.defaults.withCredentials = true
window.axiosCancel = []
const service = axios.create({
  timeout: 20000
})
service.interceptors.request.use(
  config => {
    const user = store.state.login.user
    const { emsNum, sessionId } = user
    if (emsNum && sessionId) {
      config.headers.Authorization = `Bearer ${sessionId}`
      return config
    } else {
      return config
    }
  },
  error => {
    return Promise.reject(error)
  }
)
service.interceptors.response.use(
  response => {
    const { code } = response.data
    const hasBlob = response.request.responseType === 'blob'
    if ((Number(code) === 200 && Number(response.status) === 200) || hasBlob || code === '0000') {
      return response.data
    } else if (Number(code) === 500) {
      errorMessage('登录过期,即将重新登录')
      loginTimeOut()
      return Promise.reject(response.data)
    } else {
      return Promise.reject(response.data)
    }
  },
  err => {
    requestErr(err)
    return Promise.reject(err)
  }
)
export default service
