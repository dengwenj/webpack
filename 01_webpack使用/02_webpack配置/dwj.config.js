const path = require('path')

module.exports = {
  // 入口文件
  entry: './src/index.js',
  // 出口文件
  output: {
    filename: 'hh.js',
    // 绝对路劲
    path: path.resolve(__dirname, './dist')
  },
  // loader 配置
  module: {
    rules: [
      {
        // 正则表达式
        test: /\.css$/, // 匹配的资源
        // loader: 'css-loader', // 简写 use: UseEntry[] 的简写
        use: [
          // {
          //   loader: 'css-loader',
          //   // options: {}
          // },
          'css-loader' // 简写
        ]
      }
    ]
  }
}
