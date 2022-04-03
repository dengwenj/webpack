const { series, parallel } = require('gulp')

const foo1 = (cb) => {
  setTimeout(() => {
    console.log('foo1')
    cb()
  }, 2000)
}

const foo2 = (cb) => {
  setTimeout(() => {
    console.log('foo2')
    cb()
  }, 2000)
}

const foo3 = (cb) => {
  setTimeout(() => {
    console.log('foo3')
    cb()
  }, 2000)
}

// 串行
const seriesTask = series(foo1, foo2, foo3)
// 并行
const parallelTask = parallel(foo1, foo2, foo3)
// 再组合
const comTask = series(seriesTask, parallelTask)

module.exports = {
  seriesTask,
  parallelTask,
  comTask
}
