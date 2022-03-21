import 'core-js/stable'
import 'regenerator-runtime/runtime'

// preset-env 对应的就是 es2015
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