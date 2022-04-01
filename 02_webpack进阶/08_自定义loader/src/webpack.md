## 学习 webpack
* mode 配置
* devtool 配置
* entry 配置
* output 配置
* module 配置
* resolve 配置
* plugins 配置

## 代码
```js
const path = require('path')

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}
```
