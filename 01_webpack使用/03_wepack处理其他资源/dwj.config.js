const path = require('path')

module.exports = {
  // 入口文件
  entry: './src/index.js',
  // 出口文件
  output: {
    filename: 'hh.js',
    // 绝对路劲
    path: path.resolve(__dirname, './dist'),
    // assetModuleFilename: 'img/[name].[hash:6][ext]' // 这个统一都设置为 img 下面了
  },
  // loader 配置
  module: {
    rules: [
      {
        // 正则表达式
        test: /\.css$/, // 匹配的资源  .css结尾的模块
        // loader: 'css-loader', // 简写 use: UseEntry[] 的简写
        use: [
          // {
          //   loader: 'css-loader',
          //   // options: {}
          // },
          'style-loader',
          // 'css-loader', // 简写
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
          // {
          //   loader: 'postcss-loader',
          //   options: {
          //     postcssOptions: {
          //       plugins: [
          //         require('postcss-preset-env')
          //       ]
          //     }
          //   }
          // }
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        // loader: 'file-loader'
        // use: [
        //   {
        //     // loader: 'file-loader',
        //     loader: 'url-loader',
        //     options: {
        //       name: 'img/[name].[hash:6].[ext]',
        //       limit: 100 * 1024 // 小于 100kb 的转成 base64 大于的放到单独的文件中
        //     }
        //   }
        // ]
        
        // 用 asset module type
        // type: 'asset/resource', // 相当于 file-loader
        // type: 'asset/inline', // 相当于 url-loader 只有一个文件
        type: 'asset',
        generator: {
          filename: 'img/[name].[hash:6][ext]'
        },
        parser: {
          dataUrlCondition: {
            maxSize: 500 * 1024
          }
        }
      }
    ]
  }
}
