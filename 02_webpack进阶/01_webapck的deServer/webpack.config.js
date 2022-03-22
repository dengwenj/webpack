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
  // 用来配置 dev-webpack-server 的
  devServer: {
    hot: true
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html'
    })
  ]
}
