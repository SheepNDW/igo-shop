<template>
  <div
    ref="confirmModal"
    class="modal fade"
    id="confirmModal"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="confirmModalLabel">{{ title }}</h5>
          <button type="button" class="btn-close" @click="cancel"></button>
        </div>
        <div class="modal-body d-flex">
          <i class="material-icons text-danger me-2">error</i>
          <span>{{ text }}</span>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="cancel">
            取消
          </button>
          <button type="button" class="btn btn-primary" @click="submit">
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useBsModal } from '@/hooks'
export default {
  name: 'GoConfirm',
  props: {
    title: {
      type: String,
      default: '溫馨提示'
    },
    text: {
      type: String,
      default: ''
    },
    cancelCallback: {
      type: Function
    },
    submitCallback: {
      type: Function
    }
  },
  setup(props) {
    // Modal相關方法
    const confirmModal = ref(null)
    const { openModal, closeModal } = useBsModal(confirmModal)

    onMounted(() => openModal())

    // 取消
    const cancel = () => {
      closeModal()
      props.cancelCallback()
    }

    // 確認
    const submit = () => {
      closeModal()
      props.submitCallback()
    }

    return { confirmModal, submit, cancel }
  }
}
</script>

<style lang="scss" scoped></style>
