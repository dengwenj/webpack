const path = require('path')

module.exports = {
  mode: 'development',
  context: __dirname,
  entry: './src/index.js',
  output: {
    filename: 'bunld.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'dwj-loader001'
      }
    ]
  },
  resolveLoader: {
    modules: ['node_modules', 'dwj-loaders']
  }
}
