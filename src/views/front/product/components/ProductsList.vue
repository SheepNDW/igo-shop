<template>
  <div class="row">
    <!-- 左側分類欄 -->
    <div class="col-md-3 mb-2">
      <div class="scroll-content" style="position: sticky; top: 80px">
        <ul class="category-panel list-group list-unstyled text-center mt-2">
          <li>
            <a
              href="javascript:;"
              class="list-group-item list-group-item-action"
              :class="{ active: filter === 'all' }"
              @click.prevent="filterChanger('all')"
            >
              全部
            </a>
          </li>
          <li v-for="cate in categoryList" :key="cate">
            <a
              href="javascript:;"
              class="list-group-item list-group-item-action"
              :class="{ active: filter === cate }"
              @click.prevent="filterChanger(cate)"
            >
              {{ cate }}
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!-- 右側產品列表 -->
    <div class="col-md-9 position-relative">
      <!-- Loading 元件 -->
      <Loading :active="isLoading" :is-full-page="false" />
      <div class="row" v-if="productList">
        <div
          class="col-lg-4 col-md-6 mb-3"
          v-for="item in filterList"
          :key="item.id"
        >
          <div class="card h-100 position-relative product-card">
            <div class="product-card-imgbox">
              <div
                class="picture"
                :style="`background-image: url(${item.imageUrl})`"
                @click="$router.push(`/product/${item.id}`)"
              />
            </div>
            <div class="card-body">
              <div class="d-flex justify-content-between">
                <h5 class="card-title ellipsis">
                  {{ item.title }}
                </h5>
                <div>
                  <div class="badge rounded-pill bg-secondary h5">
                    {{ item.category }}
                  </div>
                </div>
              </div>
              <div class="d-flex justify-content-between">
                <template v-if="item.origin_price === item.price">
                  <span class="h5 ms-auto"
                    >原價： {{ item.origin_price }} 元</span
                  >
                </template>
                <template v-else>
                  <del>原價： {{ item.origin_price }} 元</del>
                  <span class="h5 ms-auto red">特價： {{ item.price }} 元</span>
                </template>
              </div>
              <div class="d-flex justify-content-center">
                <button
                  class="btn btn-outline-primary me-3"
                  type="button"
                  @click="$router.push(`/product/${item.id}`)"
                >
                  查看
                </button>
                <button
                  class="btn btn-primary d-flex align-items-center"
                  :disabled="isLoadingItem === item.id"
                  type="button"
                  @click="addToCart(item.id)"
                >
                  <span
                    v-show="isLoadingItem === item.id"
                    class="spinner-grow spinner-grow-sm"
                  ></span>
                  <i class="material-icons-round"> add_shopping_cart </i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GoPagination
        v-if="pages?.total_pages > 1"
        :pages="pages"
        @change-page="changePager"
      />
    </div>
  </div>
</template>

<script>
import { computed, ref, watchEffect } from 'vue'
import { productCategory } from '@/api/constants'
import { getProductsAll } from '@/api/product'
import { useFilterCategory, usePagination } from '@/hooks'
import { useStore } from 'vuex'
import Message from '@/components/library/Message'
export default {
  name: 'ProductsList',
  setup() {
    // 取得產品列表
    const productList = ref(null)
    const isLoading = ref(true)
    const getProducts = async () => {
      isLoading.value = true
      const data = await getProductsAll()
      productList.value = data.products
      isLoading.value = false
    }
    getProducts()

    // filter: 當前選中之分類, 預設為 all
    const filter = ref('all')
    const filterChanger = (currentCate) => {
      filter.value = currentCate
      currentPage.value = 1
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    // --- 對產品列表進行處理, 返回一個過濾後的列表 ---
    const currentPage = ref(1)
    const filterProducts = ref(null)
    const pages = ref(null)

    watchEffect(() => {
      // 產品列表
      const { newProducts } = useFilterCategory(filter.value, productList.value)
      filterProducts.value = newProducts.value
      // 分頁資料
      const { pagination } = usePagination(
        currentPage.value,
        filterProducts.value
      )
      pages.value = pagination
    })
    // 用計算屬性計算出當前頁碼顯示的產品列表
    const filterList = computed(() => {
      return filterProducts?.value.slice(
        (pages.value.current_page - 1) * 9,
        pages.value.current_page * 9
      )
    })

    const changePager = (page) => {
      currentPage.value = page
    }
    // ---------------------------------------------

    // 加入購物車功能
    const isLoadingItem = ref('')
    const store = useStore()
    const addToCart = (id) => {
      isLoadingItem.value = id
      store.dispatch('cart/addToCart', { id, count: 1 }).then(() => {
        isLoadingItem.value = ''
        Message({ type: 'success', text: '已成功加入購物車! ' })
      })
    }

    return {
      categoryList: productCategory,
      productList,
      filter,
      filterChanger,
      isLoading,
      filterList,
      pages,
      changePager,
      addToCart,
      isLoadingItem
    }
  }
}
</script>

<style lang="scss" scoped>
// 產品卡片
.product-card {
  &-imgbox {
    overflow: hidden;
  }
  .picture {
    background-size: cover;
    background-position: center center;
    height: 250px;
    transition: transform 0.5s;
    // hover 遮罩
    &:hover {
      position: relative;
      transform: scale(1.25);
      cursor: pointer;
      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.3);
      }
      &:after {
        content: '查看詳情';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #fff;
      }
    }
  }
}

.red {
  color: #cf4444;
  font-size: 18px;
  font-weight: bold;
}
</style>
