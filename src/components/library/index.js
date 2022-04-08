// 插件 - Plugin
// vue3.0插件的寫法要素: 匯出一個物件, 有install函式, 默認傳入app應用實例, app基礎之上擴展

import Message from './Message'
import defaultImg from '@/assets/images/default.jpg'

// # 自動載入所有 library 下的元件
// 使用 require 提供的函式 context 載入某一个目錄下的所有 .vue 後綴的檔案
// context(目錄路徑, 是否加載子目錄, 載入檔案的正規表達式配對)
const importFn = require.context('./', false, /\.vue$/)

export default {
  install(app) {
    // 根據 keys() 拿到所有匯入的檔案實現批量註冊
    importFn.keys().forEach(path => {
      // 匯入元件
      const component = importFn(path).default
      // 註冊為全域元件
      app.component(component.name, component)
    })

    // 定義原型函式
    app.config.globalProperties.$message = Message
    app.config.globalProperties.$currency = currency

    // 定義指令
    defineDirective(app)
  }
}

// 在金額千分位加上逗號
const currency = (num) => {
  const n = parseInt(num, 10)
  return `${n.toFixed(0).replace(/./g, (c, i, a) => (i && c !== '.' && ((a.length - i) % 3 === 0) ? `, ${c}`.replace(/\s/g, '') : c))}`
}

// 自定義指令
const defineDirective = (app) => {
  // #1 圖片懶載入指令 v-lazy
  // 原理: 先儲存圖片網址不能在 src 上, 當圖片進入可視區, 將儲存的圖片網址設置給圖片元素即可
  app.directive('lazy', {
    mounted(el, binding) {
      // #2 創建一個觀察對象, 來觀察當前使用指令的元素
      const observer = new IntersectionObserver(([{ isIntersecting }]) => {
        if (isIntersecting) {
          // 停止觀察
          observer.unobserve(el)
          // #3 把指令的值設置給 el 的 src 屬性, binding.value 就是指令的值
          // #4 處理載入圖片失敗 (error 圖片載入失敗 load 圖片載入成功)
          el.onerror = () => {
            // 載入失敗設置默認圖
            el.src = defaultImg
          }
          el.src = binding.value
        }
      }, {
        threshold: 0
      })
      // 開啟觀察
      observer.observe(el)
    }
  })
}
