import request from '@/utils/request'
const path = `${process.env.VUE_APP_PATH}`

// 前台 API
/**
 * 建立訂單
 * @param {Object} order - 訂單資料表單
 * @returns Promise
 */
export const createOrder = (order) => {
  return request(`/api/${path}/order`, 'post', { data: order })
}

/**
 * 根據 ID 查詢訂單
 * @param {String} orderId - 訂單ID
 * @returns Promise
 */
export const getOrderById = (orderId) => {
  return request(`/api/${path}/order/${orderId}`, 'get')
}

/**
 * 付款
 * @param {String} orderId - 訂單ID
 * @returns Promise
 */
export const payOrder = (orderId) => {
  return request(`/api/${path}/pay/${orderId}`, 'post')
}

// 後台 API
/**
 * 取得後台訂單列表
 * @param {Integer} page - 當前頁碼
 * @returns Promise
 */
export const getOrdersList = (page = 1) => {
  return request(`/api/${path}/admin/orders?page=${page}`, 'get')
}

/**
 * 修改訂單資訊 (付費狀態、訂購人資訊)
 * @param {Object} order - tempOrder
 * @returns Promise
 */
export const updateOrder = (order) => {
  return request(`/api/${path}/admin/order/${order.id}`, 'put', { data: order })
}

/**
 * 刪除一筆訂單
 * @param {String} id - 訂單ID
 * @returns Promise
 */
export const deleteOrder = (id) => {
  return request(`/api/${path}/admin/order/${id}`, 'delete')
}

/**
 * 刪除所有訂單
 * @returns Promise
 */
export const clearOrder = () => {
  return request(`/api/${path}/admin/orders/all`, 'delete')
}
