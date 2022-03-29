const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const isProduction = true

module.exports = {
  mode: 'production',
  // 防止将某些 improt 的包打包到 bundle 中，而是在运行时再去从外部获取这些扩展依赖， cdn
  externals: {
    lodash: '_',
    dayjs: 'dayjs'
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}
