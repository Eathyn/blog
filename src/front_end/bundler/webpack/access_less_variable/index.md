---
date: 2023-07-28
---

# Access Less / Scss Variable

- 在 Vue 的单文件组件中访问 Less 或 Scss 定义的变量有以下方式。

## 导入

- 在 Vue 文件的 `style` 中导入 Less 或 Scss 文件。

```vue
<style lang="less" scoped>
@import "path/to/less/file";
</style>
```

## 配置打包工具

### Vite

> Reference:
> - [stack overflow solution](https://stackoverflow.com/a/73902056)
> - [css.preprocessorOptions](https://vitejs.dev/config/shared-options.html#css-preprocessoroptions)

- 在 `vite.config.ts` 中配置 `css.preprocessorOptions`。

```ts
export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `@import "path/to/less/file";`
      },
    },
  },
})
```

### Vue-CLI

> Reference:
> - [stack overflow solution](https://stackoverflow.com/a/55583615)
> - [css.loaderOptions](https://cli.vuejs.org/guide/css.html#passing-options-to-pre-processor-loaders)

- 在 `vue.config.js` 中配置 `css.loaderOptions`。
- 优点是不要在需要该 Less 文件的地方手动导入。缺点是 WebStorm 会给出未导入 Less 文件的警告。

```js
module.exports = {
  css: {
    loaderOptions: {
      less:{
        additionalData: `@import "path/to/less/file";`,
      },
    },
  },
}
```

### Webpack

> Reference: [additionalData](https://webpack.js.org/loaders/less-loader/#additionaldata)

- 在 `webpack.config.js` 中配置 `options.additionalData`

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.less$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "less-loader",
            options: {
              additionalData: `@import "path/to/less/file";`,
            },
          },
        ],
      },
    ],
  },
};
```
