---
date: 2023-09-23
category: Webpack
---

# Split Chunk

## Role

> Reference: [roles of split chunk](https://juejin.cn/post/7118953143475372039#heading-0)

- 如果有多个入口文件都导入同一个模块，那么这些入口文件的打包结果中都包含了这个模块的代码。split chunk 的作用是将这个模块的代码打包为单独的文件，然后入口文件的打包结果再引入这个单独的文件，这个可以让入口文件的打包结果有更小的体积。

## Options

### chunks

> Reference: [chunks option](https://juejin.cn/post/7118953143475372039#heading-1)

- `async`: 将同步导入的 chunk 打包到输出文件，将异步导入的 chunk 打包为单独的文件。

- `initial`: 如果 chunk 被其他模块**都**以同步或**都**以异步的形式导入，那么该 chunk 将被打包为单独的文件。如果 chunk 被一些模块以异步的方式导入，被一些模块以同步的方式导入，那么异步导入的 chunk 会被打包为单独的文件，而同步导入的 chunk 会被打包到输出文件。

- `all`: 同步或异步导入的 chunk 都被打包为单独的文件。大部分项目使用这个选项最合适。
