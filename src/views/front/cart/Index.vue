<template>
  <div class="container mt-3">
    <Loading :active="isLoading" />
    <!-- 購物車列表 -->
    <div class="text-end">
      <button
        @click="clearAllCarts"
        class="btn btn-outline-danger"
        type="button"
        :disabled="cartData?.carts?.length === 0"
      >
        清空購物車
      </button>
    </div>
    <table class="table align-middle">
      <thead>
        <tr>
          <th></th>
          <th>品名</th>
          <th style="width: 150px">數量/單位</th>
          <th class="col-md-2">單價</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="cartData.carts.length === 0">
          <td colspan="6">
            <CartNone />
          </td>
        </tr>
        <template v-if="cartData.carts.length > 0">
          <tr v-for="item in cartData.carts" :key="item.id">
            <td>
              <button
                @click="removeCartItem(item.id)"
                type="button"
                class="btn btn-outline-danger btn-sm"
              >
                x
              </button>
            </td>
            <td>
              {{ item.product.title }}
            </td>
            <td>
              <div class="input-group input-group-sm">
                <div class="input-group mb-3">
                  <select
                    v-model="item.qty"
                    class="form-select"
                    @change="updateCartItem(item)"
                    :disabled="isLoadingItem === item.id"
                  >
                    <option
                      :value="num"
                      v-for="num in 20"
                      :key="`${num}${item.id}`"
                    >
                      {{ num }}
                    </option>
                  </select>
                  <span class="input-group-text" id="basic-addon2">
                    {{ item.product.unit }}
                  </span>
                </div>
              </div>
            </td>
            <td class="text-end">
              <!-- <small class="text-success">折扣價：</small> -->
              NT${{ item.total }}
            </td>
          </tr>
        </template>
      </tbody>
      <tfoot v-if="cartData.carts.length > 0">
        <tr>
          <td colspan="3" class="text-end">總計</td>
          <td class="text-end">{{ cartData.total }}</td>
        </tr>
        <tr>
          <td colspan="3" class="text-end text-success">折扣價</td>
          <td class="text-end text-success">
            {{ cartData.final_total }}
          </td>
        </tr>
      </tfoot>
    </table>
    <div class="my-5 row justify-content-center">
      <CheckoutForm />
    </div>
  </div>
</template>

<script>
import CheckoutForm from './components/CheckoutForm.vue'
import CartNone from './components/CartNone.vue'
import { useStore } from 'vuex'
import { computed, ref } from 'vue'
export default {
  name: 'Cart',
  components: { CheckoutForm, CartNone },
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
      store.dispatch('cart/removeCart', id)
    }

    // 清空購物車 (全部刪除)
    const clearAllCarts = () => {
      store.dispatch('cart/clearAllCarts')
    }

    // 更新購物車
    const updateCartItem = (item) => {
      isLoadingItem.value = item.id
      store
        .dispatch('cart/updateCart', { prodcutId: item.id, count: item.qty })
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
      updateCartItem
    }
  }
}
</script>
