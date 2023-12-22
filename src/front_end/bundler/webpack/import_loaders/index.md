---
date: 2023-12-22
category: webpack
---

# import Loaders

## Role

> Reference:
> - [blog: importLoaders](https://juejin.cn/post/7000519839378833416)
> - [docs: importLoaders](https://webpack.js.org/loaders/css-loader/#importloaders)

- 在 CSS 文件中遇到 `@import` 语法时，Webpack 不会让 `css-loader` 后面的 loader （例如：`postcss-loader`）处理被导入的 CSS 文件。通过配置 `importLoaders`，可以让被导入的 CSS 文件让 `css-loader` 后面的 loader 处理。

## Example

- 未配置 `importLoaders` 时，`css-loader` 后面的 loader 不会处理被导入的 CSS 文件。

::: code-tabs
@tab postcss.config.js
```js {2}
module.exports = {
  plugins: ['postcss-preset-env']
}
```

@tab webpack.config.js
```js {8}
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
  ],
}
```

@tab entry_a.js
```js
import './style_a.scss'
```

@tab style_a.css
```css {1}
@import './style_b.css';
```

@tab style_b.css
```css
:fullscreen {
  background-color: darkred;
}
```
:::

- `style_b.css` 没有经过 `postcss-loader` 处理，因此 `:fullscreen` 没有浏览器前缀：

```css
/* output: entry_a.css */
:fullscreen {
  background-color: darkred;
}
```

- 配置 `importLoaders` 之后，`style_b.css` 经过 `postcss-loader` 处理，因此 `:fullscreen` 有浏览器前缀。

::: code-tabs
@tab webpack.config.js
```js {11}
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              // importLoaders: 1 表示 style_b.css 要被 css-loader 后面的 1 个 loader 处理，即 postcss-loader
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
      },
    ],
  },
}
```

@tab output: entry_a.css
```css {1}
:-webkit-full-screen {
  background-color: darkred;
}
:fullscreen {
  background-color: darkred;
}
```
:::

## Resolved Import

> Reference:
> - [resolved import](https://github.com/webpack-contrib/css-loader/issues/228#issuecomment-312885975)

- CSS 的 `@import` 属于 unresolved import，而 Sass 和 Less 的 `@import` 属于 resolved import，不需要配置 `importLoaders`。

```js {9}
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
}
```

## Vue

- Vue 项目需要将 `importLoaders` 设置为 **2**。但理论上只需要设置成 **1**，因为只用了 postcss-loader。目前不知道原因，等我以后看 `vue-loader` 源码后再写（TODO）。

```js {11}
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
            },
          },
          'postcss-loader',
        ],
      },
    ],
  },
}
```
