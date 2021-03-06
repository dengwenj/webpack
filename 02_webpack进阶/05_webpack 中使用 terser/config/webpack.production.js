const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require("terser-webpack-plugin")
const cssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')

const isProduction = true

module.exports = {
  mode: 'production',
  // devtool: 'source-map',
  // 防止将某些 improt 的包打包到 bundle 中，而是在运行时再去从外部获取这些扩展依赖， cdn
  externals: {
    lodash: '_',
    dayjs: 'dayjs'
  },
  // 打包 优化
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        parallel: true,
        terserOptions: {
          compress: {
            arguments: true,
            dead_code: true
          },
          mangle: true,
          toplevel: true,
          keep_classnames: false,
          keep_fnames: false
        }
      }),
      new cssMinimizerWebpackPlugin()
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:6].css'
    })
  ]
}
