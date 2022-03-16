<template>
  <GoBanner title="shop">結帳流程</GoBanner>
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
          支付方式：<span>{{ order?.user?.payment_method }}</span>
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
