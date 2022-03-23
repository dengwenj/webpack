/**
 * 存在的问题：
 *    问题一：每次修改源代码之后，都需要重新执行 npm run build
 *      通过 watch 监听源代码的变化
 */

import './ww'

import React from 'react'
import ReactDOM from 'react-dom'
import ReactApp from './App.jsx'

import { createApp } from 'vue'
import VueApp from './App.vue'

console.log('hello webpack1111111nnnnnnn11111nide ')

console.log('通过 watch 监听源代码的变化')

// 开启 HMR
// if (module.hot) {
//   module.hot.accept('./ww.js', () => {
//     console.log('ww 发送了更新')
//   })
// }

// React 中开启 HMR
ReactDOM.render(<ReactApp />, document.getElementById('app'))

// Vue 中开启 HMR
const app = createApp(VueApp)
app.mount('#root')
