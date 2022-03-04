import axios from 'axios'
import router from '@/router'

export const baseURL = 'https://vue3-course-api.hexschool.io/v2'
const instance = axios.create({
  baseURL,
  timeout: 5000
})

instance.interceptors.request.use(config => {
  // 攔截業務邏輯
  // 進行請求配置的修改
  // 如果本地有token就在頭部攜帶

  const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
  if (token) {
    config.headers.Authorization = token
  }

  return config
}, err => {
  return Promise.reject(err)
})

// res => res.data 取出data資料, 將來打api時直接拿到的就是後台資料
instance.interceptors.response.use(res => res.data, err => {
  // 401 code 進入此函式
  if (err.response && err.response.status === 401) {
    alert(err.response.data.message)
    const fullPath = encodeURIComponent(router.currentRoute.value.fullPath)
    router.push('/login?redirectUrl=' + fullPath)
  }

  return Promise.reject(err)
})

// 請求工具函式
export default (url, method, submitData) => {
  // 負責發請求: 請求地址, 請求方式, 提交的資料
  return instance({
    url,
    method,
    [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
  })
}
