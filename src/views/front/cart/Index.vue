<template>
  <GoBanner title="shop">我的購物車</GoBanner>
  <div class="container position-relative">
    <!-- 麵包屑 -->
    <GoBread>
      <GoBreadItem to="/">首頁</GoBreadItem>
      <GoBreadItem>購物車</GoBreadItem>
    </GoBread>
    <!-- loading 元件 -->
    <Loading :active="isLoading" :is-full-page="false" />
    <!-- 購物清單 -->
    <ul
      class="row g-0 list-unstyled rounded-0 p-2 carts-list text-nowrap border-bottom border-2 mb-0"
    >
      <li class="col-3 col-md-5">商品資訊</li>
      <li class="col-1 d-none d-md-block">單價</li>
      <li class="col-5 col-md-3">數量</li>
      <li class="col-2 col-md-1">小計</li>
      <li class="col-2">操作</li>
    </ul>
    <ul class="list-group list-group-flush shadow-sm mb-4">
      <!-- 購物車為空 -->
      <li class="list-group-item p-2" v-if="cartData.carts.length === 0">
        <div class="col-12">
          <CartNone />
        </div>
      </li>
      <!-- 購物車有商品 -->
      <template v-if="cartData.carts.length > 0">
        <li
          class="list-group-item p-2"
          v-for="item in cartData.carts"
          :key="item.id"
        >
          <RouterLink
            :to="`/product/${item.product.id}`"
            class="col-md-2 d-none d-md-block"
          >
            <img class="product-img" :src="item.product.imageUrl" alt="" />
          </RouterLink>
          <p class="ellipsis col-3 col-md-3 text-start my-auto">
            {{ item.product.title }}
          </p>
          <div class="col-1 d-none d-md-block">
            {{ $currency(item.product.price) }}
          </div>
          <div class="col-5 col-md-3 d-flex justify-content-center">
            <GoNumbox
              @change="($event) => updateCount(item.id, $event)"
              :modelValue="item.qty"
            />
          </div>
          <div class="col-2 col-md-1">{{ $currency(item.total) }}</div>
          <div class="col-2">
            <i
              v-show="isLoadingItem !== item.id"
              class="material-icons-outlined"
              @click="removeCartItem(item.id)"
              >close</i
            >
            <div
              v-show="isLoadingItem === item.id"
              class="spinner-border spinner-border-sm"
              role="status"
            ></div>
          </div>
        </li>
      </template>
    </ul>
    <div class="row action">
      <button
        type="btn"
        class="col-2 btn btn-outline-danger"
        :disabled="cartData?.carts?.length === 0"
        @click="clearAllCarts"
      >
        <p class="d-none d-md-block my-auto">清空購物車</p>
        <p class="d-block d-md-none my-auto">清空</p>
      </button>
      <div class="col-10 total d-flex justify-content-end">
        <p class="d-none d-md-block my-auto">共 {{ totalQty }} 件商品，</p>
        <p class="my-auto">
          合計：<span class="red">${{ $currency(cartData.final_total) }}</span>
        </p>
        <button
          type="button"
          class="btn btn-primary"
          :disabled="cartData?.carts?.length === 0"
          @click="$router.push('/checkout')"
        >
          下單結帳
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed, ref } from 'vue'
import CartNone from './components/CartNone.vue'
import Confirm from '@/components/library/Confirm'
import Message from '@/components/library/Message'
export default {
  name: 'Cart',
  components: { CartNone },
  setup() {
    const isLoading = ref(true)
    const isLoadingItem = ref('')
    const store = useStore()

    // 獲取購物車清單
    store.dispatch('cart/findCart').then(() => {
      isLoading.value = false
    })
    const cartData = computed(() => store.state.cart.cartData)

    // 刪除購物車內容
    const removeCartItem = (id) => {
      Confirm({ text: '您確定要刪除該項商品嗎' })
        .then(() => {
          isLoadingItem.value = id
          store.dispatch('cart/removeCart', id).then(() => {
            Message({ type: 'success', text: '已成功刪除' })
            isLoadingItem.value = ''
          })
        })
        .catch((e) => {})
    }

    // 清空購物車 (全部刪除)
    const clearAllCarts = () => {
      Confirm({ text: '您確定要刪除所有商品嗎' })
        .then(() => {
          isLoading.value = true
          store.dispatch('cart/clearAllCarts').then(() => {
            Message({ type: 'success', text: '已成功刪除' })
            isLoading.value = false
          })
        })
        .catch((e) => {})
    }

    // 更新商品數量
    const updateCount = (id, qty) => {
      isLoadingItem.value = id
      store
        .dispatch('cart/updateCart', { prodcutId: id, count: qty })
        .then(() => {
          isLoadingItem.value = ''
        })
    }

    return {
      isLoading,
      isLoadingItem,
      cartData,
      removeCartItem,
      clearAllCarts,
      updateCount,
      totalQty: computed(() => store.getters['cart/totalQty'])
    }
  }
}
</script>

<style lang="scss" scoped>
// 標題欄
.carts-list {
  text-align: center;
  background: #e9ecef;
}

.list-group-item {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.product-img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  object-position: center;
}

i {
  cursor: pointer;
}

.action {
  display: flex;
  background: #fff;
  margin: 20px 0;

  height: 80px;
  align-items: center;
  font-size: 16px;
  justify-content: space-between;
  padding: 0 30px;
}

.red {
  color: #cf4444;
  font-size: 18px;
  margin-right: 20px;
  font-weight: bold;
}
</style>
