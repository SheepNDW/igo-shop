<template>
  <div class="container mt-3">
    <Loading :active="isLoading" />
    <div class="row" v-if="product">
      <div class="col-sm-6">
        <img class="img-fluid" :src="product.imageUrl" style="height: 400px" />
      </div>
      <div class="col-sm-6">
        <span class="badge bg-primary rounded-pill mb-2">
          {{ product.category }}
        </span>
        <div class="h3">{{ product.title }}</div>
        <p>商品描述：{{ product.description }}</p>
        <p>商品內容：{{ product.content }}</p>
        <div v-if="product.price === product.origin_price" class="h5">
          {{ product.price }} 元
        </div>
        <div v-else>
          <del class="h6">原價 {{ product.origin_price }} 元</del>
          <div class="h5">現在只要 {{ product.price }} 元</div>
        </div>
        <div class="col-md-4">
          <div class="input-group">
            <input
              type="number"
              class="form-control"
              min="1"
              v-model.number="qty"
            />
            <button
              @click="addToCart($route.params.id)"
              type="button"
              class="btn btn-primary"
            >
              加入購物車
            </button>
          </div>
        </div>
      </div>
      <!-- col-sm-6 end -->
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { getProductById } from '@/api/product'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
export default {
  name: 'ProductDetail',
  setup() {
    const isLoading = ref(true)
    // 獲取單一產品詳情
    const route = useRoute()
    const product = ref(null)
    getProductById(route.params.id).then((data) => {
      product.value = data.product
      isLoading.value = false
    })

    // 加入購物車
    const qty = ref(1)
    const store = useStore()
    const addToCart = (id) => {
      isLoading.value = true
      store.dispatch('cart/addToCart', { id, count: qty.value }).then(() => {
        qty.value = 1
        isLoading.value = false
      })
    }

    return { product, isLoading, qty, addToCart }
  }
}
</script>
