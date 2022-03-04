import request from '@/utils/request'
// const path = 'sheep-api'

/**
 * 登入API
 * @param {Object} userInfo - 登入表單(username, password)
 * @returns Promise
 */
export const signin = (userInfo) => {
  return request('/admin/signin', 'post', userInfo)
}

/**
 * 驗證登入狀態
 * @returns Promise
 */
export const userCheck = () => {
  return request('/api/user/check', 'post')
}
