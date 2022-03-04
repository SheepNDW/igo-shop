import request from '@/utils/request'
const path = `${process.env.VUE_APP_PATH}`

/**
 * 獲取訂單列表
 * @param {Integer} page - 當前頁數
 * @returns Promise
 */
export const getArticles = (page = 1) => {
  return request(`/api/${path}/admin/articles?page=${page}`, 'get')
}

/**
 * 新增文章
 * @param {Object} article - 要新增的貼文
 * @returns Promise
 */
export const postArticle = (article) => {
  return request(`/api/${path}/admin/article`, 'post', { data: article })
}

/**
 * 修改貼文
 * @param {Object} article - 要修改的貼文
 * @returns Promise
 */
export const updateArticle = (article) => {
  return request(`/api/${path}/admin/article/${article.id}`, 'put', { data: article })
}

/**
 * 刪除一則貼文
 * @param {String} id - 要刪除的文章ID
 * @returns Promise
 */
export const deleteArticle = (id) => {
  return request(`/api/${path}/admin/article/${id}`, 'delete')
}
