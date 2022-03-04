<template>
  <nav
    class="navbar navbar-dark navbar-expand-lg p-3 d-flex flex-lg-column align-items-start"
  >
    <RouterLink to="/" target="_blank" class="navbar-brand fs-6 fw-light"
      >GO Shop</RouterLink
    >
    <button
      class="navbar-toggler"
      data-bs-toggle="collapse"
      data-bs-target="#nav-collapse"
    >
      <i class="navbar-toggler-icon"></i>
    </button>
    <div class="collapse navbar-collapse" id="nav-collapse">
      <ul class="navbar-nav d-flex flex-column mt-lg-4">
        <li class="nav-item">
          <RouterLink class="nav-link px-0 d-flex" to="/admin/products">
            <i class="material-icons me-1">grid_view</i>
            產品管理
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link px-0 d-flex" to="/admin/coupon">
            <i class="material-icons me-1">local_atm</i>
            優惠券管理
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link px-0 d-flex" to="/admin/orders">
            <i class="material-icons me-1">shopping_cart_checkout</i>
            訂單管理
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link px-0 d-flex" to="/admin/article">
            <i class="material-icons me-1">article</i>
            文章管理 (施工中)
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarAdmin'
}
</script>
