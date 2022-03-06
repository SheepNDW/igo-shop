// 插件 - Plugin
// vue3.0插件的寫法要素: 匯出一個物件, 有install函式, 默認傳入app應用實例, app基礎之上擴展

import GoPagination from './go-pagination.vue'
import GoCarousel from './go-carousel.vue'
import Message from './Message'

export default {
  install(app) {
    // 註冊全域元件
    app.component(GoPagination.name, GoPagination)
    app.component(GoCarousel.name, GoCarousel)

    // 定義原型函式
    app.config.globalProperties.$message = Message
  }
}
