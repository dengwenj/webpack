const path = require('path')

// 可以获取启动的目录
const appDir = process.cwd()
console.log(appDir)
const resolveApp = (relativePath) => path.resolve(appDir, relativePath)

module.exports = resolveApp
