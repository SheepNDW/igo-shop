<template>
  <AppNavbar />
  <div class="app-body mt-2">
    <!-- 二級路由 -->
    <router-view></router-view>
  </div>
</template>

<script>
import AppNavbar from '@/components/AppNavbar.vue'
export default {
  name: 'Layout',
  components: { AppNavbar }
}
</script>

<style lang="scss" scoped></style>
