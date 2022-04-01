// 同步的 loader
// module.exports = function (content) {
//   console.log(content + '001')

//   // 两种方式返回数据
//   // return content
//   this.callback(null, content)
// }

// 异步的 loader  this.async()
module.exports = function (content) {
  console.log(content + '001')
  
  const callback = this.async()
  setTimeout(() => {
    callback(null, content)
  }, 2000) 
}

module.exports.pitch = function () {
  console.log('pitch001')
}
