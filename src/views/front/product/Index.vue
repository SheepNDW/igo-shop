<template>
  <div class="container">
    <!-- 麵包屑 -->
    <GoBread>
      <GoBreadItem to="/">首頁</GoBreadItem>
      <GoBreadItem>線上商城</GoBreadItem>
    </GoBread>
    <!-- 產品列表 -->
    <ProductsList />
  </div>
</template>

<script>
import ProductsList from './components/ProductsList.vue'
export default {
  name: 'ProductsPage',
  components: { ProductsList }
}
</script>
