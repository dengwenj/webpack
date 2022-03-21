import 'core-js/stable'
import 'regenerator-runtime/runtime'

const info = {
  name: 'dwj',
  age: 22
}

const foo = (info) => {
  console.log(info)
}

const p = new Promise((resolve, reject) => {})

foo(info)
// npx babel src --out-dir build --presets=@babel/preset-env