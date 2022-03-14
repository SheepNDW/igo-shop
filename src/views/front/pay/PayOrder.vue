<template>
  <div class="banner">
    <div class="container">
      <div class="h-100 p-5">
        <h2 class="text-center text-primary fw-bold my-5">結帳流程</h2>
      </div>
    </div>
  </div>
  <div class="container mt-3">
    <!-- 進度 -->
    <PayStep :activeIndex="2" />
    <div
      class="row g-0 bg-white rounded justify-content-between flex-md-row-reverse p-3 mt-4 mb-4 shadow-sm"
      style="position: relative; min-height: 50vh"
    >
      <!-- loading 元件 -->
      <Loading :active="isLoading" :is-full-page="false" />
      <!-- 購買明細 -->
      <div class="col-md-6 col-lg-5 px-3 mt-3" v-if="order">
        <h2 class="h2 mb-3">購買明細</h2>
        <ul class="list-unstyled">
          <li
            class="d-flex align-items-center mb-4"
            v-for="item in order.products"
            :key="item.id"
          >
            <div
              class="bg-img"
              :style="{
                'background-image': `url(${item.product.imageUrl})`
              }"
            ></div>
            <div class="col px-3 d-flex">
              <div class="col-7 pe-2">
                <p class="ellipsis m-0">{{ item.product.title }}</p>
                <small class="text-muted">數量：{{ item.qty }}</small>
              </div>
              <div class="col-5 ls-1 text-end">NT$ {{ item.total }}</div>
            </div>
          </li>
        </ul>
        <div class="text-end">
          總金額：NT$ <span class="fs-4">{{ Math.round(order.total) }}</span>
        </div>
      </div>
      <!-- 訂購人資料 -->
      <div class="col-md-6 p-3" v-if="order">
        <h2 class="h2">購買人資訊</h2>
        <ul class="list-unstyled">
          <li class="list-group-item">
            <small>購買人姓名</small>
            <p>{{ order.user.name }}</p>
          </li>
          <li class="list-group-item">
            <small>Email</small>
            <p>{{ order.user.email }}</p>
          </li>
          <li class="list-group-item">
            <small>連絡電話</small>
            <p>{{ order.user.tel }}</p>
          </li>
          <li class="list-group-item">
            <small>收件地址</small>
            <p>{{ order.user.address }}</p>
          </li>
          <li class="list-group-item">
            <small>備註</small>
            <p>{{ order.message }}</p>
          </li>
          <li class="list-group-item">
            <small>付款狀態</small>
            <p v-if="order.is_paid" class="text-success">已付款</p>
            <p v-else class="text-danger">尚未付款</p>
          </li>
          <li class="list-group-item">
            <small>支付方式</small>
            <div class="d-flex justify-content-between">
              <p>{{ order.paymentMethod }}</p>
              <button
                @click="handlerPayment"
                type="button"
                class="btn btn-primary"
              >
                前往付款
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import PayStep from './components/PayStep.vue'
import { useRoute, useRouter } from 'vue-router'
import { getOrderById, payOrder } from '@/api/order'
export default {
  name: 'PayOrder',
  components: { PayStep },
  setup() {
    const isLoading = ref(true)

    // 獲取訂單資料
    const route = useRoute()
    const order = ref(null)
    getOrderById(route.params.id).then((data) => {
      order.value = data.order
      isLoading.value = false
    })

    // 前往付款
    const router = useRouter()
    const handlerPayment = () => {
      isLoading.value = true
      payOrder(route.params.id).then(() => {
        router.push(`/checkout/result/${route.params.id}`)
        isLoading.value = false
      })
    }

    return {
      isLoading,
      order,
      handlerPayment
    }
  }
}
</script>

<style lang="scss" scoped>
.banner {
  background: url(https://storage.googleapis.com/vue-course-api.appspot.com/sheep-api/1646906649618.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=CWlLx4ZRvvK%2BaQ3lkj74ddJ6n244DAp7h3UalpnmuJMwkEFDOcgnC0tUAcDWrDr1wuOghzELVHJFt5ARZiEbrk0PV6qDs2132NCd8gam1ShYiREEUNO1oWKM1B4gWbiVlDgrH67uhongS4aoHwKi%2BMhwzNgjVbZPyyli5sXfejvINdASvrlai2f%2F6A0ENQApZokKTMPz3kKucjXfr4WYFpGoI7ulsuCLAFn7b%2FwS2oEmMZ4eUFxEcpusJWHPNpEvqF7uzUMQ%2FjaVaLzbKNi8viDufCpukNY8iTt9XdukL6cBQQHlybOX%2BBKuO5XCwgNt4Xd1%2F%2Ft4VWHm%2Fh3N69JKLA%3D%3D)
    center center / cover;
}
.bg-img {
  width: 80px;
  height: 80px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  overflow: hidden;
}
</style>
