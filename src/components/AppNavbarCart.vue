<template>
  <li class="nav-item cart">
    <RouterLink
      class="nav-link position-relative"
      to="/cart"
      @click="$emit('close-nav')"
    >
      <i class="material-icons-outlined">shopping_cart</i>
      <span
        v-show="totalQty"
        class="position-absolute top-1 start-70 translate-middle badge rounded-pill bg-danger"
      >
        {{ totalQty }}
      </span>
    </RouterLink>
    <!-- 購物車彈層 -->
    <div class="layer" v-if="carts.length > 0 && $route.path !== '/cart'">
      <div class="list">
        <div class="item" v-for="item in carts" :key="item.id">
          <!-- bug: 在產品詳情頁中跳轉失效 -->
          <RouterLink :to="`/product/${item.product.id}`">
            <img :src="item.product.imageUrl" alt="" />
            <div class="center">
              <p class="name ellipsis-2">{{ item.product.title }}</p>
              <p class="attr ellipsis">{{ item.product.description }}</p>
            </div>
            <div class="right">
              <p class="price">&#36;{{ $currency(item.product.price) }}</p>
              <p class="count">{{ item.qty }}</p>
            </div>
          </RouterLink>
          <i class="material-icons-outlined" @click="removeCartItem(item.id)"
            >close</i
          >
        </div>
      </div>
      <div class="foot">
        <div class="total">
          <p>共 {{ totalQty }} 件商品</p>
          <p>&#36;{{ $currency($store.state['cart'].cartData.total) }}</p>
        </div>
        <button
          type="button"
          class="btn btn-primary"
          @click="$router.push('/cart')"
        >
          去購物車結帳
        </button>
      </div>
    </div>
  </li>
</template>

<script>
import { computed } from 'vue-demi'
import { useStore } from 'vuex'
import Message from './library/Message'
export default {
  name: 'AppNavbarCart',
  setup() {
    const store = useStore()
    store.dispatch('cart/findCart')

    // 刪除操作
    const removeCartItem = (id) => {
      store
        .dispatch('cart/removeCart', id)
        .then(() => {
          Message({ type: 'success', text: '刪除成功' })
        })
        .catch((e) => {
          Message({ type: 'danger', text: '刪除失敗' })
        })
    }

    return {
      carts: computed(() => store.state.cart.cartData.carts),
      totalQty: computed(() => store.getters['cart/totalQty']),
      removeCartItem
    }
  }
}
</script>

<style lang="scss" scoped>
$priceColor: #cf4444;
.cart {
  position: relative;
  z-index: 600;
  &:hover {
    .layer {
      opacity: 1;
      transform: none;
    }
  }
  .layer {
    opacity: 0;
    transition: all 0.4s 0.2s;
    transform: translateY(-200px) scale(1, 0);
    width: 400px;
    height: 400px;
    position: absolute;
    top: 50px;
    right: 0;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    background: #fff;
    border-radius: 4px;
    padding-top: 10px;
    // 尖端三角形
    &::before {
      content: '';
      position: absolute;
      right: 14px;
      top: -10px;
      width: 20px;
      height: 20px;
      background: #fff;
      transform: scale(0.6, 1) rotate(45deg);
      box-shadow: -3px -3px 5px rgba(0, 0, 0, 0.1);
    }
    .foot {
      position: absolute;
      left: 0;
      bottom: 0;
      height: 70px;
      width: 100%;
      padding: 10px;
      display: flex;
      justify-content: space-between;
      background: #f8f8f8;
      align-items: center;
      font-size: 14px;
      .total {
        padding-left: 10px;
        color: #999;
        p {
          margin-bottom: 0;
          &:last-child {
            font-size: 18px;
            color: $priceColor;
          }
        }
      }
    }
    .list {
      height: 310px;
      overflow: auto;
      padding: 0 10px;
      &::-webkit-scrollbar {
        width: 10px;
        height: 10px;
      }
      &::-webkit-scrollbar-track {
        background: #f8f8f8;
        border-radius: 2px;
      }
      &::-webkit-scrollbar-thumb {
        background: #eee;
        border-radius: 10px;
      }
      &::-webkit-scrollbar-thumb:hover {
        background: #ccc;
      }
      .item {
        border-bottom: 1px solid #f5f5f5;
        padding: 10px 0;
        position: relative;
        i {
          position: absolute;
          bottom: 38px;
          right: 0;
          opacity: 0;
          color: #666;
          transition: all 0.5s;
        }
        &:hover {
          i {
            opacity: 1;
            cursor: pointer;
          }
        }
        a {
          display: flex;
          align-items: center;
          img {
            height: 80px;
            width: 80px;
          }
          .center {
            padding: 0 10px;
            width: 200px;
            .name {
              font-size: 16px;
            }
            .attr {
              color: #999;
              padding-top: 5px;
            }
          }
          .right {
            width: 100px;
            padding-right: 20px;
            text-align: center;
            .price {
              font-size: 16px;
              color: $priceColor;
            }
            .count {
              color: #999;
              margin-top: 5px;
              font-size: 16px;
            }
          }
        }
      }
    }
  }
}
</style>
