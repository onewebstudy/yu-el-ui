/*
 * @Author: yubb
 * @Date: 2023-04-26 15:46:43
 * @LastEditTime: 2023-04-26 16:00:38
 * @LastEditors: yubb
 * @Description:
 * @FilePath: \yubb-el-ui\.eslintrc.cjs
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    './.eslintrc-auto-import.json',
  ],
  overrides: [],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/ban-types': [
      'error',
      {
        extendDefaults: true,
        types: {
          '{}': false,
        },
      },
    ],
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['index'], //需要忽略的组件名
      },
    ],
  },
}
