const path = require('path')

module.exports = {
  mode: 'development',
  context: __dirname,
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'dwj-loader001',
          'dwj-loader002',
          'dwj-loader003',
        ]
      }
    ]
  },
  resolveLoader: {
    modules: ['node_modules', 'dwj-loaders']
  }
}
