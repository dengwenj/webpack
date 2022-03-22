/**
 * 存在的问题：
 *    问题一：每次修改源代码之后，都需要重新执行 npm run build
 *      通过 watch 监听源代码的变化
 */

import './ww'

console.log('hello webpack111')

console.log('通过 watch 监听源代码的变化')

if (module.hot) {
  module.hot.accept('./ww.js', () => {
    console.log('ww 发送了更新')
  })
}
