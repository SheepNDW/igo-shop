<template>
  <div class="app-footer bg-dark">
    <div class="container">
      <footer class="py-3">
        <ul
          class="nav justify-content-center border-bottom pb-3 mb-3 ul-border"
        >
          <li class="nav-item">
            <RouterLink to="/" class="nav-link px-2 text-muted"
              >首頁</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink to="/about" class="nav-link px-2 text-muted"
              >關於我們</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink to="/products" class="nav-link px-2 text-muted"
              >線上商城</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink to="/admin" class="nav-link px-2 text-muted"
              >進入後台</RouterLink
            >
          </li>
        </ul>
        <p class="text-center text-muted">&copy; 2022 Company, Inc</p>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style lang="scss" scoped>
.ul-border {
  border-color: rgba(#dee2e6, 0.4) !important;
}
</style>
