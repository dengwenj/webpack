import code from './webpack.md'
import './index.css'

const hl = 'hello loader'

const foo = () => {
  console.log('foo')
}

const divEl = document.createElement('div')

divEl.innerHTML = code

document.body.appendChild(divEl)
