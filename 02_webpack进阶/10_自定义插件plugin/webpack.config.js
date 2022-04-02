const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const AutoUploadPlugin = require('./plugins/AutoUploadPlugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new AutoUploadPlugin({
      host: '传入的',
      username: '传入的',
      password: '传入的',
      remotePath: '传入的'
    })
  ]
}
