class AutoUploadPlugin {
  apply(compiler) {
    compiler.hooks.afterEmit.tapAsync('AutoUploadPlugin', (compilation, callback) => {
      console.log('上传到远程服务器')
      callback()
    })
  }
}

module.exports = AutoUploadPlugin
