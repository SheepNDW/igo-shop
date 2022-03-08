<template>
  <LoginHeader>後臺登入</LoginHeader>
  <section class="login-section">
    <Form
      ref="formRef"
      class="wrapper p-4 text-center"
      @submit="login"
      v-slot="{ errors }"
    >
      <h1 class="h1 text-center bg-primary text-light p-2 mb-5">帳號登入</h1>
      <div class="form-floating mb-3">
        <Field
          name="email"
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          v-model="form.username"
          rules="email|required"
          :class="{ 'is-invalid': errors['email'] }"
        />
        <label for="floatingInput">Email 信箱</label>
        <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
      </div>
      <div class="form-floating mb-5">
        <Field
          name="密碼"
          type="password"
          class="form-control"
          id="floatingPassword"
          placeholder="密碼"
          v-model="form.password"
          rules="required"
          :class="{ 'is-invalid': errors['密碼'] }"
        />
        <label for="floatingPassword">密碼</label>
        <ErrorMessage name="密碼" class="invalid-feedback"></ErrorMessage>
      </div>
      <button type="submit" class="btn btn-primary col-6">登入</button>
    </Form>
  </section>
  <LoginFooter />
</template>

<script>
import { reactive, ref } from 'vue'
import { signin } from '@/api/login'
import { useRouter, useRoute } from 'vue-router'
import { Form, Field, ErrorMessage } from 'vee-validate'
import Message from '@/components/library/Message'
import LoginHeader from './components/LoginHeader.vue'
import LoginFooter from './components/LoginFooter.vue'
export default {
  name: 'Login',
  components: { LoginHeader, LoginFooter, Form, Field, ErrorMessage },
  setup() {
    const formRef = ref(null)
    // 登入表單
    const form = reactive({
      username: '',
      password: ''
    })

    const router = useRouter()
    const route = useRoute()
    const login = async () => {
      const valid = await formRef.value.validate()
      if (valid) {
        try {
          const { token, expired } = await signin(form)
          document.cookie = `hexToken=${token}; expires=${new Date(expired)};`
          Message({ type: 'success', text: '登入成功! ' })
          router.push(route.query.redirectUrl || '/admin')
        } catch (err) {
          form.password = ''
          Message({ type: 'error', text: '此帳號不存在或密碼錯誤! ' })
        }
      }
    }

    return { formRef, form, login }
  }
}
</script>

<style lang="scss" scoped>
.login-section {
  background: url(../../../assets/images/login-banner.png) no-repeat center /
    cover;
  height: 30.5rem;
  position: relative;
  .wrapper {
    width: 23.75rem;
    background: #fff;
    min-height: 25rem;
    position: absolute;
    left: 50%;
    top: 54px;
    transform: translate3d(100px, 0, 0);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  }
}
</style>
