// 提供一個能夠顯示go-message元件的函式
// 使用方式:
// Composition API: import Message from 'Message.js' Message({type:'error', text:'提示文字'})
// Options API: this.$message({type:'error', text:'提示文字'}) (需先掛載在原型上)

import { createVNode, render } from 'vue'
import GoMessage from './go-message.vue'

// #3
const div = document.createElement('div')
div.setAttribute('class', 'go-message-container')
document.body.appendChild(div)

// 計時器
let timer = null

export default ({ type, text }) => {
  // 渲染元件
  // #1 匯入提示訊息元件
  // #2 將提示訊息元件編譯為虛擬節點(dom)
  // createVNode(元件, 屬性物件(props))
  const vnode = createVNode(GoMessage, { type, text })

  // #3 準備一個裝載提示訊息元件的DOM容器
  // #4 將虛擬節點渲染在容器中
  // render(虛擬節點, DOM容器)
  render(vnode, div)

  // #5 2秒後銷毀元件
  clearTimeout(timer)
  timer = setTimeout(() => {
    render(null, div)
  }, 2000)
}
