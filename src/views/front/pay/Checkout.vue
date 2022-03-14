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
    <PayStep />
    <!-- 購物車內容 & 資料填寫 -->
    <div
      class="row g-0 bg-white rounded justify-content-between flex-md-row-reverse p-3 mt-4 mb-4 shadow-sm"
      style="position: relative"
    >
      <!-- loading 元件 -->
      <Loading :active="isLoading" :is-full-page="false" />
      <div class="col-md-6 col-lg-5 px-3 mt-3">
        <h2 class="h2 mb-3">訂單明細</h2>
        <ul class="list-unstyled">
          <li
            class="d-flex align-items-center mb-4"
            v-for="item in cartData.carts"
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
        <div class="input-group mb-4">
          <input
            type="text"
            class="form-control p-2"
            placeholder="已套用優惠"
            disabled
            v-if="isDiscount"
          />
          <input
            type="text"
            class="form-control p-2"
            placeholder="輸入折扣碼"
            v-model="code"
            v-else
          />
          <button
            type="button"
            class="btn btn-sm btn-primary px-3"
            :disabled="isDiscount"
            @click="useDiscount"
          >
            使用優惠券
          </button>
        </div>
        <p class="text-primary text-end" v-if="!isDiscount">
          總金額：NT$ <span class="fs-4">{{ cartData.total }}</span>
        </p>
        <div v-else class="text-end">
          <small class="fs-7 text-muted">
            總金額：NT$ {{ cartData.total }}
          </small>
          <p class="text-primary">
            折扣後金額：
            <span class="fs-4 text-success"
              >NT${{ Math.round(cartData.final_total) }}</span
            >
          </p>
        </div>
      </div>
      <div class="col-md-6 border rounded p-3">
        <CheckoutForm />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import PayStep from './components/PayStep.vue'
import CheckoutForm from './components/CheckoutForm.vue'
import { useStore } from 'vuex'
import Message from '@/components/library/Message'
import { useCoupon } from '@/api/coupon'
export default {
  name: 'Checkout',
  components: { PayStep, CheckoutForm },
  setup() {
    const isLoading = ref(true)
    const isDiscount = ref(false)

    // 取得購物車資訊
    const store = useStore()
    store.dispatch('cart/findCart').then(() => {
      isLoading.value = false
    })

    // 套用折扣碼
    const code = ref('')
    const useDiscount = async () => {
      if (code.value.trim() === '') return Message({ text: '請先輸入折扣碼' })
      try {
        const data = await useCoupon({ code: code.value })
        Message({ type: 'success', text: data.message })
        isDiscount.value = true
        console.log(data)
      } catch (err) {
        Message({ type: 'error', text: err.response.data.message })
      }
    }

    return {
      isLoading,
      isDiscount,
      cartData: computed(() => store.state.cart.cartData),
      code,
      useDiscount
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
