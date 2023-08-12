---
date: 2023-08-08
category: webpack
---

# Mode

介绍几种可以在 `webpack.config.js` 中获取 webpack 的 `mode` 的方式。

## dotenv

> Reference
> - [dotenv 介绍](https://juejin.cn/post/6915214622601674760)
> - [dotenv 文档](https://github.com/motdotla/dotenv)

- 安装 `dotenv`。

```npm
npm i --save-dev dotenv
```

- 创建 `.env.development` 和 `.env.production` 文件，增加 `NODE_ENV` 变量。

::: code-tabs
@tab .env.development
```.env.development
NODE_ENV='development'
```

@tab .env.production
```.env.production
NODE_ENV='production'
```
:::

- 在 `package.json` 中设置 webpack-CLI 的 `mode` 参数。

```json
{
  "scripts": {
    "dev": "webpack --mode=development",
    "prod": "webpack --mode=production"
  }
}
```

- 在 `webpack.config.js` 中获取 webpack-CLI 的 `mode` 参数。

```javascript
// webpack.config.js
const index = process.argv.findIndex((arg) => arg === '--mode=development' || arg === '--mode=production')
if (index === -1) {
  throw new Error('package.json 中的 webpack 参数设置错误')
}
const mode = process.argv[index].split('=')[1]
require('dotenv').config({ path: `.env.${mode}` })
```

- 然后就可以通过 `const devMode = process.env.NODE_ENV` 获取 webpack 的 `mode`。

## function argument

> Reference
> - [StackOverflow: Get '--mode' in webpack.config.js](https://stackoverflow.com/questions/49274713/get-current-mode-in-webpack-config-js)
> - [Docs: mode](https://webpack.js.org/configuration/mode/#mode-none)

- 通过 `argv.mode` 参数可以获得 webpack 的 `mode`。

```javascript
// webpack.config.js
module.exports = (env, argv) => {
  const devMode = argv.mode === 'development'
  
  return {
    // entry
    // output
    // ...
  }
}
```
