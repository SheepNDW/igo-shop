<template>
  <AppNavbar />
  <div class="error container">
    <img src="@/assets/images/404.png" alt="" @click="$router.push('/')" />
    <p class="h3 text-primary">你好像迷路啦~ 點擊圖片回首頁</p>
  </div>
  <AppFooter />
</template>

<script>
import AppNavbar from '@/components/AppNavbar.vue'
import AppFooter from '@/components/AppFooter.vue'
export default {
  name: 'NotFound',
  components: { AppNavbar, AppFooter }
}
</script>

<style lang="scss" scoped>
.error {
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    cursor: pointer;
  }
}
</style>
