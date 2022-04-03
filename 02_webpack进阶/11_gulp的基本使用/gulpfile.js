const { src, dest, watch } = require('gulp')

const babel = require('gulp-babel')
const terser = require('gulp-terser')

const jsTask = () => {
  // 文件输入输出
  return (
    src('./src/**/*.js')
      .pipe(babel({ presets: ['@babel/preset-env'] }))
      .pipe(terser({ mangle: { toplevel: true } }))
      .pipe(dest('dist'))
  )
}

// 监听只要 文件发生改变就要重新输出
watch('./src/**/*.js', jsTask)

module.exports = {
  jsTask
}
