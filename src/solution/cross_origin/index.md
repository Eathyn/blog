---
date: 2021-11-30
category: solution
tag: 跨域
---

# 跨域

## CORS

- 让后端开发者配置跨域的 HTTP 头部
- 适合开发环境和线上环境

## Proxy

- 适合开发环境

:::: code-group

::: code-group-item webpack
```js
module.exports = {
  // ...
  devServer: {
    proxy: {
      '/base_url/': {
        target: '<url>',
        ws: true,
        changeOrigin: true,
      },
    }
  },
  //...
}
```
:::

::: code-group-item vite
```ts
export default defineConfig({
  // ...
  server: {
    proxy: {
      '/base_url/': {
        target: '<url>',
        ws: true,
        changeOrigin: true,
      },
    }
  }
  // ...
})
```
:::

::::

## Nginx

- 配置 Nginx 实现代理
- 适合线上环境
