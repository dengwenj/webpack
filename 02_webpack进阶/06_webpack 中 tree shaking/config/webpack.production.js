const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require("terser-webpack-plugin")
const cssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
const CompressionWebpackplugin = require('compression-webpack-plugin')
const InlineChunkHtmlPlugin = require('react-dev-utils/InlineChunkHtmlPlugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')

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
    // 目的是标注出来哪些函数没有被使用，
    usedExports: true,
    minimize: true,
    minimizer: [
      // 由 Terser 将未使用的函数，删除掉
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
    }),
    new CompressionWebpackplugin({
      test: /\.(css|js)$/i
    }),
  new InlineChunkHtmlPlugin(HTMLWebpackPlugin, [/runtime.*\.js/])
  ]
}
