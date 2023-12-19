---
date: 2023-09-23
category: Webpack
---

# Split Chunks

## Role

> Reference: [roles of split chunk](https://juejin.cn/post/7118953143475372039#heading-0)

- 如果有多个入口文件都导入同一个模块，那么这些入口文件的打包结果中都包含了这个模块的代码。split chunk 的作用是将这个模块的代码打包为单独的文件，然后入口文件的打包结果再引入这个单独的文件，这个可以让入口文件的打包结果有更小的体积。
- split chunk 的作用可以把一个 chunk 拆分为多个 chunk，特别是一些不太可能会改动的第三方库要拆分出来，才能保证其他库或代码改变后不会重新生成该库的打包文件，这样浏览器下次加载这个包时可以直接从缓存中加载。

## Chunks Option

> Reference: 
> - [chunks option](https://juejin.cn/post/7118953143475372039#heading-1)

### async

- 将同步导入的 chunk 打包到输出文件，将异步导入的 chunk 打包为单独的文件。

::: code-tabs
@tab webpack.config.js
```js {3-4,15}
module.exports = {
  entry: {
    a: resolve(__dirname, 'src/entry_a.js'),
    b: resolve(__dirname, 'src/entry_b.js'),
  },

  output: {
    filename: 'js/[name].bundle.js',
    chunkFilename: 'js/[name].chunk.js',
  },
  
  optimization: {
    splitChunks: {
      minSize: 0,
      chunks: 'async',
    },
  },
}
```

@tab entry_a.js
```js{2}
import('@/module_a')
import '@/module_b'
```

@tab entry_b.js
```js{2}
import('@/module_a')
import('@/module_b')
```
:::

![同步引入的 `module_b` 被打包到输出文件，异步引入的 `module_b` 被打包拆分为独立文件](./_images/chunk_async.png =x300)

### initial

- 如果 chunk 被其他模块**都**以同步或**都**以异步的形式导入，那么该 chunk 将被打包为单独的文件。

::: code-tabs
@tab webpack.config.js
```js {16}
module.exports = {
  entry: {
    a: resolve(__dirname, 'src/entry_a.js'),
    b: resolve(__dirname, 'src/entry_b.js'),
  },

  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'js/[name].bundle.js',
    chunkFilename: 'js/[name].chunk.js',
  },
  
  optimization: {
    splitChunks: {
      minSize: 0,
      chunks: 'initial',
    },
  },
}
```

@tab entry_a.js
```js {1}
import '@/module_a'
```

@tab entry_b.js
```js {1}
import '@/module_a'
```
:::

![`module_a` 都以同步的方式导入，会被打包为单独的文件](./_images/chunk_initial_1.png =x300)

- 如果 chunk 被一些模块以异步的方式导入，被一些模块以同步的方式导入，那么**异步**导入的 chunk 会被打包为单独的文件，而**同步**导入的 chunk 会被打包到输出文件。

::: code-tabs
@tab webpack.config.js
```js {16}
module.exports = {
  entry: {
    a: resolve(__dirname, 'src/entry_a.js'),
    b: resolve(__dirname, 'src/entry_b.js'),
  },

  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'js/[name].bundle.js',
    chunkFilename: 'js/[name].chunk.js',
  },

  optimization: {
    splitChunks: {
      minSize: 0,
      chunks: 'initial',
    },
  },
}
```

@tab entry_a.js
```js {1}
import '@/module_a'
```

@tab entry_b.js
```js {1}
import('@/module_a')
```
:::

![`module_a` 被同步引入和异步引入，因此分别被打包到输出文件和独立文件](./_images/chunk_initial_2.png =x300)

### all

- 同步或异步导入的 chunk 都被打包为单独的文件。大部分项目使用这个选项最合适。

::: code-tabs
@tab webpack.config.js
```js {17}
module.exports = {
  entry: {
    a: resolve(__dirname, 'src/entry_a.js'),
    b: resolve(__dirname, 'src/entry_b.js'),
  },

  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'js/[name].bundle.js',
    chunkFilename: 'js/[name].chunk.js',
    clean: true,
  },
  
  optimization: {
    splitChunks: {
      minSize: 0,
      chunks: 'all',
    },
  },
}
```

@tab entry_a.js
```js {1}
import '@/module_a'
```

@tab entry_b.js
```js {1}
import('@/module_a')
```
:::

![`module_a` 无论被同步引入或异步引入，都会被打包为独立文件](./_images/chunk_all.png =x300)

## Cache Groups

> Reference:
>   - [docs: cacheGroups option](https://webpack.js.org/plugins/split-chunks-plugin/#splitchunkscachegroups)
>   - [blog: cacheGroups option](https://juejin.cn/post/7118953143475372039#heading-5)
>   - [分包策略](https://panjiachen.github.io/awesome-bookmarks/blog/webpack/webpack4-b.html)

### Role

- 如果没有使用 `cacheGroups`，大部分的包就会被打包到同一个输出文件中，这会造成该输出文件体积过大。当下载或更新其中一个包时，会导致整个输出文件的 hash 改变，从而导致浏览器缓存失效。

- `cacheGroups` 根据合适的分包策略（例如：没有经常更新的包打包为单独一个文件），将体积较大的包拆分为多个体积较小的包。每个包的输出文件都有独立的 hash。当下载或更新其中一个包时，只更新这个包的 hash，不会影响到其他包的 hash，这样就不会导致浏览器缓存失效。

### Example

```js
module.exports = {
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        // 将 ElementPlus 打包为单独的输出文件
        elementPlus: {
          name: 'chunk-element-plus',
          test(module) {
            return (
              module.resource &&
              (module.resource.includes(`${path.sep}element-plus`) ||
                module.resource.includes(`${path.sep}@element-plus`))
            )
          },
          priority: 10,
        },
        // 将 Vue 相关的包打包为单独的输出文件
        baseLib: {
          name: 'chunk-base-lib',
          test(module) {
            const path = require('path')
            return (
              module.resource &&
              (module.resource.includes(`${path.sep}@vue`) ||
                module.resource.includes(`${path.sep}vue-loader`) ||
                module.resource.includes(`${path.sep}vue-style-loader`) ||
                module.resource.includes(`${path.sep}vue-template-compiler`) ||
                module.resource.includes(`${path.sep}vue-router`) ||
                module.resource.includes(`${path.sep}pinia`) ||
                module.resource.includes(`${path.sep}axios`) ||
                module.resource.includes(`${path.sep}lodash-es`) ||
                module.resource.includes(`${path.sep}core-js-pure`) ||
                module.resource.includes(`${path.sep}core-js-compact`) ||
                module.resource.includes(`${path.sep}escape-html`))
            )
          },
          priority: -10,
        },
        // 将剩余的包打包为单独的输出文件
        common: {
          name: 'chunk-common',
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    }, 
  },
}
```

### Note

- `cacheGroups` 可以继承或者覆盖 `splitChunks.*` 中的任何配置选项。

- `test`, `priority`, `reuseExistingChunk` 只能在 `cacheGroups` 中配置。
