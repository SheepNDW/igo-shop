<template>
  <div class="cart-none">
    <img src="@/assets/images/none.png" alt="" />
    <p>購物車内沒有商品唷</p>
    <a
      href="#"
      class="btn btn-primary"
      @click.prevent="$router.push('/products')"
    >
      繼續逛逛
    </a>
  </div>
</template>
<script>
export default {
  name: 'CartNone'
}
</script>

<style lang="scss" scoped>
.cart-none {
  text-align: center;
  padding: 100px 0;
  img {
    width: 180px;
  }
  p {
    color: #999999;
    padding: 20px 0;
  }
}
</style>
