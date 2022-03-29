<template>
  <AppNavbar />
  <div class="app-body">
    <!-- 二級路由 -->
    <RouterView />
  </div>
  <AppFooter />
  <AppGoTop />
</template>

<script>
import AppNavbar from '@/components/AppNavbar.vue'
import AppFooter from '@/components/AppFooter.vue'
import AppGoTop from '@/components/AppGoTop.vue'
export default {
  name: 'Layout',
  components: { AppNavbar, AppFooter, AppGoTop }
}
</script>

<style lang="scss" scoped>
.app-body {
  min-height: 600px;
}
</style>
