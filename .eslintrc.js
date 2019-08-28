// https://eslint.org/docs/rules/no-unused-vars 插件的网站

module.exports = {
   root: true,
   env: {
      node: true
   },
   'extends': [
      'plugin:vue/essential',
      'eslint:recommended'
   ],
   rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-alert': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-empty' : 'off',
      'no-irregular-whitespace': 0
      // "no-unused-vars": ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }]
   },
   parserOptions: {
      parser: 'babel-eslint'
   }
}
