const { merge } = require('webpack-merge')
const { VueLoaderPlugin } = require('vue-loader/dist/index')
const HTMLWebpackPlugin = require('html-webpack-plugin')

const resolveApp = require('./paths')
const developmentConfig = require('./webpack.development')
const productionConfig = require('./webpack.production')

const commonConfig = {
  // 绝对路径，用于从配置中解析入口点（entry point）和加载器（loader），默认就是写的 package.json 里面的那个来说的
  // context: path.resolve(__dirname, '../'),
  // entry 写上相对路径，并不是相对于文件所在的路径，而是相对于 context 匹配的路径
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
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
