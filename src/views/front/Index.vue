<template>
  <div class="container">
    <!-- 輪播圖 -->
    <HomeBanner />
  </div>
  <!-- 首頁主要區塊 -->
  <HomeMain />
  <!-- 首頁人氣推薦 -->
  <GoCarousel :slides="hotProducts" title="人氣推薦" />
</template>

<script>
import { ref } from 'vue'
import HomeBanner from './home/HomeBanner.vue'
import HomeMain from './home/HomeMain.vue'
import { getProductsAll } from '@/api/product'
export default {
  name: 'HomePage',
  components: { HomeMain, HomeBanner },
  setup() {
    // 取得人氣推薦產品
    const hotProducts = ref([])
    getProductsAll().then((data) => {
      hotProducts.value = data.products.filter((item) => item?.is_hot === 1)
    })

    return { hotProducts }
  }
}
</script>
