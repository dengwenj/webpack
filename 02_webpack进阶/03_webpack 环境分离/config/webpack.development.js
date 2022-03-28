const path = require('path')

const isProduction = false

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, '../dist')
  }
}
