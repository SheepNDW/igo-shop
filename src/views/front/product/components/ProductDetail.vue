<template>
  <div class="banner">
    <div class="container">
      <div class="h-100 p-5">
        <h2 class="text-center text-primary fw-bold my-5">線上商城</h2>
      </div>
    </div>
  </div>
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
    <div class="row justify-content-center product-info py-5">
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
    <!-- 產品詳情 -->
    <!-- 相關推薦 -->
  </div>
</template>

<script>
import { ref } from 'vue'
import { getProductById } from '@/api/product'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import ProductImage from './ProductImage.vue'
import ProductName from './ProductName.vue'
import Message from '@/components/library/Message'
export default {
  name: 'ProductDetail',
  components: { ProductImage, ProductName },
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
.banner {
  background: url(https://storage.googleapis.com/vue-course-api.appspot.com/sheep-api/1646906649618.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=CWlLx4ZRvvK%2BaQ3lkj74ddJ6n244DAp7h3UalpnmuJMwkEFDOcgnC0tUAcDWrDr1wuOghzELVHJFt5ARZiEbrk0PV6qDs2132NCd8gam1ShYiREEUNO1oWKM1B4gWbiVlDgrH67uhongS4aoHwKi%2BMhwzNgjVbZPyyli5sXfejvINdASvrlai2f%2F6A0ENQApZokKTMPz3kKucjXfr4WYFpGoI7ulsuCLAFn7b%2FwS2oEmMZ4eUFxEcpusJWHPNpEvqF7uzUMQ%2FjaVaLzbKNi8viDufCpukNY8iTt9XdukL6cBQQHlybOX%2BBKuO5XCwgNt4Xd1%2F%2Ft4VWHm%2Fh3N69JKLA%3D%3D)
    center center / cover;
}

.product-info {
  min-height: 600px;
  background: #fff;
}
</style>
