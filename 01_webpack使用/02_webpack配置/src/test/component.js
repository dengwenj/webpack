import '../css/index.css'
import '../css/component.less'

function component() {
  const element = document.createElement('div')
  
  element.innerHTML = 'hello webpack'
  element.className = 'content'

  return element
}

export default document.body.appendChild(component())
