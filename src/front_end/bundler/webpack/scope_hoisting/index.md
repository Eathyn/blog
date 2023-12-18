---
date: 2023-12-08
category: webpack
---

# Scope Hoisting

## Problem

> Reference:
> - [Webpack5 核心原理与应用实践: chapter18](https://juejin.cn/book/7115598540721618944?utm_source=course_list)
> - [ModuleConcatenationPlugin](https://webpack.js.org/plugins/module-concatenation-plugin/)

- webpack 会将每个模块用函数包裹起来，这些函数会导致运行速度变慢。下列代码会被编译为如图所示的结果：

:::code-tabs
@tab entry_a.js
```js
import { greet } from './module_a'
console.log(greet())
```

@tab module_a.js
```js
export function greet() {
  return 'hello world'
}
```
:::

![entry_a.js 被函数包裹](./_images/entry_a_wrapper.png =x200)

![module_a.js 被函数包裹](./_images/module_a_wrapper.png =x300)

## Solution

> Reference:
> - [Webpack5 核心原理与应用实践: chapter18](https://juejin.cn/book/7115598540721618944?utm_source=course_list)
> - [ModuleConcatenationPlugin](https://webpack.js.org/plugins/module-concatenation-plugin/)

- `scope hoisting` 可以让多个模块被同一个函数包裹，提高运行速度。

::: code-tabs
@tab entry_a.js
```js
import { greet } from './module_a'
console.log(greet())
```

@tab module_a.js
```js
export function greet() {
  return 'hello world'
}
```
:::

![entry_a.js 和 module_a.js 被同一个函数包裹](./_images/two_modules_wrapper.png =x400)

## Usage

> References
> - [ModuleConcatenationPlugin](https://webpack.js.org/plugins/module-concatenation-plugin/)

- 启动 `scope hosting` 的方式（前两种方式本质上都是调用 `ModuleConcatenationPlugin` 插件）：
    - `mode: 'production'`
    - `optimization.concatenateModules: true`
    - `new webpack.optimize.ModuleConcatenationPlugin()`

## Only ESM

> References
> - [Babel: disable modules option](https://babeljs.io/docs/babel-preset-env#modules)
> - [Webpack5 核心原理与应用实践: chapter18](https://juejin.cn/book/7115598540721618944?utm_source=course_list)

- `ModuleConcatenationPlugin` 仅支持 ESM，因此需要将 Babel 的 `modules` 设置为 `false`，即 Babel 不会将 ESM 转换为其他形式，浏览器最终运行的是 ESM。

- 许多第三方包默认导出的格式是兼容性更好的 CommonJS，但是这会导致 scope hoisting 失效。配置 `mainFields` 可以尝试引入框架的 ESM 版本：

```js
module.exports = {
  resolve: {
    mainFields: ['jsnext:main', 'browser', 'main'],
  },
}
```

## Multiple Chunks

> References
> - [Webpack5 核心原理与应用实践: chapter18](https://juejin.cn/book/7115598540721618944?utm_source=course_list)

- 当多个 chunk 引用同一个模块时，为了避免重复写入相同的代码，scope hoisting 会失效。`entry_a.js` 和 `entry_b.js` 引用 `module_a.js`，scope hoisting 会失效。

::: code-tabs
@tab entry_a.js
```js
import { greet } from './module_a'
console.log('entry_a')
console.log(greet())
```

@tab entry_b.js
```js
import { greet } from './module_a'
console.log('entry_a')
console.log(greet())
```

@tab module_a.js
```js
export function greet() {
  return 'hello world'
}
```
:::

![多个 chunk 引用同一个模块时，scope hoisting 会失效](./_images/multi_chunks.png =x300)
