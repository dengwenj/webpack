import _ from 'lodash'
import dayjs from 'dayjs'

console.log('main webpack')
console.log(_.join(['d', 'w', 'main']))
console.log(dayjs())

const buttonEl = document.createElement('button')
buttonEl.innerHTML = '懒加载'
buttonEl.addEventListener('click', () => {
  import(/* webpackChunkName: 'element' */'./element').then(({ default: elementDiv }) => {
    document.body.appendChild(elementDiv)
  })
})
document.body.appendChild(buttonEl)
