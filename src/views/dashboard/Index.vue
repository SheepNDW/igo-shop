<template>
  <div class="admin container-fluid row g-0 min-vh-100 bg-dark">
    <div class="col-lg-2 text-light">
      <AdminNavbar />
    </div>
    <div class="col-lg-10 bg-light min-vh-100 shadow-md">
      <RouterView v-if="checkSuccess"></RouterView>
    </div>
  </div>
</template>

<script>
import AdminNavbar from '@/components/AdminNavbar.vue'
import { onMounted, ref } from 'vue'
import { userCheck } from '@/api/login'
import { useRouter } from 'vue-router'
export default {
  name: 'Dashboard',
  components: { AdminNavbar },
  setup() {
    const router = useRouter()
    const checkSuccess = ref(false)
    const checkLogin = async () => {
      try {
        await userCheck()
        checkSuccess.value = true
      } catch (err) {
        alert(err.response.data.message)
        router.push('/login')
      }
    }

    onMounted(() => checkLogin())

    return { checkSuccess }
  }
}
</script>
