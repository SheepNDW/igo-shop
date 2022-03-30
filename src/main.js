import { createApp } from 'vue'
import App from './App.vue'

// --------------------------------
//          第三方套件
// --------------------------------
import 'bootstrap'

import '@/libs'

import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
// --------------------------------

// 匯入自己封裝的 UI 元件庫
import UI from '@/components/library'

import router from './router'
import store from './store'

createApp(App)
  .use(store)
  .use(router)
  .use(UI)
  .component('Loading', Loading)
  .mount('#app')
