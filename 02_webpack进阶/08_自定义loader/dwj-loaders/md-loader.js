const { marked } = require('marked')

module.exports = function (content) {
  const htmlContent = marked(content)

  const c = '`' + htmlContent + '`'
  const innterContent = `var code = ${c}; export default code ` 
  return innterContent
}
