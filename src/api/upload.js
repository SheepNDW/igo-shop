import request from '@/utils/request'
const path = `${process.env.VUE_APP_PATH}`

/**
 * 上傳圖片方法
 * @param {FormData} formData - FormData
 * @returns Promise
 */
export const uploadImage = (formData) => {
  return request(`/api/${path}/admin/upload`, 'post', formData)
}
