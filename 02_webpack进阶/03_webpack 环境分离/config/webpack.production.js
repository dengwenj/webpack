const path = require('path')

const isProduction = true

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, '../dist')
  }
}
