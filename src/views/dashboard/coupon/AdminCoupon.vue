<template>
  <!-- 頭部區域 -->
  <HeaderAdmin subTitle="優惠券管理" />
  <!-- 卡片視圖 -->
  <div class="flex-fill overflow-auto p-3" style="position: relative">
    <!-- Loading 元件 -->
    <Loading :active="isLoading" :is-full-page="false" />
    <div class="card p-2 shadow-sm" style="min-height: 200px">
      <div class="card-body">
        <div class="d-flex justify-content-end mb-3">
          <button
            class="btn btn-primary ms-auto d-flex"
            type="button"
            @click="openCouponModal('new')"
          >
            <i class="material-icons me-2">add_circle_outline</i>
            新增優惠券
          </button>
        </div>
        <ul
          class="row g-0 list-unstyled rounded-0 p-2 coupons-list text-nowrap border-bottom border-2"
        >
          <li class="col-2">優惠券名稱</li>
          <li class="col-2">優惠碼</li>
          <li class="col-2">折扣</li>
          <li class="col-2">有效期限</li>
          <li class="col-2">狀態</li>
          <li class="col-2">操作</li>
        </ul>
        <ul class="list-group list-group-flush shadow-sm mb-4">
          <li
            class="list-group-item p-2"
            v-for="item in couponList"
            :key="item.id"
          >
            <div class="col-2">{{ item.title }}</div>
            <div class="col-2">{{ item.code }}</div>
            <div class="col-2">{{ item.percent }}折</div>
            <div class="col-2">
              {{ dayjs.unix(item.due_date).format('YYYY-MM-DD') }}
            </div>
            <div class="col-2 text-success" v-if="item.is_enabled">
              <i class="material-icons">check_circle</i>
            </div>
            <div class="col-2 text-danger" v-else>
              <i class="material-icons">cancel</i>
            </div>
            <div class="col-2 d-flex justify-content-center">
              <button
                class="btn btn-sm btn-outline-primary fs-7"
                type="button"
                @click="openCouponModal('edit', item)"
              >
                編輯
              </button>
              <button
                class="btn btn-sm btn-outline-danger fs-7 ms-2 ms-md-3"
                type="button"
                @click="removeCoupon(item.id)"
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
      </div>
    </div>
  </div>
  <CouponModal
    ref="couponModalCom"
    :is-edit="isEdit"
    :temp-coupon="tempCoupon"
    @update-coupon="handlerUpdate"
  />
</template>

<script>
import { ref } from 'vue'
import HeaderAdmin from '@/components/AppHeaderAdmin.vue'
import CouponModal from './components/CouponModal.vue'
import {
  createCoupon,
  deleteCoupon,
  getCoupons,
  updateCoupon
} from '@/api/coupon'
import dayjs from 'dayjs'
import Message from '@/components/library/Message'
import Confirm from '@/components/library/Confirm'
export default {
  name: 'AdminCoupon',
  components: { HeaderAdmin, CouponModal },
  setup() {
    const isLoading = ref(true)

    // 取得優惠券列表
    const couponList = ref(null)
    const pagination = ref(null)

    const getCouponList = async (page) => {
      isLoading.value = true
      const data = await getCoupons(page)
      couponList.value = data.coupons
      pagination.value = data.pagination
      isLoading.value = false
    }
    getCouponList()

    // 換頁函式
    const changePager = (page) => getCouponList(page)

    // 想要顯示在modal的優惠券
    const tempCoupon = ref({})

    // 開啟優惠券Modal
    const isEdit = ref(false)
    const couponModalCom = ref(null)
    const openCouponModal = (status, coupon = { is_enabled: 1 }) => {
      tempCoupon.value = coupon
      if (status === 'new') isEdit.value = false
      if (status === 'edit') isEdit.value = true
      couponModalCom.value.openModal()
    }

    // 修改 or 新增優惠券的方法
    const handlerUpdate = async (coupon) => {
      // 修改
      if (isEdit.value) {
        await updateCoupon(coupon)
        Message({ type: 'success', text: '已更新優惠券' })
      }
      // 新增
      if (!isEdit.value) {
        const data = await createCoupon(coupon)
        Message({ type: 'success', text: data.message })
      }
      // 關閉 Modal 並更新畫面
      couponModalCom.value.closeModal()
      getCouponList()
    }

    // 刪除優惠券方法
    const removeCoupon = (id) => {
      Confirm({ text: '你確定要刪除此優惠券嗎' })
        .then(() => {
          deleteCoupon(id).then((data) => {
            Message({ type: 'success', text: data.message })
            getCouponList()
          })
        })
        .catch((e) => {})
    }

    return {
      isLoading,
      couponList,
      pagination,
      changePager,
      dayjs,
      tempCoupon,
      couponModalCom,
      openCouponModal,
      isEdit,
      handlerUpdate,
      removeCoupon
    }
  }
}
</script>

<style lang="scss" scoped>
// 標題欄
.coupons-list {
  text-align: center;
  background: #e9ecef;
}

// 優惠券列表
.list-group-item {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
