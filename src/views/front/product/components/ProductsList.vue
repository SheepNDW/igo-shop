<template>
  <table class="table align-middle">
    <thead>
      <tr>
        <th>圖片</th>
        <th>商品名稱</th>
        <th>價格</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in products" :key="product.id">
        <td style="width: 200px">
          <div
            :style="{ backgroundImage: `url(${product.imageUrl})` }"
            style="
              width: 100px;
              height: 150px;
              background-size: cover;
              background-position: center;
            "
          ></div>
        </td>
        <td>{{ product.title }}</td>
        <td>
          <div v-if="product.price === product.origin_price" class="h5">
            {{ product.price }} 元
          </div>
          <div v-else>
            <del class="h6">原價 {{ product.origin_price }} 元</del>
            <div class="h5">現在只要 {{ product.price }} 元</div>
          </div>
        </td>
        <td>
          <div class="btn-group btn-group-sm">
            <button
              @click="checkDetail(product.id)"
              type="button"
              class="btn btn-outline-secondary"
            >
              查看更多
            </button>
            <button
              @click="addToCart(product.id)"
              type="button"
              class="btn btn-danger"
              :disabled="isLoadingItem === product.id"
            >
              <span
                v-show="isLoadingItem === product.id"
                class="spinner-grow spinner-grow-sm"
              ></span>
              加到購物車
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <GoPagination
    v-if="pagination?.total_pages > 1"
    :pages="pagination"
    @change-page="changePager"
  />
</template>

<script>
import { ref } from 'vue'
import { getProducts } from '@/api/product'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
export default {
  name: 'ProductsList',
  setup() {
    // 頁面初始化時獲取產品列表
    const products = ref(null)
    const pagination = ref(null)
    getProducts().then((data) => {
      products.value = data.products
      pagination.value = data.pagination
    })

    // 查看產品細節
    const router = useRouter()
    const checkDetail = (id) => {
      router.push(`/product/${id}`)
    }

    // 加入購物車
    const isLoadingItem = ref('')
    const store = useStore()
    const addToCart = (id) => {
      isLoadingItem.value = id
      store.dispatch('cart/addToCart', { id, count: 1 }).then(() => {
        isLoadingItem.value = ''
      })
    }

    // 換頁函式
    const changePager = (page) => {
      getProducts(page).then((data) => {
        products.value = data.products
        pagination.value = data.pagination
      })
    }

    return {
      products,
      checkDetail,
      isLoadingItem,
      addToCart,
      pagination,
      changePager
    }
  }
}
</script>
