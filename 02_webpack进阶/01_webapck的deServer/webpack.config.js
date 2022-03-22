const path = require("path")
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // 监听源代码的变化
  watch: true,
  // 入口
  entry: './src/index.js',
  // 出口
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html'
    })
  ]
}
