---
date: 2023-07-19
---

# CSS

## PostCSS

> Reference: [在 Vite 中使用 postcss-px-to-viewport](https://juejin.cn/post/7157168950990766087)

- 安装 `postcss-px-to-viewport-8-plugin` 包。

```npm
npm i --save-dev postcss-px-to-viewport-8-plugin
```

- 在 `vite.config.ts` 中配置 PostCSS。

```typescript
import postcssPxToViewport from 'postcss-px-to-viewport-8-plugin'

const pxToVw = postcssPxToViewport({
  unitToConvert: 'px',
  viewportWidth: 375,
  unitPrecision: 5,
  propList: ['*'],
  viewportUnit: 'vw',
  fontViewportUnit: 'vw',
  selectorBlackList: [],
  minPixelValue: 1,
  mediaQuery: true,
  exclude: /node_modules/,
})

export default defineConfig({
  css: {
    postcss: {
      plugins: [pxToVw],
    },
  },
})
```
