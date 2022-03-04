<template>
  <form
    ref="productModal"
    class="modal fade"
    id="productModal"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    @submit.prevent="updateProduct"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark p-3 text-light">
          <span v-if="isEdit">編輯產品</span>
          <span v-else>新增產品</span>
          <button
            type="button"
            class="btn-close btn-close-white me-1"
            data-bs-dismiss="modal"
          ></button>
        </div>
        <div class="modal-body">
          <!-- tabs標題 -->
          <ul class="nav nav-tabs" id="productTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="info-tab"
                data-bs-toggle="tab"
                data-bs-target="#info"
                type="button"
                role="tab"
              >
                產品資訊
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="content-tab"
                data-bs-toggle="tab"
                data-bs-target="#content"
                type="button"
                role="tab"
              >
                產品內容
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="picture-tab"
                data-bs-toggle="tab"
                data-bs-target="#picture"
                type="button"
                role="tab"
              >
                產品圖片
              </button>
            </li>
          </ul>
          <!-- tabs內容區域 -->
          <div class="tab-content" id="tabContent">
            <!-- 產品資訊 -->
            <div class="tab-pane fade show active" id="info" role="tabpanel">
              <div class="row g-2">
                <div class="col-8">
                  <label class="form-label" for="product-title">
                    商品名稱<small class="text-danger ms-1">*</small>
                  </label>
                  <input
                    type="text"
                    id="product-title"
                    class="form-control"
                    placeholder="輸入商品名稱"
                    required
                    v-model="product.title"
                  />
                </div>
                <div class="col-4">
                  <label class="form-label" for="product-category">
                    商品類別<small class="text-danger ms-1">*</small>
                  </label>
                  <select
                    id="product-category"
                    class="form-control form-select"
                    required
                    v-model="product.category"
                  >
                    <option value="" selected disabled>選擇類別</option>
                    <option v-for="item in category" :key="item" :value="item">
                      {{ item }}
                    </option>
                  </select>
                </div>
                <div class="col-4 mt-2">
                  <label class="form-label" for="product-origin-price">
                    原價<small class="text-danger ms-1">*</small>
                  </label>
                  <input
                    type="number"
                    min="0"
                    id="product-origin-price"
                    class="form-control"
                    placeholder="輸入原價"
                    required
                    v-model="product.origin_price"
                  />
                </div>
                <div class="col-4 mt-2">
                  <label class="form-label" for="product-price">
                    售價<small class="text-danger ms-1">*</small>
                  </label>
                  <input
                    type="number"
                    min="0"
                    id="product-price"
                    class="form-control"
                    placeholder="輸入售價"
                    required
                    v-model="product.price"
                  />
                </div>
                <div class="col-4 mt-2">
                  <label class="form-label" for="product-unit">
                    單位<small class="text-danger ms-1">*</small>
                  </label>
                  <input
                    id="product-unit"
                    class="form-control"
                    required
                    v-model="product.unit"
                  />
                </div>
                <hr class="mt-4" />
                <div class="col-4 d-flex align-items-center">
                  <label class="form-label m-0" for="product-active"
                    >是否上架</label
                  >
                  <div class="form-check ms-2">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="product-active"
                      role="button"
                      :true-value="1"
                      :false-value="0"
                      v-model.number="product.is_enabled"
                    />
                  </div>
                </div>
                <div class="col-4 d-flex align-items-center">
                  <label class="form-label m-0" for="product-hot"
                    >人氣推薦</label
                  >
                  <div class="form-check ms-2">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="product-hot"
                      role="button"
                      :true-value="1"
                      :false-value="0"
                      v-model.number="product.is_hot"
                    />
                  </div>
                </div>
              </div>
            </div>
            <!-- 產品內容 -->
            <div class="tab-pane fade show" id="content" role="tabpanel">
              <div class="row g-0">
                <div class="col-12">
                  <label class="form-label" for="product-desc">產品描述</label>
                  <textarea
                    class="form-control"
                    id="product-desc"
                    style="min-height: 120px"
                    placeholder="輸入產品內容"
                    row="5"
                    v-model="product.description"
                  />
                </div>
                <div class="col-12 mt-2">
                  <label class="form-label" for="product-content"
                    >產品內容</label
                  >
                  <textarea
                    id="product-content"
                    class="form-control"
                    style="min-height: 120px"
                    placeholder="輸入產品內容"
                    row="5"
                    v-model="product.content"
                  />
                </div>
              </div>
            </div>
            <!-- 產品圖片 -->
            <div class="tab-pane fade show" id="picture" role="tabpanel">
              <div class="row overflow-auto" style="max-height: 600px">
                <!-- 主圖 -->
                <div class="col-12 mt-2">
                  <h3 class="mb-3">
                    新增主圖<small class="text-danger ms-1">*</small>
                  </h3>
                  <div class="mb-1">
                    <div class="mb-3">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="請輸入圖片連結"
                        v-model="product.imageUrl"
                      />
                    </div>
                    <figure class="figure-fluid bg-light text-center">
                      <img
                        :src="product.imageUrl"
                        class="figure-img img-fluid rounded picture"
                      />
                    </figure>
                  </div>
                </div>
                <!-- 其他附圖 -->
                <div class="col-12 mt-2">
                  <h3 class="mb-3">其他圖片</h3>
                  <!-- 檢查是否存在imagesUrl屬性且為陣列 -->
                  <div v-if="Array.isArray(product.imagesUrl)">
                    <div class="col-12 d-flex">
                      <div
                        class="img-box"
                        v-for="(img, i) in product.imagesUrl"
                        :key="i"
                      >
                        <input
                          type="text"
                          class="form-control"
                          placeholder="請輸入圖片連結"
                          v-model="product.imagesUrl[i]"
                        />
                        <img
                          class="img-fluid img-thumbnail"
                          :src="img"
                          alt=""
                        />
                      </div>
                      <!-- 如果當前沒有多圖或是在最後一張圖後面加上新增按鈕 -->
                      <div
                        v-if="
                          !product.imagesUrl.length ||
                          product.imagesUrl[product.imagesUrl.length - 1]
                        "
                      >
                        <button
                          class="btn btn-outline-secondary btn-sm d-flex align-items-center"
                          @click="product.imagesUrl.push('')"
                        >
                          <i class="material-icons">add_photo_alternate</i>
                        </button>
                      </div>
                      <div v-else>
                        <button
                          class="btn btn-outline-danger btn-sm d-flex align-items-center"
                          @click="product.imagesUrl.pop()"
                        >
                          <i class="material-icons">delete_outline</i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <!-- 當前沒有imagesUrl -->
                  <div v-else>
                    <button
                      class="btn btn-outline-secondary btn-sm d-flex align-items-center"
                      @click="addImg"
                    >
                      <i class="material-icons">add_photo_alternate</i>
                    </button>
                  </div>
                </div>
                <div class="col-12 mt-3">
                  <label class="form-label" for="product-upload-file"
                    >上傳圖片</label
                  >
                  <div class="input-group">
                    <input
                      type="file"
                      name="file-to-upload"
                      class="form-control"
                      id="product-upload-file"
                      ref="uploadInputRef"
                      @change="getUploadFile"
                    /><button
                      class="btn btn-outline-secondary"
                      @click.prevent="uploadImage"
                    >
                      上傳圖片
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- footer -->
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button type="submit" class="btn btn-primary">確定</button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { ref, watch } from 'vue'
import { editProduct, uploadProduct } from '@/api/product'
import { productCategory } from '@/api/constants'
import Message from '@/components/library/Message'
import { useBsModal, useUpload } from '@/hooks'
export default {
  name: 'ProductModal',
  props: {
    tempProduct: {
      type: Object,
      default: () => ({ imagesUrl: [] })
    },
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update-list'],
  setup(props, { emit }) {
    const productModal = ref(null)
    const { openModal, closeModal } = useBsModal(productModal)

    // 將props傳入的物件先進行拷貝再進行修改
    const product = ref(props.tempProduct)
    watch(
      () => props.tempProduct,
      () => {
        product.value = JSON.parse(JSON.stringify(props.tempProduct))
      },
      { immediate: true }
    )

    // 新增圖片
    const addImg = () => {
      product.value.imagesUrl = []
      product.value.imagesUrl.push('')
    }

    // --- 修改 / 新增 產品的方法 ---
    const updateProduct = async () => {
      // 修改
      if (props.isEdit) {
        const data = await editProduct(product.value.id, product.value)
        Message({ type: 'success', text: data.message })
      }
      // 新增
      if (!props.isEdit) {
        const data = await uploadProduct(product.value)
        Message({ type: 'success', text: data.message })
      }
      closeModal()
      // 通知父元件更新產品列表
      emit('update-list')
    }

    // 上傳圖片邏輯
    const { uploadInputRef, file, getUploadFile, upload } = useUpload()
    const uploadImage = async () => {
      const imgUrl = await upload()
      if (imgUrl) {
        if (product.value.imagesUrl) {
          product.value.imagesUrl.push(imgUrl)
        } else {
          product.value.imagesUrl = []
          product.value.imagesUrl.push(imgUrl)
        }
      }
    }

    return {
      category: productCategory,
      product,
      productModal,
      closeModal,
      openModal,
      addImg,
      updateProduct,
      uploadInputRef,
      file,
      getUploadFile,
      uploadImage
    }
  }
}
</script>

<style lang="scss" scoped>
.picture {
  object-fit: contain;
  max-width: 100%;
  height: 100%;
  min-height: 9.5rem;
  max-height: 20rem;
  margin-bottom: 0;
}

.img-box {
  width: calc((100% - 1rem) / 3);
  min-height: 1rem;
  margin-right: 0.5rem;
}
</style>
