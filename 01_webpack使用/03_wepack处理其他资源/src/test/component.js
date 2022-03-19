import '../css/index.css'
import '../css/component.less'

import n from '../img/Node.js架构图.png'

function component() {
  const element = document.createElement('div')
  
  element.innerHTML = 'hello webpack'
  element.className = 'content'

  const imgEl = new Image()
  // imgEl.src = require('../img/Node.js架构图.png').default
  imgEl.src = n

  element.appendChild(imgEl)

  return element
}

export default document.body.appendChild(component())
