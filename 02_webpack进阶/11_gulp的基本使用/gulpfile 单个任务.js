const gulp = require('gulp')

// 定义一个任务
const foo = (cb) => {
  console.log('foo')
  cb()
}

module.exports = {
  foo
}

// gulp 4 之前，定义任务的方式
gulp.task('bar', (cb) => {
  console.log('bar')
  cb()
})

// 默认的任务
module.exports.default = (cb) => {
  console.log('default')
  cb()
}