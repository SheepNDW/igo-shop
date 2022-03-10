import { ref, onMounted, computed } from 'vue'
import { uploadImage } from '@/api/upload'
import Message from '@/components/library/Message'
import Modal from 'bootstrap/js/dist/modal'
import Collapse from 'bootstrap/js/dist/collapse'

/**
 * 上傳圖片 hook
 * @returns uploadInputRef, file, getUploadFile, upload
 */
export const useUpload = () => {
  const uploadInputRef = ref(null)
  const file = ref(null)

  const getUploadFile = () => {
    file.value = uploadInputRef.value.files[0]
  }

  const upload = async () => {
    // 判斷是否有上傳圖片
    if (!uploadInputRef.value.files[0]) return Message({ text: '請先上傳圖片' })

    const formData = new FormData()
    formData.append('file-to-upload', file.value)

    const data = await uploadImage(formData)
    if (data.success) {
      Message({ type: 'success', text: '圖片上傳成功' })
      return data.imageUrl
    }
    Message({ type: 'error', text: '僅限上傳 jpg、jpeg 與 png 格式' })
  }

  return {
    uploadInputRef,
    file,
    getUploadFile,
    upload
  }
}

/**
 * 取得分類的產品
 * @param {String} currentfilter - 當前選擇的分類
 * @param {Object} products - 所有的產品
 * @returns 所選分類的產品列表
 */
export const useFilterCategory = (currentfilter, products) => {
  const newProducts = computed(() => {
    if (currentfilter === 'all') return products
    return products.filter((item) => item.category === currentfilter)
  })

  return {
    newProducts
  }
}

/**
 * 取得分頁資訊
 * @param {Number} currentPage - 當前頁碼
 * @param {Object} products - 當前分類的產品
 * @returns pagination
 */
export const usePagination = (currentPage, products) => {
  const perPage = 9
  const totalPages = Math.ceil(products?.length / perPage)
  let hasNext = true
  let hasPre = true

  // #1 當前頁 === 總頁數
  if (currentPage === totalPages) {
    hasNext = false
  } else if (currentPage === 1) {
    // #2 當前頁 === 第一頁
    hasPre = false
  }

  const pagination = {
    total_pages: totalPages,
    current_page: currentPage,
    has_pre: hasPre,
    has_next: hasNext
  }

  return { pagination }
}

/**
 * bsModal hook
 * @param {ref} RefImpl - ref綁定的DOM
 * @returns openModal, closeModal
 */
export const useBsModal = (RefImpl) => {
  let bsModal = null
  onMounted(() => {
    bsModal = new Modal(RefImpl.value)
  })

  const openModal = () => {
    bsModal.show()
  }

  const closeModal = () => {
    bsModal.hide()
  }

  return {
    openModal,
    closeModal
  }
}

/**
 * bsCollapse hook
 * @param {ref} RefImpl - ref綁定的DOM
 * @returns closeNavHam, toggleNavHam
 */
export const useBsCollapse = (RefImpl) => {
  let bsCollapse = null
  onMounted(() => {
    bsCollapse = new Collapse(RefImpl.value, {
      toggle: false
    })
  })

  const closeNavHam = () => {
    bsCollapse.hide()
  }

  const toggleNavHam = () => {
    bsCollapse.toggle()
  }

  return {
    closeNavHam,
    toggleNavHam
  }
}
