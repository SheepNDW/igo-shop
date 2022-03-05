<template>
  <nav
    class="navbar navbar-dark navbar-expand-lg p-3 d-flex flex-lg-column align-items-start"
  >
    <RouterLink
      to="/"
      target="_blank"
      class="navbar-brand fs-6"
      @click="closeNavHam"
      >GO Shop</RouterLink
    >
    <button class="navbar-toggler" @click="toggleNavHam">
      <i class="navbar-toggler-icon"></i>
    </button>
    <hr class="w-100 bg-light border-bottom border-2 d-none d-lg-block" />
    <div class="collapse navbar-collapse" ref="navCollapseRef">
      <ul class="navbar-nav d-flex flex-column">
        <li class="nav-item">
          <RouterLink
            class="nav-link px-0 d-flex"
            to="/admin/products"
            @click="closeNavHam"
          >
            <i class="material-icons-outlined me-1">grid_view</i>
            產品管理
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink
            class="nav-link px-0 d-flex"
            to="/admin/coupon"
            @click="closeNavHam"
          >
            <i class="material-icons-outlined me-1">local_atm</i>
            優惠券管理
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink
            class="nav-link px-0 d-flex"
            to="/admin/orders"
            @click="closeNavHam"
          >
            <i class="material-icons-outlined me-1">shopping_cart_checkout</i>
            訂單管理
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink
            class="nav-link px-0 d-flex"
            to="/admin/article"
            @click="closeNavHam"
          >
            <i class="material-icons-outlined me-1">article</i>
            文章管理 (施工中)
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { ref } from 'vue'
import { useBsCollapse } from '@/hooks'
export default {
  name: 'AdminNavbar',
  setup() {
    const navCollapseRef = ref(null)
    const { closeNavHam, toggleNavHam } = useBsCollapse(navCollapseRef)

    return { navCollapseRef, closeNavHam, toggleNavHam }
  }
}
</script>
