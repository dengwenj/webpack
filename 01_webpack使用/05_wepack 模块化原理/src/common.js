const { common1, common2 } = require('./js/common')

console.log(common1())
console.log(common2())

// webpack 打包过后的 commonjs模块化 源码
// var __webpack_modules__ = ({
//   "./src/js/common.js":
//     (function(module) {

//       function common1() {
//         return 'common1js'
//       }

//       function common2() {
//         return 'common2js'
//       }

//       module.exports = {
//         common1,
//         common2
//       }

//     })
// });

// var __webpack_module_cache__ = {};

// function __webpack_require__(moduleId) {

//   var cachedModule = __webpack_module_cache__[moduleId];
//   if (cachedModule !== undefined) {
//     return cachedModule.exports;
//   }

//   var module = __webpack_module_cache__[moduleId] = {
//     exports: {}
//   };

//   __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

//   return module.exports;
// }
 	
// var __webpack_exports__ = {};

// !function() {
//   const { common1, common2 } = __webpack_require__("./src/js/common.js")

//   console.log(common1())
//   console.log(common2())
// }();
