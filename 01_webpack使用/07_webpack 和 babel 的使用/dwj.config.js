const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin } = require('webpack')

module.exports = {
  mode: 'development',
  // 控制是否生成，如何生成 sourceMap
  devtool: 'cheap-module-source-map',
  // 入口文件
  entry: './src/index.js',
  // entry: './src/common.js',
  // 出口文件
  output: {
    filename: 'js/hh.js',
    // 绝对路径
    path: path.resolve(__dirname, './dist'),
    // assetModuleFilename: 'img/[name].[hash:6][ext]' // 这个统一都设置为 img 下面了
  },
  // loader
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            // options: {
            //   presets: [
            //     '@babel/preset-env'
            //   ]
            // }
          }
        ]
      }
    ]
  },
  // plugins 配置
  plugins: [
    // 每次打包把上一次的打包删掉，不留任何的，重新打包
    new CleanWebpackPlugin(),
    // 在 打包的文件夹中增加个 html 文件
    new HtmlWebpackPlugin({
      title: 'hello webpack',
      // template: './public/index.html', // 不要默认的 html 文件 自己写 html 文件
    }),
    // 允许在编译时创建配置的全局常量
    new DefinePlugin({
      BASE_URL: '"./"',
      hh: '111111'
    })
  ]
}
 