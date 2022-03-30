const presets = [
  ['@babel/preset-env'],
  ['@babel/preset-react']
]
const plugins = []

const isDevelopment = process.env.NODE_ENV === 'development'

if (isDevelopment) {
  // 开发环境采用这个
  plugins.push(['react-refresh/babel'])
}

module.exports = { 
  presets,
  plugins
}
