---
date: 2023-08-21
category: Babel
---

# Babel

## 作用

- 将 JavaScript 转化为低版本的 JavaScript。
- 添加 Polyfill。

## cli

- `@babel/cli`：允许开发者在终端使用 Babel。

## preset env

> Reference: [@babel/preset-env](https://babeljs.io/docs/babel-preset-env)

- Babel 插件（例如 `@babel/plugin-transform-arrow-functions`）用来告诉 Babel 如何转化 JavaScript 代码。

- `@babel/preset-env` 是一系列插件的集合，作用是让开发者不需要手动地引入需要的插件。

- Babel 可以使用 `browserslist` 返回的浏览器列表，只引入 `@babel/preset-env` 中需要的插件。

- `@babel/preset-env` 不支持 Stage 3 以下的特性，因为这些特性浏览器还未实现。

## transform runtime

> Reference: [@babel/plugin-transform-runtime](https://babeljs.io/docs/babel-plugin-transform-runtime#why)

- 作用：使用 `@babel/plugin-transform-runtime` 可以从 `runtime-corejs3` 包中引入工具函数。否则 Babel 会为每个 JavaScript 文件中定义工具函数，这样会增加打包体积。

::: code-tabs
@tab Before
```javascript
function _typeof(obj) {}
function _defineProperties(target, props) {}
function _createClass(Constructor, protoProps, staticProps) {}
function _classCallCheck(instance, Constructor) {}
// ...
```

@tab After
```javascript
var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");
var _includes = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/includes"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));
// ...
```
:::
