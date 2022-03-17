// 插件 - Plugin
// vue3.0插件的寫法要素: 匯出一個物件, 有install函式, 默認傳入app應用實例, app基礎之上擴展

import Message from './Message'

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
  }
}

// 在金額千分位加上逗號
const currency = (num) => {
  const n = parseInt(num, 10)
  return `${n.toFixed(0).replace(/./g, (c, i, a) => (i && c !== '.' && ((a.length - i) % 3 === 0) ? `, ${c}`.replace(/\s/g, '') : c))}`
}
