import { createVNode, render } from 'vue'
import GoConfirm from './go-confirm.vue'

// 準備一個DOM
const div = document.createElement('div')
div.setAttribute('class', 'go-confirm-container')
document.body.appendChild(div)

// 返回一個Promise物件, 點取消或確認都要銷毀元件
export default ({ title, text }) => {
  return new Promise((resolve, reject) => {
    const cancelCallback = () => {
      render(null, div)
      reject(new Error('點擊取消'))
    }
    const submitCallback = () => {
      render(null, div)
      resolve()
    }

    const vnode = createVNode(GoConfirm, { title, text, cancelCallback, submitCallback })
    render(vnode, div)
  })
}
