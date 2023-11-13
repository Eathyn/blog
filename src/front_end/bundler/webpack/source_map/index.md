---
date: 2023-11-13
category: Webpack
---

# Source Map

> Reference:
> - [Docs: devtool](https://webpack.js.org/configuration/devtool/)
> - [CodeWhy: devtool](https://youtu.be/NH3s1ms6M7c?feature=shared)

## 最佳实践

- 开发环境：`eval-cheap-module-source-map`。
- 生产环境：`hidden-source-map`。

## 关键字

### false

- 定位到打包结果。

::: code-tabs
@tab 原始代码
```ts
const a: number = 1
console.log(a)
```

@tab 打包结果
```js
/******/ (() => { // webpackBootstrap
  var __webpack_exports__ = {};
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/
  var a = 1;
  console.log(b);

  /******/ })()
;
```
:::

![devtool: false](./_images/false.png =x180)

### eval

- 每个模块被 `eval` 函数包裹，并携带 `sourceURL`。
- 报错定位到转译后的代码（transpiled code），而不是原始代码（original code）。

::: code-tabs
@tab 原始代码
```ts
const a: number = 1
console.log(b)
```

@tab 打包结果
```js
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
  /******/ 	var __webpack_modules__ = ({

    /***/ "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/
    /***/ (() => {

      eval("var a = 1;\nconsole.log(b);\n\n\n//# sourceURL=webpack://webpack-source-map/./src/main.ts?");

      /***/ })

    /******/ 	});
  /************************************************************************/
  /******/
  /******/ 	// startup
  /******/ 	// Load entry module and return exports
  /******/ 	// This entry module can't be inlined because the eval devtool is used.
  /******/ 	var __webpack_exports__ = {};
  /******/ 	__webpack_modules__["./src/main.ts"]();
  /******/
  /******/ })()
;
```
:::

![devtool: 'eval'](./_images/eval.png =x180)

### source-map

- 定位到原始代码。
- 生成一个独立的 map 文件。打包结果中包含指向这个 map 文件的路径。

::: code-tabs
@tab 原始代码
```ts
const a: number = 1
console.log(b)
```

@tab 打包结果
```js
/******/ (() => { // webpackBootstrap
  var __webpack_exports__ = {};
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/
  var a = 1;
  console.log(b);

  /******/ })()
;
//# sourceMappingURL=main.js.map
```
:::

![devtool: 'source-map'](./_images/source-map.png =x180)

### eval-source-map

- 每个模块被 `eval` 函数包裹。
- 没有生成独立的 map 文件，map 文件以 `base64` 的格式存在于 `eval` 函数中。
- 定位到原始代码。
- 定位到行和列。

::: code-tabs
@tab 原始代码
```ts
const a: number = 1
console.log(b)
```

@tab 打包结果
```js
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
  /******/ 	var __webpack_modules__ = ({

    /***/ "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/
    /***/ (() => {

      eval("var a = 1;\nconsole.log(b);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi50cyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXNvdXJjZS1tYXAvLi9zcmMvbWFpbi50cz9jZDQ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQU0sQ0FBQyxHQUFXLENBQUMsQ0FBQTtBQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYTogbnVtYmVyID0gMVxyXG5jb25zb2xlLmxvZyhiKSJdfQ==\n//# sourceURL=webpack-internal:///./src/main.ts\n");

      /***/ })

    /******/ 	});
  /************************************************************************/
  /******/
  /******/ 	// startup
  /******/ 	// Load entry module and return exports
  /******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
  /******/ 	var __webpack_exports__ = {};
  /******/ 	__webpack_modules__["./src/main.ts"]();
  /******/
  /******/ })()
;
```
:::

![devtool: 'eval-source-map'](./_images/eval-source-map.png =x200)

::: warning
- 对于 js 文件需要配置 `babel-loader`，否则无法定位到列。
- 对于 ts 文件需要将 `tsconfig.json` 文件中的 `compilerOptions` -> `sourceMap` 设置为 `true`，否则定位到转译后的代码。
:::

### eval-cheap-source-map

- 每个模块被 `eval` 函数包裹。
- 没有生成独立的 map 文件，map 文件以 `base64` 的格式存在于 `eval` 函数中。
- 忽略来自 loader 的 source map，定位到转译后的代码。
- 定位到行。

::: code-tabs
@tab 原始代码
```js
const a = 1
console.log(b)
```

@tab 打包结果
```js
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ (() => {

eval("var a = 1;\nconsole.log(b);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1zb3VyY2UtbWFwLy4vc3JjL21haW4uanM/ODEzOCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgYSA9IDE7XG5jb25zb2xlLmxvZyhiKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/main.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/main.js"]();
/******/ 	
/******/ })()
;
```
:::

![devtool: 'eval-cheap-source-map'](./_images/eval-cheap-source-map.png =x180)

### eval-cheap-module-source-map

- 每个模块被 `eval` 函数包裹。
- 没有生成独立的 map 文件，map 文件以 `base64` 的格式存在于 `eval` 函数中。
- 处理来自 loader 的 source map，定位到原始代码。
- 定位到行。

::: code-tabs
@tab 原始代码
```ts
const a: number = 1
console.log(b)
```

@tab 打包结果
```js
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (() => {

eval("var a = 1;\nconsole.log(b);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi50cyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1zb3VyY2UtbWFwLy4vc3JjL21haW4udHM/MzRkMyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgYSA9IDE7XG5jb25zb2xlLmxvZyhiKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/main.ts\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/main.ts"]();
/******/ 	
/******/ })()
;
```
:::

![devtool: 'eval-cheap-module-source-map'](./_images/eval-cheap-module-source-map.png =x180)

### hidden-source-map

- 会生成映射文件，但是打包结果中没有包含指向映射文件的路径，因此服务器上没有映射文件，报错信息指向打包后的代码。

::: code-tabs
@tab 原始代码
```ts
const a: number = 1
console.log(b)
```

@tab 打包结果
```js
/******/ (() => { // webpackBootstrap
  var __webpack_exports__ = {};
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/
  var a = 1;
  console.log(b);

  /******/ })()
;
```
:::

![devtool: 'hidden-source-map'](./_images/hidden-source-map.png =x180)

### nosources-source-map

- 生成了映射文件，打包文件中指明了映射文件的路径，但是报错信息既不是显示源码，又不是显示打包后的代码，而是显示 `Could not load content for webpack://webpack-source-map/src/main.js (Fetch through target failed: Unsupported URL scheme; Fallback: HTTP error: status code 404, net::ERR_UNKNOWN_URL_SCHEME)`。
- 浏览器中可以查看到源码的文件名称和目录。

![devtool: 'nosources-source-map'](./_images/nosources-source-map.png =x160)
