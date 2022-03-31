const webpack = require('webpack')

const config = require('./config/webpack.common')

const compiler = webpack(config({
  production: true
}))

// webpack-cli 的本质就是把 package.json 和 config 里面的配置进行合并
compiler.run((err, stats) => {
  if (err) {
    console.log(err)
    return
  }
  // console.log(stats)
})
