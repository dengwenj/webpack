const { merge } = require('webpack-merge')
const { VueLoaderPlugin } = require('vue-loader/dist/index')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require("terser-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const PurgeCSSWebpackPlugin = require('purgecss-webpack-plugin')
const glob = require('glob')

const resolveApp = require('./paths')
const developmentConfig = require('./webpack.development')
const productionConfig = require('./webpack.production')

const commonConfig = (isProduction) => {
  return {
    entry: {
      index: './src/index.js',
      // main: './src/main.js' 
    },
    output: {
      filename: 'js/[name].[chunkhash:6].bundle.js',
      // 分包的文件名
      chunkFilename: 'js/[name].[contenthash:6].chunk.js',
      path: resolveApp('dist'),
      // publicPath: '/'
    },
    resolve: {
      extensions: ['.js', '.json', '.wasm', '.jsx', '.tsx', '.ts', '.vue'],
      alias: {
        '@': resolveApp('src')
      }
    },
    // 优化
    optimization: {
      // minimizer: [
      //   new TerserPlugin({
      //     extractComments: false
      //   })
      // ],
      // natural: 使用自然数
      // named: 使用包所在目录作为 name(开发环境推荐)
      // deterministic: 生成 id，针对相同文件生成的 id 是不变的
      // chunkIds: 'deterministic', 默认生成
      // 分包 分离  防止重复
      splitChunks: {
        // 同步异步的都抽离 async initial
        chunks: 'all',
        // 最小尺寸，如果拆分出来一个，那么拆分出来的这个包的大小最小为 minSize
        // minSize: 20000,
        // 将大于 maxSize 的包，拆分成不小于 minSize 的包
        // maxSize: 20000,
        // minChunks 表示引入的包，至少被导入了几次
        // minChunks: 1,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            filename: 'js/[id]_vendors.js',
            priority: -10
          },
          default: {
            minChunks: 2,
            filename: 'js/common_[id].js',
            priority: -20
          }
        }
      },
      // true/multiple 多个 runtime 包
      // single 一个 runtime 包
      // 对象
      // runtimeChunk: {
      //   name(entrypoint) {
      //     return `dwj-${entrypoint.name}`
      //   }
      // }
      runtimeChunk: 'single'
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
          test: /\.less$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            'less-loader'
          ],
          sideEffects: true
        },
        {
          test: /\.css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader'
          ],
          sideEffects: true
        }
      ]
    },
    plugins: [ 
      new HTMLWebpackPlugin({
        template: './index.html',
        cache: true, // 表示用不用缓存。第二次打包和第一次打包的时候一样，会使用之前的
        minify: isProduction ? {
          removeComments: true, // 要不要移除一些注释 
          removeRedundantAttributes: true, // 是否移除多余的属性
          removeEmptyAttributes: true, // 是否移除空属性
          collapseWhitespace: true, // 要不要有空格
          minifyCSS: true, // 丑化 css style 标签
          minifyJS: { // 丑化 js 
            mangle: {
              toplevel: true 
            }
          }
        } : false
      }),
      new VueLoaderPlugin(),
      // css 实现 tree shaking
      // new PurgeCSSWebpackPlugin({
      //   paths: glob.sync(`${resolveApp('./src')}/**/*`, { nodir: true }),
      //   safelist() {
      //     return {
      //       standard: ['body', 'html']
      //     }
      //   }
      // })
    ]
  }
}

module.exports = function (env) {
  const isProduction = env.production
  // babel.config.js 文件才拿的到
  process.env.NODE_ENV = isProduction ? 'production' : 'development'

  const config = isProduction ? productionConfig : developmentConfig
  return merge(commonConfig(isProduction), config)
}
