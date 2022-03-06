<template>
  <div class="container">
    <!-- 輪播圖 -->
    <GoCarousel />
  </div>
  <!-- 首頁主要區塊 -->
  <HomeMain />
</template>

<script>
import HomeMain from './home/HomeMain.vue'
export default {
  name: 'HomePage',
  components: { HomeMain }
}
</script>
