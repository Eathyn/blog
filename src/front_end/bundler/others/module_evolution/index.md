---
date: 2024-01-22
---

# Module Evolution

> Reference
> - [前端模块化的十年征程](https://zhuanlan.zhihu.com/p/265632724)
> - [前端 JavaScript 模块化规范进化论](https://segmentfault.com/a/1190000023711059)
> - [UMD](https://github.com/umdjs/umd?tab=readme-ov-file)

## script Tag

通过 script 标签引入变量和函数：

::: code-tabs
@tab index.html
```html
<body>
<script src="./module-a.js"></script>
<script src="./module-b.js"></script>
<script>
  console.log(data)
  greet()
</script>
</body>
```

@tab module-a.js
```js
let data = 'data'
```

@tab module-b.js
```js
function greet() {
  console.log('hello')
}
```
:::

这种方式有三个缺点：
1. 所有变量在全局环境中，如果不同模块有相同的变量名，就会造成变量名冲突；
2. 所有变量在全局环境中，我们无法清晰地知道某个变量属于哪个模块，会给调试带来困难；
3. 模块之前可能存在依赖关系，需要手动维护正确的模块加载顺序，当有很多模块且模块之间的依赖关系比较复杂时手动维护模块的加载顺序很容易出错。

## namespace

通过给 window 对象添加对象的方式形成命名空间，可以解决全局变量污染造成的问题（即 script Tag 方案的第一、二缺点），但是无法解决手动维护模块困难的问题（即 script Tag 方案的第三个缺点）：

::: code-tabs
@tab index.html
```html
<body>
<script src="./module-a.js"></script>
<script src="./module-b.js"></script>
<script>
  console.log(window.moduleA.data)
  window.moduleA.fn()
  console.log(window.moduleB.data)
  window.moduleB.fn()
</script>
</body>
```

@tab module-a.js
```js
window.moduleA = {
  data: 'data A',
  fn: function () {
    console.log('fn A')
  },
}
```

@tab module-b.js
```js
window.moduleB = {
  data: 'data B',
  fn: function () {
    console.log('fn B')
  },
}
```
:::

## IIFE

IIFE（立即执行函数）相对于 namespace 更加安全，它创建了一个函数作用域，模块的外部无法访问该作用域中的变量，只有模块内的方法才能访问这些变量（即闭包）：

::: code-tabs
@tab index.html 
```html
<body>
<script src="./module-a.js"></script>
<script src="./module-b.js"></script>
<script>
  console.log(window.moduleA.data) // undefined
  console.log(window.moduleA.fn()) // data A

  console.log(window.moduleB.data) // undefined
  console.log(window.moduleB.fn()) // data B
</script>
</body>
```

@tab module-a.js
```js
(function () {
  let data = 'data A'

  function fn() {
    return data
  }

  window.moduleA = {
    fn,
  }
})()
```

@tab module-b.js
```js
(function () {
  let data = 'data B'

  function fn() {
    return data
  }

  window.moduleB = {
    fn,
  }
})()
```
:::

但是 IIFE 依旧没办法解决手动维护模块困难的问题（即 script Tag 方案的第三个缺点）。

## AMD

## CMD

## CommonJS

## UMD

## ESM

> Ref: [no-bundle 的定义](https://juejin.cn/post/7132120567410327566)

no-bundle 的定义是在构建时只需处理模块的编译而无须打包，把模块间的相互依赖关系完全交给浏览器来处理。浏览器会加载入口模块，分析依赖后，再通过网络请求加载被依赖的模块。

> Ref: [深入浅出 Vite：第二章](https://juejin.cn/book/7050063811973218341?scrollMenuIndex=1)

ESM 的其中一个优势正是 no-bundle：

::: code-tabs
@tab index.html
```html
<script src="./index.js" type="module"></script>
```

@tab index.js
```js
import { fn1 } from './module-a.js'
import { fn2 } from './module-b.js'

console.log(fn1())
console.log(fn2())
```

@tab module-a.js
```js
export function fn1() {
  return 'module a'
}
```

@tab module-b.js
```js
export function fn2() {
  return 'module b'
}
```
:::

ESM 绝大部分主流浏览器都已经支持，详细支持率查看 [Can I Use](https://caniuse.com/es6-module)。

Node.js 从 12.20 版本正式支持 ESM。
