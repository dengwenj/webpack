const path = require('path')

module.exports = function (env) {
  console.log('env', env)
  const isProduction = env.production

  return {
    // 绝对路径，用于从配置中解析入口点（entry point）和加载器（loader），默认就是写的 package.json 里面的那个来说的
    context: path.resolve(__dirname, '../'),
    // entry 写上相对路径，并不是相对于文件所在的路径，而是相对于 context 匹配的路径
    entry: './src/main.js',
    output: {
      path: path.resolve(__dirname, '../dist')
    }
  }
}
