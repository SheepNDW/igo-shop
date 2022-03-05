<template>
  <div class="col-md-6">
    <div class="d-flex align-items-center mb-3">
      <h3 class="fs-5 m-0">購買產品內容</h3>
      <small class="text-danger ms-auto" v-if="order.code"
        >優惠碼：{{ order.code }}</small
      >
    </div>
    <div
      class="d-flex justify-content-between align-items-center border rounded p-2 my-2"
    >
      <p class="m-0">品項：{{ Object.keys(order.products).length }}</p>
      <p class="m-0">
        訂單金額：
        <span class="fs-5 fw-bold text-danger">{{ '$' + order.total }}</span>
      </p>
    </div>
    <ul class="list-unstyled mt-3">
      <li
        class="row d-flex align-items-center justify-content-around mb-2"
        v-for="item in order.products"
        :key="item"
      >
        <div class="col-5 img-box me-2">
          <img :src="item.product.imageUrl" />
        </div>
        <div class="col-4 d-flex flex-column justify-content-center">
          <p class="m-0">{{ item.product.title }}</p>
          <small>NT${{ item.product.price }}</small>
        </div>
        <div class="col-3 d-flex align-items-center text-nowrap">
          數量：<span>{{ item.qty }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { inject } from 'vue'
export default {
  name: 'OrderDetail',
  setup() {
    const order = inject('tempOrder')

    return { order }
  }
}
</script>

<style lang="scss" scoped>
.img-box {
  width: 5rem;
  height: 5rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
</style>
