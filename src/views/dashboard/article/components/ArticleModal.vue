<template>
  <div ref="ArticleModalRef" class="modal fade">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header bg-dark p-3 text-light">
          <h5 class="modal-title">編輯貼文</h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            @click="closeModal"
          ></button>
        </div>
        <div class="modal-body">...</div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="closeModal">
            取消編輯
          </button>
          <button type="button" class="btn btn-primary">確定送出</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useBsModal } from '@/hooks'
export default {
  name: 'ArticleModal',
  setup() {
    const ArticleModalRef = ref(null)
    const { openModal, closeModal } = useBsModal(ArticleModalRef)

    return { ArticleModalRef, openModal, closeModal }
  }
}
</script>
