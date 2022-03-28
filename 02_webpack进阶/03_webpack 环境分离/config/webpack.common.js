const path = require('path')

module.exports = function (env) {
  console.log('env', env)
  const isProduction = env.production
  console.log(isProduction)

  return {
    entry: './src/main.js',
    output: {
      path: path.resolve(__dirname, '../dist')
    }
  }
}
