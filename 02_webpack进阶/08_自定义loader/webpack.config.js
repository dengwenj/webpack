const path = require('path')

module.exports = {
  mode: 'development',
  context: __dirname,
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.md$/i,
        use: 'md-loader'
      },
      {
        test: /\.js$/,
        use: [
          // {
          //   loader: 'dwj-loader001',
          //   options: {
          //     name: 'dwj',
          //     age: '1'
          //   }
          // }
          {
            loader: 'dwjbabel-loader',
            options: {
              presets: [
                '@babel/preset-env'
              ]
            }
          }
        ]
      },
      // {
      //   test: /\.js$/,
      //   use: [
      //     'dwj-loader002'
      //   ],
      //   // 最先执行这个 loader, post 值是最后执行这个 loader
      //   enforce: 'pre',
      // },
      // {
      //   test: /\.js$/,
      //   use: [
      //     'dwj-loader003'
      //   ]
      // }
    ]
  },
  resolveLoader: {
    modules: ['node_modules', 'dwj-loaders']
  }
}
