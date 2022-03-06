<template>
  <AppNavbar />
  <div class="app-body">
    <!-- 二級路由 -->
    <router-view></router-view>
  </div>
  <AppFooter />
</template>

<script>
import AppNavbar from '@/components/AppNavbar.vue'
import AppFooter from '@/components/AppFooter.vue'
export default {
  name: 'Layout',
  components: { AppNavbar, AppFooter }
}
</script>

<style lang="scss" scoped></style>
