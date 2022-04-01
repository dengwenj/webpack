const { marked } = require('marked')

module.exports = function (content) {
  // 把 md 转换成 html 标签
  const htmlContent = marked(content)

  const c = '`' + htmlContent + '`'
  const innterContent = `var code = ${c}; export default code ` 
  return innterContent
}
