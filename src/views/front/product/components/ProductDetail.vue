<template>
  <GoBanner title="shop">線上商城</GoBanner>
  <!-- Loading 元件 -->
  <Loading :active="isLoading" :is-full-page="false" />
  <div class="container" v-if="product">
    <!-- 麵包屑 -->
    <GoBread>
      <GoBreadItem to="/">首頁</GoBreadItem>
      <GoBreadItem to="/products">線上商城</GoBreadItem>
      <GoBreadItem to="/products">{{ product.category }}</GoBreadItem>
      <GoBreadItem>{{ product.title }}</GoBreadItem>
    </GoBread>
    <!-- 產品資訊 -->
    <div class="row justify-content-center product-info py-5 mb-3">
      <!-- media -->
      <ProductImage :images="product.imagesUrl" />
      <!-- desc -->
      <div class="col-12 col-lg-5">
        <ProductName :product="product" />
        <GoNumbox label="數量" v-model="qty" />
        <button
          type="button"
          class="btn btn-lg btn-primary mt-4 fs-6"
          :disabled="isLoadingItem"
          @click="addToCart(product.id)"
        >
          <span
            v-show="isLoadingItem"
            class="spinner-grow spinner-grow-sm"
          ></span>
          加入購物車
        </button>
      </div>
    </div>
    <!-- 相關推薦 -->
    <ProductRelevant />
    <!-- 產品描述 -->
    <div class="row justify-content-center product-info py-5">
      <div class="good-detail col-12 col-lg-6">
        <div class="h3 text-center pb-2 border-bottom">商品詳情</div>
        <p style="color: #666">{{ product.content }}</p>
        <ul class="list-unstyled">
          <li v-for="img in product.imagesUrl" :key="img">
            <img class="img-fluid mb-2" :src="img" alt="" />
          </li>
        </ul>
      </div>
    </div>
    <!-- 注意事項 -->
    <ProductWarn />
  </div>
</template>

<script>
import { ref } from 'vue'
import { getProductById } from '@/api/product'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import ProductImage from './ProductImage.vue'
import ProductName from './ProductName.vue'
import ProductWarn from './ProductWarn.vue'
import ProductRelevant from './ProductRelevant.vue'
import Message from '@/components/library/Message'
export default {
  name: 'ProductDetail',
  components: { ProductImage, ProductName, ProductWarn, ProductRelevant },
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
    const isLoadingItem = ref(false)
    const addToCart = (id) => {
      isLoadingItem.value = true
      store.dispatch('cart/addToCart', { id, count: qty.value }).then(() => {
        qty.value = 1
        isLoadingItem.value = false
        Message({ type: 'success', text: '已成功加入購物車! ' })
      })
    }

    return { product, isLoading, qty, addToCart, isLoadingItem }
  }
}
</script>

<style lang="scss" scoped>
.product-info {
  min-height: 600px;
  background: #fff;
}
</style>
