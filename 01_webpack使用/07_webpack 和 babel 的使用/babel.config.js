// babel 单独配置文件
module.exports = {
  presets: [
    // 预设，webpack 根据预设来加载对应的插件
    ['@babel/preset-env', {
      // false：不用任何的 polyfill 相关的代码
      // useage: 代码中需要哪些polyfill，就引入相关的 api，
      // entry: 手动在入口文件中导入 core-js、regenerator-runtime，根据目标浏览器引入所有对应的 polyfill
      useBuiltIns: 'entry',
      corejs: 3
    }],
    // 使用 react 时预设，就意味着很多的插件就会生效，就会正常加载
    ['@babel/preset-react']
  ]
}
