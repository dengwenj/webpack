const { NodeSSH } = require('node-ssh')

class AutoUploadPlugin {
  constructor(options) {
    this.ssh = new NodeSSH()
    this.options = options
  }

  apply(compiler) {
    compiler.hooks.afterEmit.tapAsync('AutoUploadPlugin', async (compilation, callback) => {
      // 1 获取输出的文件夹
      const outputPath = compilation.outputOptions.path

      // 2 连接服务器（ssh 连接）
      await this.connectServer()

      // 3 删除 ssh 原来目录中的内容
      const serverDir = this.options.remotePath
      await this.ssh.execCommand(`rm -rf ${serverDir}/*`)

      // 4 上传文件到服务器
      await this.uploadFile(outputPath, serverDir)

      // 关闭 ssh
      this.ssh.dispose() 

      callback()
    })
  }

  async connectServer() {
    await this.ssh.connect({
      host: this.options.host,
      username: this.options.username,
      password: this.options.password
    })
    console.log('连接服务器成功')
  }

  async uploadFile(localPath, remotePath) {
    const status = await this.ssh.putDirectory(localPath, remotePath, {
      // 递归都上传
      recursive: true,
      concurrency: 10
    })
    console.log(`上传到服务器${status ? '成功' : '失败'}`)
  }
}

module.exports = AutoUploadPlugin
