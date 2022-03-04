<template>
  <div
    class="modal fade"
    id="couponModal"
    tabindex="-1"
    role="dialog"
    ref="couponModal"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header bg-dark p-3 text-light">
          <h5 class="modal-title" id="exampleModalLabel">
            <span v-if="isEdit">編輯優惠卷</span>
            <span v-else>新增優惠卷</span>
          </h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            @click="closeModal"
          ></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="title">標題</label>
            <input
              type="text"
              class="form-control"
              id="title"
              placeholder="請輸入標題"
              v-model="coupon.title"
            />
          </div>
          <div class="mb-3">
            <label for="coupon_code">優惠碼</label>
            <input
              type="text"
              class="form-control"
              id="coupon_code"
              placeholder="請輸入優惠碼"
              v-model="coupon.code"
            />
          </div>
          <div class="mb-3">
            <label for="due_date">到期日</label>
            <input
              type="date"
              class="form-control"
              id="due_date"
              v-model="dueDate"
            />
          </div>
          <div class="mb-3">
            <label for="price">折扣百分比</label>
            <input
              type="number"
              class="form-control"
              id="price"
              min="0"
              placeholder="請輸入折扣百分比"
              v-model.number="coupon.percent"
            />
          </div>
          <div class="mb-3">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                :true-value="1"
                :false-value="0"
                id="is_enabled"
                v-model.number="coupon.is_enabled"
              />
              <label class="form-check-label" for="is_enabled">
                是否啟用
              </label>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="closeModal">
            取消
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="$emit('update-coupon', coupon)"
          >
            {{ isEdit ? '更新優惠券' : '新增優惠卷' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue'
import { useBsModal } from '@/hooks'
import dayjs from 'dayjs'
export default {
  name: 'CouponModal',
  props: {
    tempCoupon: {
      type: Object,
      default: () => ({})
    },
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const couponModal = ref(null)
    const { openModal, closeModal } = useBsModal(couponModal)

    const coupon = ref({})
    const dueDate = ref('')
    watch(
      () => props.tempCoupon,
      () => {
        coupon.value = { ...props.tempCoupon }
        dueDate.value = dayjs.unix(coupon.value.due_date).format('YYYY-MM-DD')
      }
    )
    // 監聽 dueDate.value 並將產生的日期轉回 Unix 時間戳
    watch(
      () => dueDate.value,
      () => {
        coupon.value.due_date = dayjs(dueDate.value).unix()
      }
    )

    return {
      couponModal,
      openModal,
      closeModal,
      coupon,
      dueDate
    }
  }
}
</script>
