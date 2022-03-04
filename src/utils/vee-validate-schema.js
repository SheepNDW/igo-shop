// 給 vee-validate 提供驗證規則函式
export default {
  mobile(value) {
    if (!value) return '請輸入手機號碼'
    // 規則: 09開頭, 任意8個數字結尾
    if (!/^09\d{8}$/.test(value)) return '手機格式不正確'
    return true
  }
}
