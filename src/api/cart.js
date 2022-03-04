import request from '@/utils/request'
const path = `${process.env.VUE_APP_PATH}`

/**
 * 取得購物車列表
 * @returns Promise
 */
export const getCartList = () => {
  return request(`/api/${path}/cart`, 'get')
}

/**
 * 加入購物車
 * @param {String} prodcutId - 產品id
 * @param {Integer} count - 數量
 * @returns Promise
 */
export const insertCart = (prodcutId, count) => {
  return request(`/api/${path}/cart`, 'post', { data: { product_id: prodcutId, qty: count } })
}

/**
 * 刪除購物車中的產品
 * @param {String} id - carts.id
 * @returns Promise
 */
export const deleteCart = (id) => {
  return request(`/api/${path}/cart/${id}`, 'delete')
}

/**
 * 刪除所有購物車產品 (清空購物車)
 * @returns Promise
 */
export const deleteAllCarts = () => {
  return request(`/api/${path}/carts`, 'delete')
}

/**
 * 修改購物車產品數量
 * @param {String} prodcutId - 產品id
 * @param {Integer} count - 數量
 * @returns Promise
 */
export const updateCart = ({ prodcutId, count }) => {
  return request(`/api/${path}/cart/${prodcutId}`, 'put', { data: { product_id: prodcutId, qty: count } })
}
