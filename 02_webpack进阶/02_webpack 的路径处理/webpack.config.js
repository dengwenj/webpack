const path = require("path")
const HTMLWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader/dist/index')

module.exports = {
  mode: 'development',
  // 监听源代码的变化
  watch: true,
  // 入口
  entry: './src/index.js',
  // 出口
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // 在打包之后的静态资源前面进行一个路径的拼接 原来 bundle.js 现在 /bundle.js
    publicPath: '/'
  },
  // 用来设置模块如何被解析的
  resolve: {
    // 尝试按顺序解析这些后缀名
    extensions: ['.js', '.json', '.wasm', '.jsx', '.tsx', '.ts', '.vue'],
    // 别名
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  // 用来配置 dev-webpack-server 的,为开发过程中开启一个本地服务
  devServer: {
    // 启用热模块替换功能，在构建失败时不刷新页面作为回退
    hot: 'only',
    hot: true,
    // publicPath: '/'
    // 现在是 static 不是 contentBase 了
    // 该配置项允许配置从目录提供静态文件的选项（默认是 'public' 文件夹）。将其设置为 false 以禁用
    static: {
      directory: path.resolve(__dirname, './dwj')
    },
    // host: '0.0.0.0',
    port: 3333,
    // open: true,
    compress: true, // 开启 gzip ，性能压缩
    // 跨域，这种解决办法是开发环境下的解决方案
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
    // 主要的作用是解决SPA页面在路由跳转之后，进行页面刷新时，返回404的错误。
    historyApiFallback: true
  },
  // loader
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
  // 插件
  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html'
    }),
    new ReactRefreshWebpackPlugin(),
    new VueLoaderPlugin()
  ]
}
