---
date: 2023-11-15
category: webpack
---

# Module, Chunk and Bundle

> Refs
> 1. [module, chunk 和 bundle 的区别](https://www.cnblogs.com/skychx/p/webpack-module-chunk-bundle.html)
> 2. [chunk classification](https://webpack.js.org/concepts/under-the-hood/#chunks)

![代码的类型变化](./_images/webpack_handle_process.png =x400)

- `module`: 我们写下的源代码文件，一个文件代表一个 module。

- `chunk`: 
  - 当我们写的 module 源文件传到 webpack 进行打包时，webpack 会根据文件引用关系生成 chunk 文件，webpack 会对这个 chunk 文件进行一些操作。
  - chunk 分为 `initial chunk` 和 `non-initial chunk`。`initial chunk` 是入口文件的主要 chunk，包含该入口文件的模块和依赖。`non-initial chunk` 是懒加载 chunk，出现在 `import()` 语法或 `SplitChunksPlugin` 中。[\[2\]](https://webpack.js.org/concepts/under-the-hood/#chunks)

- `bundle`: webpack 处理好 chunk 文件后，最后会输出 bundle 文件，这个 bundle 文件包含了经过加载和编译的最终源文件，所以它可以直接在浏览器中运行。

- `module`，`chunk` 和 `bundle` 其实就是同一份逻辑代码在不同转换场景下的取了三个名字，我们直接写出来的是 module，webpack 处理时是 chunk，最后生成浏览器可以直接运行的 bundle。