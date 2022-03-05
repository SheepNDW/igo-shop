<template>
  <!-- 頭部區域 -->
  <AdminHeader subTitle="訂單管理" />
  <!-- 卡片視圖 -->
  <div class="flex-fill overflow-auto p-3" style="position: relative">
    <!-- Loading 元件 -->
    <Loading :active="isLoading" :is-full-page="false" />
    <div class="card p-2 shadow-sm" style="min-height: 200px">
      <div class="card-body">
        <div class="d-flex justify-content-end align-items-center mb-3">
          <button
            class="btn btn-danger d-flex"
            type="button"
            @click="removeAllOrders"
          >
            <i class="material-icons me-1">delete</i>
            刪除全部訂單
          </button>
        </div>
        <ul
          class="row g-0 list-unstyled rounded-0 p-2 order-list text-nowrap border-bottom border-2"
        >
          <li class="col-2">建立時間</li>
          <li class="col-4">購買款項</li>
          <li class="col-2">金額</li>
          <li class="col-2">狀態</li>
          <li class="col-2">操作</li>
        </ul>
        <ul class="list-group list-group-flush shadow-sm mb-4">
          <li
            class="list-group-item p-2"
            v-for="order in orders"
            :key="order.id"
          >
            <div class="col-2">
              {{ dayjs.unix(order.create_at).format('YYYY-MM-DD HH:mm:ss') }}
            </div>
            <div class="col-4">
              <ul class="list-unstyled">
                <li v-for="(product, i) in order.products" :key="i">
                  {{ product.product.title }} 數量：{{ product.qty }}
                  {{ product.product.unit }}
                </li>
              </ul>
            </div>
            <div class="col-2">NT${{ order.total }}</div>
            <div class="col-2 text-success" v-if="order.is_paid">
              <span>已付款</span>
            </div>
            <div class="col-2 text-danger" v-else>
              <span>未付款</span>
            </div>
            <div class="col-2 d-flex justify-content-center">
              <button
                class="btn btn-sm btn-outline-primary fs-7"
                type="button"
                @click="open(order)"
              >
                編輯
              </button>
              <button
                class="btn btn-sm btn-outline-danger fs-7 ms-2 ms-md-3"
                type="button"
                @click="removeOrder(order.id)"
              >
                刪除
              </button>
            </div>
          </li>
        </ul>
        <GoPagination
          v-if="pagination?.total_pages > 1"
          :pages="pagination"
          @change-page="changePager"
        />
      </div>
    </div>
  </div>
  <OrderModal ref="orderModalCom" @update-list="updateOrderList" />
</template>

<script>
import AdminHeader from '@/components/AdminHeader.vue'
import OrderModal from './components/OrderModal.vue'
import { clearOrder, deleteOrder, getOrdersList } from '@/api/order'
import { provide, readonly, ref } from 'vue'
import dayjs from 'dayjs'
import Confirm from '@/components/library/Confirm'
import Message from '@/components/library/Message'
export default {
  name: 'AdminOrders',
  components: { AdminHeader, OrderModal },
  setup() {
    const isLoading = ref(true)
    const orderModalCom = ref(null)

    // 取得後台訂單列表
    const orders = ref(null)
    const pagination = ref(null)
    const getOrders = async (page) => {
      isLoading.value = true
      const data = await getOrdersList(page)
      orders.value = data.orders
      pagination.value = data.pagination
      isLoading.value = false
    }
    getOrders()

    // 修改完畢後重新取得訂單列表, 換頁函式
    const updateOrderList = () => getOrders()
    const changePager = (page) => getOrders(page)

    // 查看訂單細節 (使用 provide 傳入讓所有後代元件可以共享)
    const tempOrder = ref({})
    const open = (order) => {
      tempOrder.value = order
      orderModalCom.value.openModal()
    }
    // 修改 tempOrder 資料的相關的函式
    const updatePaid = () => {
      tempOrder.value.is_paid = !tempOrder.value.is_paid
    }
    const updateTempUser = (userInfo) => {
      tempOrder.value.user = userInfo
    }
    const updateMessage = (msg) => {
      tempOrder.value.message = msg
    }
    provide('tempOrder', readonly(tempOrder))
    provide('updatePaid', { updatePaid })
    provide('updateTempUser', { updateTempUser })
    provide('updateMessage', { updateMessage })

    // --- 刪除功能 ---
    const removeOrder = (id) => {
      Confirm({ title: '刪除訂單', text: '確定要刪除該筆訂單嗎' })
        .then(() => {
          deleteOrder(id).then(() => {
            Message({ type: 'success', text: '已永久刪除該筆訂單' })
            getOrders()
          })
        })
        .catch((e) => {})
    }

    const removeAllOrders = () => {
      Confirm({ title: '清空訂單列表', text: '確定要刪除所有訂單嗎' })
        .then(() => {
          clearOrder().then(() => {
            Message({ type: 'success', text: '已永久刪除所有訂單' })
            getOrders()
          })
        })
        .catch((e) => {})
    }

    return {
      orderModalCom,
      isLoading,
      updateOrderList,
      changePager,
      orders,
      dayjs,
      pagination,
      open,
      tempOrder,
      removeOrder,
      removeAllOrders
    }
  }
}
</script>

<style lang="scss" scoped>
// 標題欄
.order-list {
  text-align: center;
  background: #e9ecef;
}

// 文章列表
.list-group-item {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
