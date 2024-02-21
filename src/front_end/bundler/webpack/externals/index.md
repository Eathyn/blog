---
date: 2024-01-12
category: webpack
---

# Externals

## Role

- `externals` 的作用是减少打包的体积。它的原理是将体积较大的且不需要经常更新的包以 CDN 的方式引入项目。

::: tip
- `externals` 一般配置在生产环境，开发环境还是以 node modules 的方式使用包。
- 开发环境和生产环境的包版本要保持一致。
- 以 CDN 引入的包要锁定版本。
:::

## Usage

> Reference
> - [article: externals](https://juejin.cn/post/6844904190083350542)
> - [docs: externals](https://webpack.js.org/configuration/externals)

我一般将 `externals` 配置为对象，属性的键是第三方包的名称（例如：element-plus），属性的值（例如：ElementPlus）可以由几种方式获取。接下来我举例子讲解如何找到这个属性值。

::: code-tabs
@tab index.html
```html
<head>
  <% if (process.env.NODE_ENV === 'production') { %>
  <link rel="stylesheet" href="https://unpkg.com/element-plus@2.4.2/dist/index.css">
  <script src="https://unpkg.com/vue@3.3.4/dist/vue.global.prod.js"></script>
  <script src="https://unpkg.com/element-plus@2.4.2/dist/index.full.min.js"></script>
  <script src="https://unpkg.com/vue-router@4.2.5/dist/vue-router.global.prod.js"></script>
  <script src="https://unpkg.com/vue-demi@0.14.5/lib/index.iife.js"></script>
  <script src="https://unpkg.com/pinia@2.1.7/dist/pinia.iife.prod.js"></script>
  <script src="https://unpkg.com/axios@1.6.5/dist/axios.min.js"></script>
  <script src="https://unpkg.com/vue-i18n@9.8.0/dist/vue-i18n.global.prod.js"></script>
  <% } %>
</head>
```

@tab webpack.prod.js
```js
module.exports = {
  externals: {
    vue: 'Vue',
    'element-plus': 'ElementPlus',
    'vue-router': 'VueRouter',
    'vue-demi': 'VueDemi',
    pinia: 'Pinia',
    axios: 'axios',
    'vue-i18n': 'VueI18n',
  },
}
```
:::

## Find Property Value: Bundler Configuration

### Webpack

> Reference
> - [output.library.name](https://webpack.js.org/configuration/output/#outputlibraryname)
> - [my blog: bundle library](/blog/front_end/bundler/webpack/bundle_library/)

通过配置 `output.library.name`，可以指定包的名称，这个名称就是我们寻找的属性值。以下面的代码为例：

::: code-tabs
@tab library config
```js {4}
module.exports = {
  output: {
    library: {
      name: 'MyLibrary',
      type: 'umd',
    },
    globalObject: 'this',
  },
}
```

@tab library output
```js {9}
(function webpackUniversalModuleDefinition(root, factory) {
  if(typeof exports === 'object' && typeof module === 'object')
    module.exports = factory();
  else if(typeof define === 'function' && define.amd)
    define([], factory);
  else if(typeof exports === 'object')
    exports["MyLibrary"] = factory();
  else
    root["MyLibrary"] = factory();
})(this, () => {
  // ...
})
```

@tab usage: browser
```html {3}
<script src="../node_modules/eathyn-lib/build/index.js"></script>
<script>
  const Person = MyLibrary.default
  const person = new Person('Eathyn')
  person.sayHi()
</script>
```
:::

### Rollup

> Reference
> - [output.name](https://rollupjs.org/configuration-options/#output-name)
> - [Vue package.json](https://unpkg.com/browse/vue@3.4.19/package.json)
> - [Vue rollup.config.js](https://github.com/vuejs/core/blob/main/rollup.config.js)

通过配置 `output.name`，可以指定包的名称，这个名称就是我们寻找的属性值。

以 Vue 为例，在 Vue 的 [package.json](https://unpkg.com/browse/vue@3.4.19/package.json) 和 [rollup.config.js](https://github.com/vuejs/core/blob/main/rollup.config.js) 中，我们看到如下代码：

::: code-tabs
@tab package.json
```json {3}
{
  "buildOptions": {
    "name": "Vue"
  }
}
```

@tab rollup.config.js
```js {7}
const pkg = require(resolve(`package.json`))
const packageOptions = pkg.buildOptions || {}

function createConfig(format, output, plugins = []) {
  // ...
  if (isGlobalBuild) {
    output.name = packageOptions.name
  }
  // ...
}
```
:::

上述代码的意思是 Vue 从 package.json 中获取 `buildOptions.name`，并把它赋值给 rollup 的 `output.name`。因此 `Vue` 就是我们寻找的属性值，`externals` 的配置如下：

```js
module.exports = {
  externals: {
    vue: 'Vue',
  },
}
```

## Find Property Value: Output File

通过 unpkg 阅读打包输出的包文件，包文件向外暴露的变量名就是属性的值。

### Vue

以 Vue.js 为例，通过阅读 [vue.global.js](https://unpkg.com/vue@3.4.10/dist/vue.global.js) 可知，该 JS 文件总体上是一个立即执行函数，该函数将返回的值赋给名为 `Vue` 的变量：

```js
// vue.global.js
var Vue = (function (exports) {
  // ...
})({})
```

`Vue` 就是我们寻找的属性值，因此 `externals` 应该配置为：

```js
module.exports = {
  externals: {
    vue: 'Vue',
  },
}
```

### Element Plus

以 Element Plus 为例，它的[源文件](https://unpkg.com/element-plus@2.5.1/dist/index.full.js)总体结构如下：

```js {4,6,9}
/*! Element Plus v2.5.1 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? 
    factory(exports, require('vue')) :
    typeof define === 'function' && define.amd ? 
      define(['exports', 'vue'], factory) :
      (global = typeof globalThis !== 'undefined' ? 
        globalThis : 
        global || self, factory(global.ElementPlus = {}, global.Vue)
      );
})(
  this,
  (function (exports, vue) {
    //...
  })()
)
```

上述代码使用 UMD 模块管理方案，即支持 CommonJS、AMD 和 全局挂载（第 9 行代码）。由第 9 行代码可知，`ElementPlus` 挂在到 `global`（因为运行在浏览器环境，所以 `global` 等于 `Window`），所以 `ElementPlus` 就是我们寻找的属性值，因此 `externals` 的配置如下：

```js
module.exports = {
  externals: {
    'element-plus': 'ElementPlus',
  },
}
```

还要注意的是，从第 4/6/9 行代码中，我们看到 ElementPlus 依赖 Vue，所以 Vue 需要先引入，ElementPlus 需要后引入：

```html
<head>
  <script src="https://unpkg.com/vue@3.3.4/dist/vue.global.prod.js"></script>
  <script src="https://unpkg.com/element-plus@2.4.2/dist/index.full.min.js"></script>
</head>
```

## Find Property Value: Window.*

从 CDN 引入包后在浏览器控制台输入 `window.` + 你觉得可能的属性值。这种方式不一定准确，也不一定猜得到，例如你不一定能猜到 lodash 对外暴露的全局变量是 `_`。
