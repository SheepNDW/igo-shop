<template>
  <div class="col-md-6">
    <h3 class="fs-5 d-flex align-items-center mb-3">
      訂購人資訊
      <button
        type="button"
        class="btn btn-sm ms-2"
        :class="isEditInfo ? 'btn-danger' : 'btn-primary'"
        @click="edit"
      >
        <span v-if="!isEditInfo">修改</span>
        <span v-else>完成</span>
      </button>
    </h3>
    <ul class="list-unstyled">
      <li class="d-flex align-items-center mb-2">
        <span class="form-label m-0 col-4">建立時間：</span>
        <span>{{
          dayjs.unix(order.create_at).format('YYYY-MM-DD HH:mm:ss')
        }}</span>
      </li>
      <li class="d-flex align-items-center mb-1">
        <label for="email" class="form-label m-0 col-4">Email：</label>
        <input
          type="email"
          id="email"
          class="form-control form-control-sm"
          v-model="user.email"
          :disabled="!isEditInfo"
        />
      </li>
      <li class="d-flex align-items-center mb-1">
        <label for="name" class="form-label m-0 col-4">收件人姓名：</label>
        <input
          type="text"
          id="name"
          class="form-control form-control-sm"
          v-model="user.name"
          :disabled="!isEditInfo"
        />
      </li>
      <li class="d-flex align-items-center mb-1">
        <label for="tel" class="form-label m-0 col-4">聯絡電話：</label>
        <input
          type="text"
          id="tel"
          class="form-control form-control-sm"
          v-model="user.tel"
          :disabled="!isEditInfo"
        />
      </li>
      <li class="d-flex align-items-center mb-1">
        <label for="address" class="form-label m-0 col-4">收件地址：</label>
        <input
          type="text"
          id="address"
          class="form-control form-control-sm"
          v-model="user.address"
          :disabled="!isEditInfo"
        />
      </li>
      <li class="d-flex align-items-start mb-1">
        <label for="message" class="form-label m-0 col-4">備註</label>
        <textarea
          id="message"
          class="form-control"
          row="3"
          placeholder="無"
          v-model="message"
          :disabled="!isEditInfo"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import { watch, inject, ref } from 'vue'
import dayjs from 'dayjs'
export default {
  name: 'UserInfo',
  props: {
    isEdit: {
      type: Boolean
    }
  },
  setup(props, { emit }) {
    const isEditInfo = ref(false)
    const user = ref(null)
    const message = ref(null)

    // 接收外層元件提供的tempOrder
    const order = inject('tempOrder')
    const { updateTempUser } = inject('updateTempUser')
    const { updateMessage } = inject('updateMessage')

    // 將tempOrder給賦值給此元件的 user 和 message 進行資料修改
    watch(
      () => order,
      () => {
        user.value = { ...order.value.user }
        message.value = order.value.message ?? ''
      },
      { immediate: true, deep: true }
    )

    // 完成更改時統一將此次的改動更新到 tempOrder
    const edit = () => {
      isEditInfo.value = !isEditInfo.value
      emit('change-edit', isEditInfo.value)
      // 如果是完成, 則通知外層元件去修改 tempOrder
      if (!isEditInfo.value) {
        updateTempUser(user.value)
        updateMessage(message.value)
      }
    }

    return {
      isEditInfo,
      user,
      message,
      order,
      dayjs,
      edit
    }
  }
}
</script>
