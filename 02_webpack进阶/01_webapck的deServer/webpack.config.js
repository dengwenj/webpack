const path = require("path")
const HTMLWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
  mode: 'development',
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
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html'
    }),
    new ReactRefreshWebpackPlugin()
  ]
}
