<template>
  <nav
    class="navbar sticky-top navbar-expand-lg shadow-sm"
    :class="[dynamicClassList.nav, dynamicClassList.bg]"
  >
    <div class="container">
      <!-- logo -->
      <h1 class="d-flex mb-0">
        <RouterLink class="navbar-brand" to="/" @click="closeNavHam">
          碁人館 - GO Shop
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
        <ul class="navbar-nav align-items-md-center">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/whatisgo" @click="closeNavHam">
              認識圍棋
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/products" @click="closeNavHam">
              線上商城
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/about" @click="closeNavHam">
              關於我們
            </RouterLink>
          </li>
          <!-- 使用頭部購物車元件 -->
          <AppNavbarCart @close-nav="closeNavHam" />
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { onMounted, reactive, ref } from 'vue'
import { useBsCollapse } from '@/hooks'
import AppNavbarCart from './AppNavbarCart.vue'

export default {
  name: 'AppNavbar',
  components: { AppNavbarCart },
  setup() {
    const navbarCollapseRef = ref(null)
    const { closeNavHam, toggleNavHam } = useBsCollapse(navbarCollapseRef)

    // 動態綁定的 class 名稱
    const dynamicClassList = reactive({
      nav: 'navbar-light',
      bg: 'bg-white'
    })
    // 控制 nav 選單的樣式函式
    const navStyle = () => {
      const windowY = window.scrollY

      if (windowY > 100) {
        dynamicClassList.nav = 'navbar-dark'
        dynamicClassList.bg = 'bg-dark'
      } else if (windowY < 100) {
        dynamicClassList.nav = 'navbar-light'
        dynamicClassList.bg = 'bg-white'
      }
    }
    // 掛載完成時替 window 掛上一個監聽事件
    onMounted(() => window.addEventListener('scroll', navStyle))

    return {
      navbarCollapseRef,
      closeNavHam,
      toggleNavHam,
      dynamicClassList
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=RocknRoll+One&display=swap');

// logo 字體
.navbar-brand {
  font-family: 'RocknRoll One', sans-serif;
}

.navbar {
  transition: background-color 0.3s;
  z-index: 1030;
}

.bg-white {
  background: #fff;
}
</style>
