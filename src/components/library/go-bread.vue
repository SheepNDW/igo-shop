<script>
import { h } from 'vue'
export default {
  name: 'GoBread',
  render() {
    // 返回值即元件內容
    // vue 2.0 的 h 函式為傳參進來的，vue 3.0 的 h 函式為導入進來
    // h 的第一個參數: 標籤名, 第二個參數: 標籤的屬性物件, 第三個參數: 子節點
    // 需求:
    // #1 創建 breadcrumb 父容器
    // #2 獲取默認插巢內容
    // #3 把節點渲染在 breadcrumb 中
    const items = this.$slots.default()
    return h('div', { class: 'breadcrumb py-4 px-2 mb-0' }, items)
  }
}
</script>
