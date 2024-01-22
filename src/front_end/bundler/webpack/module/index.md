---
date: 2024-01-19
category: webpack
---

# Module

## Introduction

> Reference
> - [docs: modules](https://webpack.js.org/concepts/modules/)

- webpack 可以将多种模块化语法（ESM/CommonJS/AMD/@import/...）转化为可以直接在浏览器上运行的 JavaScript 语法。

## CommonJS loads CommonJS

> Reference
> - [CodeWhy: 5.3](https://ke.qq.com/course/3135768)

- 本节分析 webpack 将 CommonJS 语法转化为 JavaScript 后的代码。

::: tip
在浏览器对输出的代码打断点更容易分析。
:::

::: code-tabs
@tab entry.js

``` javascript
// CommonJS
const { add } = require('./math')
add(1, 2)
```

@tab math.js

```javascript
// CommonJS
function add(n1, n2) {
  console.log(n1 + n2)
}

module.exports = {
  add,
}
```

@tab output.js
```javascript
// 为了方便分析，我把 webpack 输出文件中的注释和一些立即执行函数删除了
var __webpack_modules__ = {
  // 键是模块的路径；值是包含模块代码的函数
  './src/math.js':
  (module) => {
    // module 是 26-28 行创建的对象
    function add(n1, n2) {
      console.log(n1 + n2)
    }
    
    module.exports = {
      add,
    }
  },
}

var __webpack_module_cache__ = {}

function __webpack_require__(moduleId) {
  // 有缓存该模块则直接返回该模块
  var cachedModule = __webpack_module_cache__[moduleId]
  if (cachedModule !== undefined) {
    return cachedModule.exports
  }
  // 没有缓存则为 module 和 __webpack_module_cache__[moduleId] 赋值新创建的对象
  var module = __webpack_module_cache__[moduleId] = {
    exports: {},
  }
  // 执行模块路径对应的函数，把上面创建的 module 初始对象作为参数
  __webpack_modules__[moduleId](module, module.exports, __webpack_require__)
  return module.exports
}

var __webpack_exports__ = {};

(() => {
  // entry.js
  const {add} = __webpack_require__('./src/math.js')
  add(1, 2)
})()
```
:::

## ESM loads ESM

> Reference
> - [CodeWhy 5.4](https://ke.qq.com/course/3135768#term_id=103555160)

::: code-tabs
@tab entry.js
```javascript
// ESM
import { add } from './math'
add(1, 2)
```

@tab math.js
```javascript
// ESM
function add(n1, n2) {
  console.log(n1 + n2)
}

export {
  add,
}
```

@tab output.js
```javascript
// 为了方便分析，我把 webpack 输出文件中的注释和一些立即执行函数删除了
var __webpack_modules__ = ({
  // 键是模块的路径；值是包含模块代码的函数
  './src/math.js':
    (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      // 为 __webpack_exports__ 对象增加 ESM 模块的特有属性：Symbol.toStringTag 和 __esModule
      __webpack_require__.r(__webpack_exports__)
      // 将第二个实参的键值对全部拷贝到 __webpack_exports__ 对象上
      __webpack_require__.d(__webpack_exports__, {
        add: () => (/* binding */ add),
      })
      
      function add(n1, n2) {
        console.log(n1 + n2)
      }
    },
})

var __webpack_module_cache__ = {}

function __webpack_require__(moduleId) {
  // 有缓存该模块则直接返回该模块
  var cachedModule = __webpack_module_cache__[moduleId]
  if (cachedModule !== undefined) {
    return cachedModule.exports
  }
  // 没有缓存则为 module 和 __webpack_module_cache__[moduleId] 赋值新创建的对象
  var module = __webpack_module_cache__[moduleId] = {
    exports: {},
  }
  // 执行模块路径对应的函数，把上面创建的 module 初始对象作为参数
  __webpack_modules__[moduleId](module, module.exports, __webpack_require__)
  return module.exports
}

// 将第二个实参的键值对全部拷贝到 __webpack_exports__ 对象上
(() => {
  __webpack_require__.d = (exports, definition) => {
    for (var key in definition) {
      if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
        Object.defineProperty(exports, key, {enumerable: true, get: definition[key]})
      }
    }
  }
})();

// 封装 hasOwnProperty
(() => {
  __webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
})();

// 为 __webpack_exports__ 对象增加 ESM 特有的属性：Symbol.toStringTag 和 __esModule
(() => {
  // define __esModule on exports
  __webpack_require__.r = (exports) => {
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      Object.defineProperty(exports, Symbol.toStringTag, {value: 'Module'})
    }
    Object.defineProperty(exports, '__esModule', {value: true})
  }
})()

var __webpack_exports__ = {};

(() => {
  // entry.js
  __webpack_require__.r(__webpack_exports__)
  var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('./src/math.js');
  _math__WEBPACK_IMPORTED_MODULE_0__.add(1, 2)
})()
```
:::

## CommonJS loads ESM

> Reference
> - [CodeWhy 5.5](https://ke.qq.com/course/3135768#term_id=103555160)

- 除了下面代码不同，其他部分与 ESM loads ESM 都相同。

::: code-tabs
@tab entry.js
```javascript
// CommonJS
const { add } = require('./math')
add(1, 2)
```

@tab math.js
```javascript
// ESM
export function add(n1, n2) {
  console.log(n1 + n2)
}
```

@tab output.js
```javascript
var __webpack_modules__ = ({
  './src/math.js':
    (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__)
      __webpack_require__.d(__webpack_exports__, {
        add: () => (/* binding */ add),
      })

      function add(n1, n2) {
        console.log(n1 + n2)
      }
    },
})

var __webpack_module_cache__ = {}

function __webpack_require__(moduleId) {
  var cachedModule = __webpack_module_cache__[moduleId]
  if (cachedModule !== undefined) {
    return cachedModule.exports
  }
  var module = __webpack_module_cache__[moduleId] = {
    exports: {},
  }
  __webpack_modules__[moduleId](module, module.exports, __webpack_require__)
  return module.exports
}

(() => {
  // define getter functions for harmony exports
  __webpack_require__.d = (exports, definition) => {
    for (var key in definition) {
      if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
        Object.defineProperty(exports, key, {enumerable: true, get: definition[key]})
      }
    }
  }
})();

(() => {
  __webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
})();

(() => {
  __webpack_require__.r = (exports) => {
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      Object.defineProperty(exports, Symbol.toStringTag, {value: 'Module'})
    }
    Object.defineProperty(exports, '__esModule', {value: true})
  }
})()

var __webpack_exports__ = {};

(() => {
  const {add} = __webpack_require__('./src/math.js')
  add(1, 2)
})()
```
:::

## ESM loads CommonJS

> Reference
> - [CodeWhy 5.5](https://ke.qq.com/course/3135768#term_id=103555160)


::: code-tabs
@tab entry.js
```javascript
// ESM
import { add } from './math.js'
add(1, 2)
```

@tab math.js
```javascript
// CommonJS
function add(n1, n2) {
  console.log(n1 + n2)
}

module.exports = {
  add,
}
```

@tab output.js
```javascript
var __webpack_modules__ = ({
   './src/math.js':
   ((module) => {
    function add(n1, n2) {
      console.log(n1 + n2)
    }

    module.exports = {
      add,
    }
  }),
})

var __webpack_module_cache__ = {}

function __webpack_require__(moduleId) {
  var cachedModule = __webpack_module_cache__[moduleId]
  if (cachedModule !== undefined) {
    return cachedModule.exports
  }
  var module = __webpack_module_cache__[moduleId] = {
    exports: {},
  }
  __webpack_modules__[moduleId](module, module.exports, __webpack_require__)
  return module.exports
}

/* webpack/runtime/compat get default export */
(() => {
  // getDefaultExport function for compatibility with non-harmony modules
  __webpack_require__.n = (module) => {
    var getter = module && module.__esModule ?
      () => (module['default']) :
      () => (module)
    __webpack_require__.d(getter, {a: getter})
    return getter
  }
})();

/* webpack/runtime/define property getters */
(() => {
  // define getter functions for harmony exports
  __webpack_require__.d = (exports, definition) => {
    for (var key in definition) {
      if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
        Object.defineProperty(exports, key, {enumerable: true, get: definition[key]})
      }
    }
  }
})();

/* webpack/runtime/hasOwnProperty shorthand */
(() => {
  __webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
})();

/* webpack/runtime/make namespace object */
(() => {
  // define __esModule on exports
  __webpack_require__.r = (exports) => {
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      Object.defineProperty(exports, Symbol.toStringTag, {value: 'Module'})
    }
    Object.defineProperty(exports, '__esModule', {value: true})
  }
})()

var __webpack_exports__ = {};

(() => {
  __webpack_require__.r(__webpack_exports__)
  var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('./src/math.js')
  var _math__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_math__WEBPACK_IMPORTED_MODULE_0__)
  _math__WEBPACK_IMPORTED_MODULE_0__.add(1, 2)
})()
```
:::

::: warning Todo
- `__webpack_require__.n` 函数的作用看注释是为了 `getDefaultExport function for compatibility with non-harmony modules`。
- harmon 和 harmon export 的解释是：[stack overflow](https://stackoverflow.com/a/52871656/9863318)。
- 什么时候需要使用到 `_math__WEBPACK_IMPORTED_MODULE_0___default`？
:::
