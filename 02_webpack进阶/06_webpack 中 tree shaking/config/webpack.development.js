const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const resolveApp = require('./paths')

const isProduction = false

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    hot: 'only',
    hot: true,
    static: {
      directory: resolveApp('dwj')
    },
    port: 3333,
    compress: true,
    proxy: {
      '/api': {
        target: 'http://139.196.212.216:2217',
        pathRewrite: {
          '^/api': ''
        },
        secure: false, // https
        changeOrigin: true
      }
    },
    historyApiFallback: true
  },
  plugins: [
    new ReactRefreshWebpackPlugin()
  ]
}
