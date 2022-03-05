<template>
  <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <!-- logo -->
      <h1>
        <RouterLink class="navbar-brand" to="/" @click="closeNavHam">
          GO Shop
        </RouterLink>
      </h1>
      <!-- 漢堡選單 -->
      <button class="navbar-toggler" type="button" @click="toggleNavHam">
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- 導覽列 -->
      <div
        class="collapse navbar-collapse justify-content-end"
        ref="navbarCollapseRef"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/products" @click="closeNavHam">
              前台產品列表
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/cart" @click="closeNavHam"
              >購物車</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/admin" @click="closeNavHam"
              >前往後臺</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref } from 'vue'
import { useBsCollapse } from '@/hooks'
export default {
  name: 'AppNavbar',
  setup() {
    const navbarCollapseRef = ref(null)
    const { closeNavHam, toggleNavHam } = useBsCollapse(navbarCollapseRef)

    return { navbarCollapseRef, closeNavHam, toggleNavHam }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=RocknRoll+One&display=swap');

// logo 字體
.navbar-brand {
  font-family: 'RocknRoll One', sans-serif;
}
</style>
