const info = {
  name: 'dwj',
  age: 22
}

const foo = (info) => {
  console.log(info)
}

foo(info)
// npx babel src --out-dir build --presets=@babel/preset-env