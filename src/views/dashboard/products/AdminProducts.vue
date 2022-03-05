<template>
  <!-- 頭部區域 -->
  <AdminHeader />
  <!-- 卡片視圖 -->
  <div class="flex-fill overflow-auto p-3" style="position: relative">
    <!-- Loading 元件 -->
    <Loading :active="isLoading" :is-full-page="false" />
    <div class="card p-2 shadow-sm" style="min-height: 200px">
      <div class="card-body">
        <div class="d-flex justify-content-between mb-3">
          <select
            class="form-select filter-form"
            v-model="filter"
            @change="getFilterProducts"
          >
            <option value="" selected>全部</option>
            <option v-for="cate in category" :key="cate" :value="cate">
              {{ cate }}
            </option>
          </select>

          <button
            class="btn btn-primary ms-auto d-flex"
            type="button"
            @click="openModal('new')"
          >
            <i class="material-icons-outlined me-2">add_circle_outline</i>
            新增產品
          </button>
        </div>
        <ul
          class="row g-0 list-unstyled rounded-0 p-2 products-list text-nowrap border-bottom border-2"
        >
          <li class="col-2 d-none d-md-block">分類</li>
          <li class="col-3 text-start">商品名稱</li>
          <li class="col-2">原價</li>
          <li class="col-2">售價</li>
          <li class="col-1">狀態</li>
          <li class="col-3 col-md-2">操作</li>
        </ul>
        <ul class="list-group list-group-flush shadow-sm mb-4" v-if="products">
          <li
            class="list-group-item p-2"
            v-for="product in products"
            :key="product.id"
          >
            <div class="col-2 d-none d-md-block">
              <span class="badge bg-secondary fw-light category-badge">
                {{ product.category }}
              </span>
            </div>
            <div class="col-3 text-start">{{ product.title }}</div>
            <div class="col-2">{{ product.origin_price }}</div>
            <div class="col-2">{{ product.price }}</div>
            <div class="col-1 text-success" v-if="product.is_enabled">
              <i class="material-icons-outlined">check_circle</i>
            </div>
            <div class="col-1 text-danger" v-else>
              <i class="material-icons-outlined">cancel</i>
            </div>
            <div class="col-3 col-md-2 d-flex justify-content-center">
              <button
                class="btn btn-sm btn-outline-primary fs-7"
                type="button"
                @click="openModal('edit', product)"
              >
                編輯
              </button>
              <button
                class="btn btn-sm btn-outline-danger fs-7 ms-2 ms-md-3"
                type="button"
                @click="removeProduct(product.id)"
              >
                刪除
              </button>
            </div>
          </li>
        </ul>
        <!-- 分頁元件 -->
        <GoPagination
          v-if="pagination?.total_pages > 1"
          :pages="pagination"
          @change-page="changePager"
        />
        <!-- Modal元件 -->
        <ProductModal
          ref="productModalCom"
          :temp-product="tempProduct"
          :is-edit="isEdit"
          @update-list="getProducts"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { deleteProduct, getAdminProducts } from '@/api/product'
import ProductModal from './components/ProductModal.vue'
import AdminHeader from '@/components/AdminHeader.vue'
import Confirm from '@/components/library/Confirm'
import Message from '@/components/library/Message'
import { productCategory } from '@/api/constants'
export default {
  name: 'AdminProducts',
  components: { AdminHeader, ProductModal },
  setup() {
    const isLoading = ref(true)
    const filter = ref('')
    // 取得後台產品列表
    const products = ref(null)
    const pagination = ref(null)
    const getProducts = async (page) => {
      isLoading.value = true
      const data = await getAdminProducts(page, filter.value)
      products.value = data.products
      pagination.value = data.pagination
      isLoading.value = false
    }
    getProducts()

    // 換頁函式
    const changePager = (page) => getProducts(page)

    // 切換顯示產品類別
    const getFilterProducts = () => getProducts()

    // 想要顯示在modal的產品
    const tempProduct = ref({
      imagesUrl: []
    })

    // 打開modal
    const productModalCom = ref(null)
    const isEdit = ref(false)
    const openModal = (status, product = { imagesUrl: [], is_enabled: 1 }) => {
      tempProduct.value = product
      if (status === 'new') isEdit.value = false
      if (status === 'edit') isEdit.value = true
      productModalCom.value.openModal()
    }

    // 刪除產品方法
    const removeProduct = (id) => {
      Confirm({ text: '你確認要刪除此產品嗎' })
        .then(() => {
          deleteProduct(id).then((data) => {
            Message({ type: 'success', text: data.message })
            getProducts()
          })
        })
        .catch((e) => {})
    }

    return {
      category: productCategory,
      filter,
      getFilterProducts,
      isLoading,
      products,
      pagination,
      changePager,
      tempProduct,
      isEdit,
      openModal,
      productModalCom,
      getProducts,
      removeProduct
    }
  }
}
</script>

<style lang="scss" scoped>
.filter-form {
  max-width: 200px;
}

// 分類標籤
.category-badge {
  font-size: 0.875rem;
}

// 列表標題欄
.products-list {
  text-align: center;
  background: #e9ecef;
}

// 產品列表
.list-group-item {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
