---
date: 2024-05-11
---

# Dependency Pre-Bundling

> Ref: [深入浅出 Vite](https://juejin.cn/book/7050063811973218341?scrollMenuIndex=1)：第七章

前端项目的代码分为两部分，一部分是源代码（业务代码），另一部分是第三方包代码（位于 node_modules 中）。对于源代码，Vite 选择 no-bundle，而对于第三方包代码，Vite 使用 esbuild 进行 bundle。

依赖预构建（dependency pre-bundling）作用于第三方包代码，而不是源代码。

> Ref: [依赖预构建与环境](https://vitejs.dev/guide/dep-pre-bundling#the-why)

依赖预构建仅应用于开发环境，使用 esbuild 将其他格式转为 ESM 格式；在生产环境中，Vite 使用 `@rollup/plugin-commonjs` 将 CommonJS 转为 ESM。

> Ref: [深入浅出 Vite](https://juejin.cn/book/7050063811973218341?scrollMenuIndex=1)：第七章

依赖预构建的作用：
- 在 Vite 中，源代码和第三方包代码需要符合 ESM 规范才能运行，但是一些第三方包代码没有 ESM 的产物。依赖预构建可以将其他格式（如：CommonJS）转为 ESM 格式；
- 一些第三方包的函数会依赖很多工具函数（如：lodash-es 的 debounce 函数），它在加载时会发出特别多的请求，导致页面加载的前几秒几都乎处于卡顿状态。每个`import`都会触发一次新的文件请求，因此在这种依赖层级深、涉及模块数量多的情况下，会触发成百上千个网络请求，巨大的请求量加上 Chrome 对同一个域名下只能同时支持 `6` 个 HTTP 并发请求的限制，导致页面加载十分缓慢。依赖预构建可以将第三方包中分散的文件合并到一起，从而减少 HTTP 请求。
