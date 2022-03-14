<template>
  <div class="banner">
    <div class="container">
      <div class="h-100 p-5">
        <h2 class="text-center text-primary fw-bold my-5">結帳流程</h2>
      </div>
    </div>
  </div>
  <div class="container mt-3">
    <PayStep :activeIndex="3" />
    <!-- 支付結果 -->
    <div
      class="row g-0 bg-white rounded justify-content-between flex-md-row-reverse p-3 mt-4 mb-4 shadow-sm"
      style="position: relative; min-height: 50vh"
    >
      <!-- loading 元件 -->
      <Loading :active="isLoading" :is-full-page="false" />
      <div class="pay-result">
        <span class="material-icons-outlined green">check_circle</span>
        <p class="tit">訂單支付成功</p>
        <p class="tip">我們將盡快為您發貨，收貨期間請保持手機暢通</p>
        <p>
          支付方式：<span>{{ order.paymentMethod }}</span>
        </p>
        <p>
          本次交易金額：<span class="red">${{ Math.round(order?.total) }}</span>
        </p>
        <button class="btn btn-secondary" @click="$router.push('/')">
          回到首頁
        </button>
        <p class="alert">
          温馨提示：碁人館不會以訂單異常、系統升級為由要求您點擊任何網址進行退款操作，保護資產、謹慎操作。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import PayStep from './components/PayStep.vue'
import { getOrderById } from '@/api/order'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
export default {
  name: 'PaidResult',
  components: { PayStep },
  setup() {
    const isLoading = ref(true)

    const store = useStore()
    const route = useRoute()
    const order = ref(null)
    getOrderById(route.params.id).then((data) => {
      order.value = data.order

      // 刷新購物車
      return store.dispatch('cart/findCart').then(() => {
        isLoading.value = false
      })
    })

    return {
      isLoading,
      order
    }
  }
}
</script>

<style lang="scss" scoped>
.banner {
  background: url(https://storage.googleapis.com/vue-course-api.appspot.com/sheep-api/1646906649618.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=CWlLx4ZRvvK%2BaQ3lkj74ddJ6n244DAp7h3UalpnmuJMwkEFDOcgnC0tUAcDWrDr1wuOghzELVHJFt5ARZiEbrk0PV6qDs2132NCd8gam1ShYiREEUNO1oWKM1B4gWbiVlDgrH67uhongS4aoHwKi%2BMhwzNgjVbZPyyli5sXfejvINdASvrlai2f%2F6A0ENQApZokKTMPz3kKucjXfr4WYFpGoI7ulsuCLAFn7b%2FwS2oEmMZ4eUFxEcpusJWHPNpEvqF7uzUMQ%2FjaVaLzbKNi8viDufCpukNY8iTt9XdukL6cBQQHlybOX%2BBKuO5XCwgNt4Xd1%2F%2Ft4VWHm%2Fh3N69JKLA%3D%3D)
    center center / cover;
}
.pay-result {
  padding: 100px 0;
  background: #fff;
  text-align: center;
  > .material-icons-outlined {
    font-size: 100px;
  }
  .green {
    color: #1dc779;
  }
  .red {
    color: #cf4444;
  }
  .tit {
    font-size: 24px;
  }
  p {
    line-height: 40px;
    font-size: 16px;
  }
  .btn {
    margin-top: 50px;
  }
  .alert {
    font-size: 12px;
    color: #999;
    margin-top: 50px;
  }
}
</style>
