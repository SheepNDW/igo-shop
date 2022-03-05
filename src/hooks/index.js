import { ref, onMounted } from 'vue'
import { uploadImage } from '@/api/upload'
import Message from '@/components/library/Message'
import Modal from 'bootstrap/js/dist/modal'
import Collapse from 'bootstrap/js/dist/collapse'

// 上傳圖片 hook
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

// bsModal hook
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

// bsCollapse hook
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
