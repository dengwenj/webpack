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
    new AutoUploadPlugin()
  ]
}
