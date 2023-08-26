---
date: 2023-08-26
category: webpack
---

# Babel

## Babel Loader

> Reference:
> - [babel-loader](https://webpack.js.org/loaders/babel-loader/)
> - [exclude node_modules](https://juejin.cn/post/7147547649221066783)

- 安装 `babel-loader`：

```npm
npm i --save-dev babel-loader @babel/core
```

- 配置 `webpack.config.js`，使用 `babel-loader`：

```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
}
```

::: tip
必须增加 `exclude: /node_modules/` 配置，否则会出现很多 `export 'default' (imported as '_xxx') was not found in '@babel/runtime-corejs3/xxx' (possible exports: __esModule)` 的警告。
:::

## Preset Env

- 安装 `@babel/preset-env` 处理兼容性：

```npm
npm i --save-dev @babel/preset-env
```

- 配置 `babel.config.json`：

```json
{
  "presets": ["@babel/preset-env"]
}
```

::: tip
通过 [browserslist](/blog/front_end/engineering/browserslist/) 获取要支持的浏览器商和版本。
:::

## Transform Runtime

- 安装 `@babel/plugin-transform-runtime`，减少 `Babel` 注入的函数：

```npm
npm i --save-dev @babel/plugin-transform-runtime
```

- 安装 `@babel/runtime-corejs3`，使用 `core-js 3`：

```npm
npm i --save @babel/runtime-corejs3
```

- 配置 `babel.config.json`，使用 `transform-runtime` 和 `core-js 3`：

```json
{
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        "corejs": 3
      }
    ]
  ]
}
```
