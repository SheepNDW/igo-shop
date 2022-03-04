import request from '@/utils/request'
const path = `${process.env.VUE_APP_PATH}`

/**
 * 取得優惠券列表
 * @param {Integer} page - 當前頁碼
 * @returns Promise
 */
export const getCoupons = (page = 1) => {
  return request(`/api/${path}/admin/coupons?page=${page}`, 'get')
}

/**
 * 新增優惠券
 * @param {Object} coupon - 要新增的優惠券
 * @returns Promise
 */
export const createCoupon = (coupon) => {
  return request(`/api/${path}/admin/coupon`, 'post', { data: coupon })
}

/**
 * 修改優惠券
 * @param {Object} coupon - 要修改的優惠券
 * @returns Promise
 */
export const updateCoupon = (coupon) => {
  return request(`/api/${path}/admin/coupon/${coupon.id}`, 'put', { data: coupon })
}

/**
 * 刪除優惠券
 * @param {String} id - 要刪除的優惠券ID
 * @returns Promise
 */
export const deleteCoupon = (id) => {
  return request(`/api/${path}/admin/coupon/${id}`, 'delete')
}
