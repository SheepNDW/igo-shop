<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-light shadow-sm sticky-top"
  >
    <div class="container">
      <RouterLink class="navbar-brand" to="/">前台頁面</RouterLink>
      <button class="navbar-toggler" type="button" @click="handlerToggle">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        :class="{ show: isOpen }"
        class="collapse navbar-collapse justify-content-center"
        id="navbarNav"
      >
        <ul class="navbar-nav">
          <li class="nav-item" @click="isOpen = !isOpen">
            <RouterLink class="nav-link" to="/products">
              前台產品列表
            </RouterLink>
          </li>
          <li class="nav-item" @click="isOpen = !isOpen">
            <RouterLink class="nav-link" to="/cart">購物車</RouterLink>
          </li>
          <li class="nav-item" @click="isOpen = !isOpen">
            <RouterLink class="nav-link" to="/admin">前往後臺</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'AppNavbar',
  setup() {
    const isOpen = ref(false)
    const handlerToggle = () => {
      isOpen.value = !isOpen.value
    }

    return { isOpen, handlerToggle }
  }
}
</script>
