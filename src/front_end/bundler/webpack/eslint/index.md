---
date: 2023-09-11
category: ESLint
---

# ESLint

> Reference: 
> - [Getting Started with ESLint](https://eslint.org/docs/latest/use/getting-started)
> - [ESLint Webpack Plugin](https://webpack.js.org/plugins/eslint-webpack-plugin/)

## 安装

```npm
npm i --save-dev eslint eslint-webpack-plugin
```

## 生成 .eslintrc.json

- 使用脚手架自动生成 `.eslintrc.json` 和添加需要的包。

```
npm init @eslint/config
```

## 配置

- 配置 `webpack.config.js`。

```javascript
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  // ...
  plugins: [new ESLintPlugin(options)],
  // ...
};
```
