const { getOptions } = require('loader-utils')
const { validate } = require('schema-utils')

const schema = require('../dwj-schema/dwj-schema001.json')

// 同步的 loader
module.exports = function (content) {
  console.log(content + '001') 

  // 获取参数
  const options = getOptions(this)
  console.log(options)

  // 验证参数
  validate(schema, options)

  // 两种方式返回数据
  // return content
  this.callback(null, content)
}

// 异步的 loader  this.async()
// module.exports = function (content) {
//   console.log(content + '001')

//   const callback = this.async()
  
//   setTimeout(() => {
//     callback(null, content)
//   }, 2000) 
// }

// module.exports.pitch = function () {
//   console.log('pitch001')
// }
