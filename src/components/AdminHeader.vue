<template>
  <nav class="p-3 bg-white d-flex justify-content-between align-items-center">
    <ol class="breadcrumb m-0">
      <li class="breadcrumb-item">管理系統</li>
      <li class="breadcrumb-item active">{{ subTitle }}</li>
    </ol>
    <button
      type="button"
      class="btn btn-sm btn-secondary d-flex align-items-center"
      @click="logout"
    >
      <i class="material-icons-outlined me-1">logout</i>登出
    </button>
  </nav>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  name: 'AdminHeader',
  props: {
    subTitle: {
      type: String,
      default: '產品管理'
    }
  },
  setup() {
    const router = useRouter()
    const logout = () => {
      // 清除token 跳回首頁
      document.cookie = 'hexToken=;expires=;'
      router.push('/')
    }

    return { logout }
  }
}
</script>
