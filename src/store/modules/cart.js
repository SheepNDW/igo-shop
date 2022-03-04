// 購物車模組

import { deleteAllCarts, deleteCart, getCartList, insertCart, updateCart } from '@/api/cart'

export default {
  namespaced: true,
  state() {
    return {
      cartData: {
        carts: [],
        final_total: 0,
        total: 0
      }
    }
  },
  mutations: {
    // 設置購物車
    SET_CART(state, payload) {
      state.cartData = payload
    }
  },
  actions: {
    // 加入購物車
    addToCart(ctx, payload) {
      return new Promise((resolve, reject) => {
        insertCart(payload.id, payload.count).then(() => {
          return getCartList()
        }).then((res) => {
          ctx.commit('SET_CART', res.data)
          resolve()
        })
      })
    },
    // 獲取購物車內容
    findCart(ctx) {
      return new Promise((resolve, reject) => {
        getCartList().then((res) => {
          ctx.commit('SET_CART', res.data)
          resolve()
        })
      })
    },
    // 刪除購物車中的產品 (單一)
    removeCart(ctx, payload) {
      return new Promise((resolve, reject) => {
        deleteCart(payload).then(() => {
          return getCartList()
        }).then((res) => {
          ctx.commit('SET_CART', res.data)
          resolve()
        })
      })
    },
    // 清空購物車
    clearAllCarts(ctx) {
      return new Promise((resolve, reject) => {
        deleteAllCarts().then(() => {
          return getCartList()
        }).then((res) => {
          ctx.commit('SET_CART', res.data)
          resolve()
        })
      })
    },
    // 修改購物車內容
    updateCart(ctx, payload) {
      return new Promise((resolve, reject) => {
        updateCart(payload).then(() => {
          return getCartList()
        }).then((res) => {
          ctx.commit('SET_CART', res.data)
          resolve()
        })
      })
    }
  }
}
