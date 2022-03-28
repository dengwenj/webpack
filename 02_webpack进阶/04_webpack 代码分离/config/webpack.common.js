const { merge } = require('webpack-merge')
const { VueLoaderPlugin } = require('vue-loader/dist/index')
const HTMLWebpackPlugin = require('html-webpack-plugin')

const resolveApp = require('./paths')
const developmentConfig = require('./webpack.development')
const productionConfig = require('./webpack.production')

const commonConfig = {
  entry: {
    index: './src/index.js',
    main: './src/main.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: resolveApp('dist'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.json', '.wasm', '.jsx', '.tsx', '.ts', '.vue'],
    alias: {
      '@': resolveApp('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/i,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html'
    }),
    new VueLoaderPlugin()
  ]
}

module.exports = function (env) {
  const isProduction = env.production
  // babel.config.js 文件才拿的到
  process.env.NODE_ENV = isProduction ? 'production' : 'development'

  const config = isProduction ? productionConfig : developmentConfig
  return merge(commonConfig, config)
}
