---
date: 2023-08-21
category: Babel
---

# Babel

## 作用

- 将 JavaScript 转化为低版本的 JavaScript。
- 添加 Polyfill。

## @babel/cli

- `@babel/cli`：允许开发者在终端使用 Babel。

## @babel/preset-env

> Reference: [@babel/preset-env](https://babeljs.io/docs/babel-preset-env)

- Babel 插件（例如 `@babel/plugin-transform-arrow-functions`）用来告诉 Babel 如何转化 JavaScript 代码。

- `@babel/preset-env` 是一系列插件的集合，作用是让开发者不需要手动地引入需要的插件。

- Babel 可以使用 `browserslist` 返回的浏览器列表，只引入 `@babel/preset-env` 中需要的插件。

- `@babel/preset-env` 不支持 Stage 3 以下的特性，因为这些特性浏览器还未实现。

### useBuiltIns

- `useBuiltIns: entry`：根据要支持的浏览器种类和版本导入全部 polyfill。需要在入口文件引入 `core-js`。
- `useBuiltIns: usage`：根据要支持的浏览器种类和版本导入需要的 polyfill。
- `useBuiltIns: false`：不添加 polyfill。

## @babel/plugin-transform-runtime

> Reference: [@babel/plugin-transform-runtime](https://babeljs.io/docs/babel-plugin-transform-runtime#why)

- 作用：可以从 `runtime-corejs3` 包中引入工具函数，以此实现语法和 API。如果不使用 `@babel/plugin-transform-runtime`，那么 Babel 会在每个 JavaScript 文件中定义工具函数，这样会增加打包体积：

```javascript
"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

// 转换语法
var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));
// 实现 API
var _includes = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/includes"));

var promise = new _promise["default"]();
var arr = [1, 2, 3];
(0, _includes["default"])(arr).call(arr, 2);
```
