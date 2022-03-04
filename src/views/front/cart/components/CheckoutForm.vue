<template>
  <Form
    ref="formRef"
    class="col-md-6"
    autocomplete="off"
    :validation-schema="schema"
    v-slot="{ errors }"
    @submit="submitOrder"
  >
    <div class="mb-3">
      <label for="email" class="form-label">Email</label>
      <Field
        id="email"
        name="email"
        type="email"
        class="form-control"
        :class="{ 'is-invalid': errors['email'] }"
        placeholder="請輸入 Email"
        v-model="form.user.email"
      />
      <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
    </div>

    <div class="mb-3">
      <label for="name" class="form-label">收件人姓名</label>
      <Field
        id="name"
        name="姓名"
        type="text"
        class="form-control"
        :class="{ 'is-invalid': errors['姓名'] }"
        placeholder="請輸入姓名"
        v-model="form.user.name"
      />
      <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
    </div>

    <div class="mb-3">
      <label for="tel" class="form-label">收件人電話</label>
      <Field
        id="tel"
        name="mobile"
        type="tel"
        class="form-control"
        :class="{ 'is-invalid': errors['mobile'] }"
        placeholder="請輸入手機號碼"
        v-model="form.user.tel"
      />
      <ErrorMessage name="mobile" v-slot="{ message }">
        <span role="alert" class="invalid-feedback">{{ message }}</span>
      </ErrorMessage>
    </div>

    <div class="mb-3">
      <label for="address" class="form-label">收件人地址</label>
      <Field
        id="address"
        name="地址"
        type="text"
        class="form-control"
        :class="{ 'is-invalid': errors['地址'] }"
        placeholder="請輸入地址"
        v-model="form.user.address"
      />
      <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
    </div>

    <div class="mb-3">
      <label for="message" class="form-label">留言</label>
      <textarea
        id="message"
        class="form-control"
        cols="30"
        rows="10"
        v-model="form.message"
      ></textarea>
    </div>
    <div class="text-end">
      <button type="submit" class="btn btn-danger">送出訂單</button>
    </div>
  </Form>
</template>

<script>
import { reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { createOrder } from '@/api/order'
import schema from '@/utils/vee-validate-schema'
import { Form, Field, ErrorMessage } from 'vee-validate'
export default {
  name: 'CheckoutForm',
  components: { Form, Field, ErrorMessage },
  setup() {
    // 表單資料物件
    const form = reactive({
      user: {
        name: '',
        email: '',
        tel: '',
        address: ''
      },
      message: ''
    })

    const mySchema = {
      姓名: 'required',
      email: 'required|email',
      mobile: schema.mobile,
      地址: 'required'
    }

    // 送出並生成訂單方法
    const formRef = ref(null)
    const store = useStore()
    const submitOrder = async () => {
      // 提交訂單前先進行全體驗證
      const valid = await formRef.value.validate()
      if (valid) {
        try {
          const data = await createOrder(form)
          alert(data.message)
          formRef.value.resetForm()
          form.message = ''
          // 刷新購物車
          store.dispatch('cart/findCart')
        } catch (err) {
          alert('購物車裡面沒有東西唷~')
        }
      }
    }

    return { form, schema: mySchema, formRef, submitOrder }
  }
}
</script>
