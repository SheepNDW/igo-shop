<template>
  <div class="subscribe d-flex justify-content-center align-items-center">
    <div class="container">
      <h2 class="fs-5 text-center text-white mb-3">
        {{
          isSubscribe
            ? '感謝您的訂閱! 這是您的折扣碼'
            : '訂閱我們獲得超值折扣碼!'
        }}
      </h2>
      <div class="w-50 mx-auto input-group" v-if="isSubscribe">
        <input
          type="text"
          class="col-4 form-control text-primary"
          readonly
          value="keepgoforever"
        />
        <button class="col-2 btn btn-secondary" disabled type="button">
          已訂閱
        </button>
      </div>
      <form @submit="handlerSubscribe" class="w-50 mx-auto input-group" v-else>
        <input
          name="信箱"
          type="email"
          class="col-4 form-control"
          placeholder="Email"
        />
        <button
          class="col-2 btn btn-primary"
          type="submit"
          id="button-subscribe"
        >
          訂閱
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'GoSubscribe',
  setup() {
    const isSubscribe = ref(false)

    const handlerSubscribe = () => {
      isSubscribe.value = true
    }

    return { isSubscribe, handlerSubscribe }
  }
}
</script>

<style lang="scss" scoped>
.subscribe {
  background: url('https://storage.googleapis.com/vue-course-api.appspot.com/sheep-api/1646805748268.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=TPShKCN0TKXnlcPEHjt%2BiWYkbv%2FmMGvVG4USzCe5rvWOpPnTTELS9l5kyLAtuVp1Z95J4Tk22wHc%2B9JP%2FfDPmIylfk%2FFB%2FJn6W05jj2Rr7HnnstR5T2VhIOZDsq%2BzHCsoM5n%2BaQundC5QlrLvIkqdZtHXOezTv6ZKu%2ByWLS8F2odEEZq0RfOat9KAzIVVIyVFNYlEgSgsdzZn4erYiDOOWrqlbU9H3UDZn64UqqHQdiLfJntt%2FyuSaCbpincmONuFshYvpJGiZJNt0xUKk%2BW0wKH2HvWVtNdtdz%2BT2PNd%2FbnnFbgrEkFiixPJ4EuLzufPB%2F6uP%2B7i6PNswCRn%2Fgp2g%3D%3D')
    center center no-repeat;
  height: 400px;
  background-size: cover;
  background-attachment: fixed;
  @media (max-width: 767.98px) {
    height: 250px;
    background-attachment: unset;
  }
}
</style>
