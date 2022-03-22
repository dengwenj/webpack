module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true
    },
    // 可以扩展当前的配置，让其继承自其他的配置信息，可以跟字符串或者数组（多个）
    // extends: 'eslint:recommended',
    "parserOptions": {
        "ecmaVersion": "latest",
        sourceType: 'module'
    },
    // 自定义的一些规则
    "rules": {
        "no-unused-vars": "off", // error off warn
    }
}
