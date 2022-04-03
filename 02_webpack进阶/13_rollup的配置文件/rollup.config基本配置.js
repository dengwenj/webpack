export default {
  input: './src/index.js',
  output: [
    {
      format: 'umd',
      name: 'dwj',
      file: 'dist/dwj.umd.js'
    },
    {
      format: 'cjs',
      file: 'dist/dwj.cjs.js'
    },
    {
      format: 'es',
      file: 'dist/dwj.cjs.js'
    },
    {
      format: 'amd',
      file: 'dist/dwj.amd.js'
    },
    {
      format: 'iife',
      name: 'd',
      file: 'dist/dwj.browser.js'
    }
  ]
}