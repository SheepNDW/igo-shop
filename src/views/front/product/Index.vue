<template>
  <div class="container">
    <div class="row mt-4">
      <ProductsList />
    </div>
  </div>
</template>

<script>
import ProductsList from './components/ProductsList.vue'
export default {
  name: 'ProductsPage',
  components: { ProductsList }
}
</script>
