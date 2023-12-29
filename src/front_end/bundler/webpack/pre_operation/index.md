---
date: 2023-12-29
category: webpack
---

# Pre Operation

> Reference
> - [my blog: Pre Operation](/blog/front_end/html/pre_operation/)
> - [blog: PreFetch and PreLoad](https://medium.com/webpack/link-rel-prefetch-preload-in-webpack-51a52358f84c)
> - [docs: Prefetching/Preloading modules](https://webpack.js.org/guides/code-splitting/#prefetchingpreloading-modules)

- webpack 通过 `webpackPrefetch` 注释使用 PreFetch；通过 `webpackPreload` 注释使用 PreLoad。

```js
import(/* webpackPrefetch: true */ './path/to/LoginModal.js')

import(/* webpackPreload: true */ 'ChartingLibrary')
```

- PreLoad 与 PreFetch 在 webpack 中的区别：
  - preloaded chunk 与 parent chunk 并行下载；prefetched chunk 在 parent chunk 下载完成后才开始下载。
  - 还有其他的[区别](https://webpack.js.org/guides/code-splitting/#prefetchingpreloading-modules:~:text=a%20bunch%20of-,differences,-compared%20to%20prefetch)
