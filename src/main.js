import { createApp } from 'vue'
import App from './App.vue'

// --------------------------------
//          第三方套件
// --------------------------------
// 匯入 Bootstrap
import 'bootstrap'

// 匯入 vee-validate 主套件
import { defineRule, configure } from 'vee-validate'
// 匯入 vee-validate 相關規則
import { required, email } from '@vee-validate/rules'
// 匯入多國語系的功能 & 繁體中文語系檔案
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

// 匯入 VueLoading 套件
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

// 匯入 AOS 套件
import AOS from 'aos'
import 'aos/dist/aos.css'
// --------------------------------

// 匯入自己封裝的 UI 元件庫
import UI from '@/components/library'

import router from './router'
import store from './store'

// 定義驗證規則
defineRule('required', required)
defineRule('email', email)
// 設定 vee-validate 全域規則
configure({
  generateMessage: localize({ zh_TW: zhTW }) // 載入繁體中文語系
})
setLocale('zh_TW')

// 初始化 AOS
AOS.init({
  once: true
})

createApp(App)
  .use(store)
  .use(router)
  .use(UI)
  .component('Loading', Loading)
  .mount('#app')
