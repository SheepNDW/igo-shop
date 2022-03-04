<template>
  <div class="login-container">
    <div class="wrapper">
      <div class="input-box">
        <div class="login">
          <h1>歡迎回來</h1>
          <Form
            ref="formRef"
            @submit="login"
            class="login-form"
            autocomplete="off"
            v-slot="{ errors }"
          >
            <Field
              name="email"
              type="email"
              placeholder="Email"
              v-model="form.username"
              rules="email|required"
              :class="{ 'is-invalid': errors['email'] }"
            />
            <ErrorMessage
              name="email"
              class="invalid-feedback text-center"
            ></ErrorMessage>
            <Field
              name="密碼"
              type="password"
              placeholder="Password"
              v-model="form.password"
              rules="required"
              :class="{ 'is-invalid': errors['密碼'] }"
            />
            <ErrorMessage
              name="密碼"
              class="invalid-feedback text-center"
            ></ErrorMessage>
            <button class="buttom-sumbit" type="submit">LOGIN</button>
          </Form>
        </div>
      </div>

      <div class="rightbox">
        <h2 class="title"><span>STORY</span>&<br />DREAM</h2>
        <p class="desc">Pick your perfect <span>book</span></p>
        <img class="bookImg" src="@/assets/images/books2.png" />
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
import { signin } from '@/api/login'
import { useRouter, useRoute } from 'vue-router'
import { Form, Field, ErrorMessage } from 'vee-validate'
import Message from '@/components/library/Message'
export default {
  name: 'Login',
  components: { Form, Field, ErrorMessage },
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
          Message({ type: 'success', text: err.response.data.message + '!' })
        }
      }
    }

    return { formRef, form, login }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;700&display=swap');

$bgColor: #cbc0d3;
$fontColor: #8e9aaf;
$inputboxColor: #eac7cc;
$borderColor: #ce7d88;

.login-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: $bgColor;
  font-family: 'Baloo 2', '微軟正黑體';
}

.wrapper {
  position: relative;
  background-color: #f6f6f6;
  width: 650px;
  height: 415px;
  border-radius: 5px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
}

.input-box {
  position: absolute;
  top: -10%;
  left: 5%;
  width: 320px;
  height: 500px;
  background-color: $inputboxColor;
  border-radius: 5px;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  z-index: 10;

  h1 {
    text-align: center;
    color: #f6f6f6;
    margin-top: 95px;
    font-size: 2em;
    letter-spacing: 8px;
  }

  button {
    font-family: 'Baloo 2';
    margin: 25px;
    padding: 12px;
    letter-spacing: 3px;
    font-size: 1em;
    border-color: $borderColor;
    border-radius: 10px;
    outline: none;
    display: block;
    cursor: pointer;

    &:hover {
      background-color: $bgColor;
      color: #f6f6f6;
      transition: background-color 0.5s ease-out;
    }
  }

  // 表單
  .login-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 35px;
    input {
      width: 65%;
      padding: 12px;
      background-color: $inputboxColor;
      border: none;
      border-bottom: 1px solid rgba(246, 246, 246, 0.5);
      color: $borderColor;
      font-size: 16px;

      &::placeholder {
        color: #f6f6f6;
        letter-spacing: 2px;
        font-size: 16px;
      }

      &:focus {
        color: $borderColor;
        outline: none;
        border-bottom: 1.2px solid rgba(206, 125, 136, 0.7);
        font-size: 20px;
        transition: 0.5s;
      }
    }
    .buttom-sumbit {
      margin-top: 45px;
    }
  }
}

.rightbox {
  position: absolute;
  width: 50%;
  right: -2%;

  .title {
    color: $fontColor;
    font-size: 1.8em;
    line-height: 1.1em;
    letter-spacing: 3px;
    text-align: center;
    font-weight: 300;
    margin-top: 20%;
  }

  .desc {
    margin-top: -8px;
    font-size: 0.8em;
    letter-spacing: 2px;
    color: $fontColor;
    text-align: center;
  }

  span {
    color: $inputboxColor;
  }

  .bookImg {
    position: relative;
    width: 150px;
    height: 150px;
    top: 45%;
    left: 27%;
    opacity: 0.8;
  }
}
</style>
