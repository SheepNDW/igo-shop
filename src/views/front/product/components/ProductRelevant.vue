<template>
  <div class="row mb-3">
    <div class="header">
      <i class="icon" />
      <span class="title">人氣熱銷</span>
    </div>
    <GoCarousel :slides="hotProducts" />
  </div>
</template>

<script>
import { ref } from 'vue'
import { getProductsAll } from '@/api/product'
export default {
  name: 'ProductRelevant',
  setup() {
    const hotProducts = ref([])
    getProductsAll().then((data) => {
      hotProducts.value = data.products.filter((item) => item?.is_hot === 1)
    })

    return { hotProducts }
  }
}
</script>

<style lang="scss" scoped>
.row {
  background: #fff;
  .header {
    height: 80px;
    line-height: 80px;
    padding: 0 20px;
    .title {
      font-size: 20px;
      padding-left: 10px;
    }
    .icon {
      width: 16px;
      height: 16px;
      display: inline-block;
      border-top: 4px solid #333;
      border-right: 4px solid #333;
      box-sizing: border-box;
      position: relative;
      transform: rotate(45deg);
      &::before {
        content: '';
        width: 10px;
        height: 10px;
        position: absolute;
        left: 0;
        top: 2px;
        background: lighten(#333, 40%);
      }
    }
  }
}
</style>
