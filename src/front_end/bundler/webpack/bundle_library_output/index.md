---
date: 2024-02-03
category: webpack
---

# Bundle Library Output

> Reference
> - [Configuring CommonJS & ES Modules for Node.js](https://dev.to/jakobjingleheimer/configuring-commonjs-es-modules-for-nodejs-12ed)

本文介绍：
- 库的源码是 CommonJS，如何通过 Webpack 配置和封装，让库的使用者可以通过 CommonJS 或 ESM 引入库。
- 库的源码是 ESM，如何通过 Webpack 配置和封装，让库的使用者可以通过 CommonJS 或 ESM 引入库。

## CJS to CJS

- 本节介绍：库的源码使用 CommonJS，库的使用者可以通过 CommonJS 引入库。

- 核心操作：
  - `output.library.type` 配置为 `commonjs`。

::: code-tabs
@tab webpack config
```js
module.exports = {
  output: {
    library: {
      type: 'commonjs',
    },
  },
}
```
:::

- 详细配置：[CJS to CJS](https://github.com/Eathyn/nodejs-module-config-examples-new/tree/main/cjs/cjs-distro)

## CJS to ESM

- 本节介绍：库的源码使用 CommonJS，库的使用者可以通过 ESM 引入库。

- 核心操作：
  - 让 Webpack 以 ESM 的格式打包库

::: code-tabs
@tab webpack config
```js
module.exports = {
  // ...
  experiments: {
    outputModule: true,
  },
  output: {
    chunkFormat: 'module',
    library: {
      type: 'module',
    },
    module: true,
  },
}
```

@tab webpack output
```js
// ...
var __webpack_exports__ = __webpack_require__(0);
var __webpack_exports__test = __webpack_exports__.test;
export { __webpack_exports__test as test };
```
:::

- 详细配置：[CJS to ESM](https://github.com/Eathyn/nodejs-module-config-examples-new/tree/main/cjs/esm-distro)

## CJS to CJS and ESM

- 本节介绍：库的源码使用 CommonJS，库的使用者可以通过 CommonJS 或 ESM 引入库。

### double distro

- 核心操作：
  - 配置两个 webpack 配置文件，打包出两个输出文件，一个支持 CommonJS，另一个支持 ESM。
  - 配置 exports，指定 import 和 require 的路径。

::: code-tabs
@tab webpack cjs config
```js
module.exports = {
  output: {
    filename: '[name].cjs',
    clean: {
      keep: 'main.mjs', // 不要删除 main.mjs
    },
    library: {
      type: 'commonjs',
    },
  },
}
```

@tab webpack esm config
```js
module.exports = {
  output: {
    filename: '[name].mjs',
    chunkFormat: 'module',
    clean: {
      keep: 'main.cjs', // 不要删除 main.cjs
    },
    library: {
      type: 'module',
    },
    module: true,
  },
  experiments: {
    outputModule: true,
  },
}
```

@tab package.json
```json
{
  "exports": {
    ".": {
      "import": "./dist/main.mjs",
      "require": "./dist/main.cjs",
      "default": "./dist/main.cjs"
    }
  }
}
```
:::

- 详细配置：[CJS to CJS and ESM: double distro](https://github.com/Eathyn/nodejs-module-config-examples-new/tree/main/cjs/dual/double-distro)

### property distro

- 核心操作：
  - 将 output.library.type 配置为 commonjs2。

::: code-tabs
@tab webpack config
```js
module.exports = {
  output: {
    library: {
      type: 'commonjs2',
    },
  },
}
```

@tab webpack output
```js
// ...
var __webpack_exports__ = __webpack_require__(0)
module.exports = __webpack_exports__
```
:::

- 详细配置：[CJS to CJS and ESM: property distro](https://github.com/Eathyn/nodejs-module-config-examples-new/tree/main/cjs/dual/property-distro)

### wrapper distro

- 核心操作：
  - 将 output.library.type 配置为 commonjs。
  - 新建 js 文件，并以 ESM 的方式 [re-export](https://javascript.info/import-export#re-export) 打包文件的内容。
  - 配置 exports，指定 import 和 require 的路径。

::: code-tabs
@tab webpack config
```js
module.exports = {
  output: {
    clean: {
      keep: 'wrapper.mjs',
    },
    library: {
      type: 'commonjs',
    },
  },
}
```

@tab webpack output
```js
// ...
var __webpack_exports__ = __webpack_require__(0);
var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
```

@tab esm wrapper
```js
export { test } from './main.js'
```

@tab package.json
```json
{
  "exports": {
    ".": {
      "import": "./dist/wrapper.mjs",
      "require": "./dist/main.js",
      "default": "./dist/main.js"
    }
  }
}
```
:::

- 详细配置：[CJS to CJS and ESM: wrapper distro](https://github.com/Eathyn/nodejs-module-config-examples-new/tree/main/cjs/dual/wrapper-distro)

## ESM to CJS

- 本节介绍：库的源码使用 ESM，库的使用者可以通过 CommonJS 引入库。

- 核心操作：
  - type 设置为 module，以处理库源码中的 ESM 语法。
  - output.library.type 设置为 commonjs，以生成 CommonJS 语法。

::: code-tabs
@tab package.json
```json
{
  "type": "module",
  "exports": {
    ".": "./dist/main.cjs",
    "./package.json": "./package.json"
  }
}
```

@tab webpack config
```js
module.exports = {
  output: {
    filename: '[name].cjs',
    library: {
      type: 'commonjs',
    },
  },
}
```

@tab webpack ouput
```js
// ...
var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
```
:::

- 详细配置：[ESM to CJS](https://github.com/Eathyn/nodejs-module-config-examples-new/tree/main/esm/cjs-distro)

## ESM to ESM

- 本节介绍：库的源码使用 ESM，库的使用者可以通过 ESM 引入库。

- 核心操作：
  - type 设置为 module，以处理库源码中的 ESM 语法。
  - output.library.type 设置为 module，以生成 ESM 语法。

::: code-tabs
@tab package.json
```json
{
  "type": "module",
  "exports": {
    ".": "./dist/main.mjs",
    "./package.json": "./package.json"
  }
}
```

@tab webpack config
```js
module.exports = {
  output: {
    chunkFormat: 'module',
    library: {
      type: 'module',
    },
    module: true,
  },
  experiments: {
    outputModule: true,
  },
}
```

@tab webpack output
```js
// ...
var __webpack_exports__test = __webpack_exports__.test;
export { __webpack_exports__test as test };
```
:::

- 详细配置：[ESM to ESM](https://github.com/Eathyn/nodejs-module-config-examples-new/tree/main/esm/esm-distro)

## ESM to CJS and ESM

### double distro

- 核心操作：
  - type 设置为 module，以处理库源码中的 ESM 语法。
  - 配置两个 webpack 配置文件，打包出两个输出文件，一个支持 CommonJS，另一个支持 ESM。
  - 配置 exports，指定 import 和 require 的路径。

::: code-tabs
@tab package.json
```json
{
  "type": "module",
  "exports": {
    ".": {
      "import": "./dist/main.mjs",
      "require": "./dist/main.cjs",
      "default": "./dist/main.cjs"
    },
    "./package.json": "./package.json"
  },
  "scripts": {
    "build": "npm run generate:esm && npm run generate:cjs",
    "generate:esm": "webpack --config=./webpack.config-esm.cjs",
    "generate:cjs": "webpack --config=./webpack.config-cjs.cjs"
  }
}
```

@tab webpack esm config
```js
module.exports = {
  output: {
    filename: '[name].mjs',
    chunkFormat: 'module',
    clean: {
      keep: 'main.cjs',
    },
    library: {
      type: 'module',
    },
    module: true,
  },
  experiments: {
    outputModule: true,
  },
}
```

@tab webpack esm output
```js
// ...
var __webpack_exports__test = __webpack_exports__.test;
export { __webpack_exports__test as test };
```

@tab webpack cjs config
```js
module.exports = {
  output: {
    filename: '[name].cjs',
    clean: {
      keep: 'main.mjs',
    },
    library: {
      type: 'commonjs',
    },
  },
}
```

@tab webpack cjs output
```js
// ...
var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
```
:::

- 详细配置：[ESM to CJS and ESM: double distro](https://github.com/Eathyn/nodejs-module-config-examples-new/tree/main/esm/dual/double-distro)

### property distro

- 核心操作：
  - type 设置为 module，以处理库源码中的 ESM 语法。
  - 将 output.library.type 配置为 commonjs-static。

::: code-tabs
@tab package.json
```json
{
  "type": "module"
}
```

@tab webpack config
```js
module.exports = {
  output: {
    filename: '[name].cjs',
    library: {
      type: 'commonjs-static',
    },
  },
}
```

@tab webpack output
```js
// ...
exports.test = __webpack_exports__.test;
Object.defineProperty(exports, "__esModule", { value: true });
```
:::

- 详细配置：[ESM to CJS and ESM: property distro](https://github.com/Eathyn/nodejs-module-config-examples-new/tree/main/esm/dual/property-distro)

### wrapper distro

- 核心操作：
  - type 设置为 module，以处理库源码中的 ESM 语法。
  - output.library.type 设置为 commonjs，以生成支持 CommonJS 的输出文件。
  - 新建 js 文件，并以 ESM 的方式 export 打包文件的内容。
  - 配置 exports，指定 import 和 require 的路径。

::: code-tabs
@tab package.json
```json
{
  "type": "module",
  "exports": {
    ".": {
      "import": "./dist/wrapper.js",
      "require": "./dist/main.cjs",
      "default": "./dist/main.cjs"
    },
    "./package.json": "./package.json"
  }
}
```

@tab webpack config
```js
module.exports = {
  output: {
    clean: {
      keep: 'wrapper.js',
    },
    filename: '[name].cjs',
    library: {
      type: 'commonjs',
    },
  },
}
```

@tab webpack output
```js
// ...
var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
```

@tab esm wrapper
```js
import pkg from './main.cjs'
const { test } = pkg

export {
  test
}
```
:::

- 详细配置：[ESM to CJS and ESM: wrapper distro](https://github.com/Eathyn/nodejs-module-config-examples-new/tree/main/esm/dual/wrapper-distro)
