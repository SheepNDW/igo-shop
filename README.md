# 碁人館 GO-Shop 專案簡介

## 專案簡介:
&emsp;&emsp;[碁人館](https://sheepndw.github.io/igo-shop/#/)是一個基於 Vue 全家桶 (Vue3, Vue Cli, Vue Router, Vuex) 與 Bootstrap5 所開發的一個帶前台和後台的電商網站。

### 前台架構:
首頁、品牌介紹頁面、產品頁面、單一產品頁面、購物車功能、Blog 頁面、單一文章頁面、404頁面

### 後台架構:

產品管理頁面、訂單管理頁面、優惠券管理頁面、貼文管理頁面
* CRUD
* 上傳圖片功能


## 使用的技術
### 專案中基於 Vue 的相關技術
* Vue 3.0 (使用 Composition API)
* Vue Cli 開發環境
* Vue Router 單頁路由
* Vuex 狀態管理
* VueUse 工具庫
* Vue Loading Overlay 讀取套件
* VeeValidate 表單驗證套件

### 專案中使用的 CSS 技術
* SCSS 預處理器
* Bootstrap 5 

### 專案中使用到的其他第三方套件
* axios 請求工具 (透過建立實體封裝請求函式)
* dayjs 日期處理工具
* Swiper 輪播圖套件
* AOS 視覺滾差套件
* CKEditor 5 文字編輯器套件

### 其他更多關於此專案的說明可以查看此份筆記
   * [PART 1 從專案架構到封裝請求工具](https://hackmd.io/@sheep0914/igo-shop-notes)
   * [PART 2 從 API 的集中管理到 Vuex 狀態管理](https://hackmd.io/@sheep0914/igo-shop-notes2)
   * [PART 3 將 Bootstrap 樣式封裝成公用元件、將 Bootstrap js 封裝成 Hook 函式](https://hackmd.io/@sheep0914/igo-shop-notes3)
   * [PART 4 自定義 Hook 封裝 Composition API 邏輯、產品列表的分類篩選功能、透過 Provide / Inject (依賴注入)傳遞資料](https://hackmd.io/@sheep0914/igo-shop-notes4)
   * [PART 5 透過 render 函式封裝提示訊息和確認框元件、體驗在 Vue 中撰寫 JSX 語法](https://hackmd.io/@sheep0914/igo-shop-notes5)
   * [PART 6 借助 VueUse 來封裝圖片放大鏡以及數量選擇元件、心得](https://hackmd.io/@sheep0914/igo-shop-notes6)