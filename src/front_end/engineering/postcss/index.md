---
date: 2023-08-04
---

# PostCSS

## Introduce

> Reference: [Docs](https://github.com/postcss/postcss#postcss)

- PostCSS 通过插件来转换样式。常见的功能有检测和修改样式风格、转译 CSS 新特性等。

```js
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
        ],
      },
    ],
  },
}
```

## Autoprefixer

> Reference: [Docs](https://github.com/postcss/autoprefixer)

### 作用

- 为 CSS 属性添加浏览器供应商前缀。
- 不添加 polyfills。

### 安装

```npm
npm i --save-dev autoprefixer
```

### 配置

```js
// postcss.config.js
module.exports = {
  plugins: [
    require('autoprefixer'),
  ],
}
```

::: tip
- Autoprefixer 使用 Browserslist，所以需要[配置 Browserslist](/blog/front_end/engineering/browserslist/)。
:::

### 效果

::: code-tabs
@tab input
```css
::placeholder {
  color: gray;
}
```

@tab output
```css
::-webkit-input-placeholder {
  color: gray;
}

::-moz-placeholder {
  color: gray;
}

::placeholder {
  color: gray;
}
```
:::

## PostCSS Preset Env

### 作用

- 将较新的 CSS 特性转化为浏览器可以识别的特性。
- 根据 Browserslist 生成的目标浏览器添加合适的 polyfills。

### 安装

```npm
npm i --save-dev postcss-preset-env
```

### 配置

- `postcss-preset-env` 包含 `autoprefixer`，所以配置了 `postcss-preset-env` 就不需要再配置 `autoprefixer`。
- `postcss-preset-env` 的 [选项](https://github.com/csstools/postcss-plugins/blob/main/plugin-packs/postcss-preset-env/README.md#options)。

```js
// postcss.config.js
const postcssPresetEnv = require('postcss-preset-env')

/** @type {import('postcss-load-config').Config} */
module.exports = {
  plugins: [
    postcssPresetEnv(),
  ],
}
```

### 效果

:::code-tabs
@tab input
```css
@custom-selector :--heading h1, h2, h3;

:--heading {
  color: red;
}
```

@tab output
```css
h1, h2, h3 {
  color: red;
}
```
:::
