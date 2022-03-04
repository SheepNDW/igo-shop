import request from '@/utils/request'
const path = `${process.env.VUE_APP_PATH}`

// 前台 API
/**
 * 取得產品列表
 * @param {Number} page - 當前頁碼
 * @returns Promise
 */
export const getProducts = (page = 1) => {
  return request(`/api/${path}/products?page=${page}`, 'get')
}

/**
 * 根據id獲取產品的詳情
 * @param {String} id - 產品id
 * @returns Promise
 */
export const getProductById = (id) => {
  return request(`/api/${path}/product/${id}`, 'get')
}

// 後台 API
/**
 * 取得後台產品列表
 * @param {Number} page - 當前頁碼
 * @returns Promise
 */
export const getAdminProducts = (page = 1, category = '') => {
  return request(`/api/${path}/admin/products?page=${page}`, 'get', { category })
}

/**
 * 新增一個產品
 * @param {Object} product - 要新增的產品資料
 * @returns Promise
 */
export const uploadProduct = (product) => {
  return request(`/api/${path}/admin/product`, 'post', { data: product })
}

/**
 * 修改一個產品
 * @param {String} id - 要修改產品的ID
 * @param {Object} product - 要修改的產品
 * @returns Promise
 */
export const editProduct = (id, product) => {
  return request(`/api/${path}/admin/product/${id}`, 'put', { data: product })
}

/**
 * 刪除一個產品
 * @param {String} id - 要刪除的產品ID
 * @returns Promise
 */
export const deleteProduct = (id) => {
  return request(`/api/${path}/admin/product/${id}`, 'delete')
}
