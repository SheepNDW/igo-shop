<template>
  <Form
    ref="formRef"
    class="col-10 mx-auto"
    autocomplete="off"
    :validation-schema="schema"
    v-slot="{ errors }"
    @submit="submitOrder"
  >
    <h2 class="h2 mb-3">請填寫訂購人資訊</h2>
    <div class="mb-3">
      <label for="email" class="form-label">
        Email<span class="text-danger">*</span>
      </label>
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
      <label for="name" class="form-label">
        收件人姓名<span class="text-danger">*</span>
      </label>
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
      <label for="tel" class="form-label">
        收件人電話<span class="text-danger">*</span>
      </label>
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
      <label for="address" class="form-label">
        收件人地址<span class="text-danger">*</span>
      </label>
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
      <label for="address" class="form-label">
        請選擇付款方式<span class="text-danger">*</span>
      </label>
      <Field
        as="select"
        name="付款方式"
        class="form-select"
        :class="{ 'is-invalid': errors['付款方式'] }"
        v-model="form.paymentMethod"
      >
        <option :value="method" v-for="method in methods" :key="method">
          {{ method }}
        </option>
      </Field>
      <ErrorMessage name="付款方式" class="invalid-feedback"></ErrorMessage>
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
import { createOrder } from '@/api/order'
import schema from '@/utils/vee-validate-schema'
import { Form, Field, ErrorMessage } from 'vee-validate'
import Message from '@/components/library/Message'
import { useRouter } from 'vue-router'
export default {
  name: 'CheckoutForm',
  components: { Form, Field, ErrorMessage },
  setup() {
    const methods = ['信用卡', 'ATM轉帳', '取貨付款']
    // 表單資料物件
    const form = reactive({
      user: {
        name: '',
        email: '',
        tel: '',
        address: ''
      },
      message: '',
      paymentMethod: ''
    })

    const mySchema = {
      姓名: 'required',
      email: 'required|email',
      mobile: schema.mobile,
      地址: 'required',
      付款方式: 'required'
    }

    // 送出並生成訂單方法
    const router = useRouter()
    const formRef = ref(null)
    const submitOrder = async () => {
      // 提交訂單前先進行全體驗證
      const valid = await formRef.value.validate()
      if (valid) {
        try {
          const data = await createOrder(form)
          Message({ type: 'success', text: data.message })

          // 重置表單
          formRef.value.resetForm()
          form.message = ''

          // 跳轉至付款頁
          router.push(`/checkout/${data.orderId}`)
        } catch (err) {
          Message({ text: '購物車裡面沒有東西唷~' })
        }
      }
    }

    return { form, methods, schema: mySchema, formRef, submitOrder }
  }
}
</script>
