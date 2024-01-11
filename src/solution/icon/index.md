---
date: 2021-12-07
category: solution
---

# 图标

## CSS Sprite

> Reference
> - [精灵图](https://juejin.cn/post/6844903517564436493#heading-1)
> - [CSS Sprites](https://www.tutorialrepublic.com/css-tutorial/css-sprites.php)
> - [源码](https://github.com/Eathyn/icon-solutions/tree/main/image-sprites)

- 精灵图（Image Sprites）原理：将多张图片组合成一张图片，通过 `background-position` 定位到各个小图片。
- 优点：减少 HTTP 请求（注：如果使用 HTTP/2，那么多请求也不会有很大的性能开销）。
- 缺点：维护麻烦，不推荐使用。


::: code-tabs
@tab html
```html
<div id="home"></div>
<div id="left"></div>
<div id="right"></div>
```

@tab css
```css {6,13,20}
#home {
	width: 46px;
	height: 44px;
	background-image: url(./img_sprites.gif);
  /* 通过 `background-position` 定位到各个小图片 */
	background-position: 0 0;
}

#left {
	width: 43px;
	height: 44px;
	background-image: url(./img_sprites.gif);
	background-position: -47px 0;
}

#right {
	width: 43px;
	height: 44px;
	background-image: url(./img_sprites.gif);
	background-position: -91px 0;
}
```
:::

## iconfont: unicode

> Reference
> - [iconfont: unicode](https://juejin.cn/post/6844903517564436493#heading-3)
> - [源码](https://github.com/Eathyn/icon-solutions/tree/main/iconfont/unicode)

### 优缺点

- 优点：兼容性好。
- 缺点：不支持多色图标。

### 实践

- 从 `iconfont` 官网下载图标压缩文件至本地，将字体文件复制到项目中，并且在 `CSS` 文件中指定字体文件的地址

```css
@font-face {
	font-family: "iconfont";
  /* 指定字体文件的地址 */
	src:
		url(../fonts/iconfont.woff2) format('woff2'),
		url(../fonts/iconfont.woff) format('woff'),
		url(../fonts/iconfont.ttf) format('truetype');
}
```

- 引入 `.iconfont` 类

```css
.iconfont {
	font-family: "iconfont" !important;
	font-size: 25px;
	font-style: normal;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
```

- 使用代码

```html
<span class="iconfont">&#xe602;</span>
<span class="iconfont">&#xe603;</span>
```

## iconfont: font class

> Reference
> - [font class](https://juejin.cn/post/6844903517564436493#heading-4)
> - [源码](https://github.com/Eathyn/icon-solutions/tree/main/iconfont/font-class)

### 优缺点

- 优点：解决 `unicode` 语义不直观，不能一眼看出引用了哪个图标的问题。
- 缺点：不支持多色图标。

### 实践

- 从 `iconfont` 官网下载图标压缩文件至本地，将字体文件复制到项目中，并且在 `CSS` 文件中指定字体文件的地址

```css
@font-face {
	font-family: "iconfont";
  /* 指定字体文件的地址 */
	src:
		url(../fonts/iconfont.woff2) format('woff2'),
		url(../fonts/iconfont.woff) format('woff'),
		url(../fonts/iconfont.ttf) format('truetype');
}
```

- 引入 `iconfont` 类和各个图标的 `:before` 伪元素

```css
.iconfont {
	font-family: "iconfont" !important;
	font-size: 25px;
	font-style: normal;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

.icon-Icon_earrings:before {
	content: "\e602";
}
```

- 在 `html` 中添加这些伪元素类就可以显示图标，通过类名就能快速识别引用了哪些图标

```html
<span class="iconfont icon-Icon_earrings"></span>
```

## iconfont: symbol

> Reference
> - [iconfont: symbol](https://juejin.cn/post/6844903517564436493#heading-5)
> - [源码](https://github.com/Eathyn/icon-solutions/tree/main/iconfont/symbol)
> - [封装组件源码](https://github.com/Eathyn/icon-solutions/tree/main/encapsulate-icon)
> - [解决 SVG 无法更改颜色的问题](https://www.jianshu.com/p/2ab409eea563)

### 优缺点

- 优点：
  - 支持多色图标
  - 矢量图形，放大不会模糊

- 缺点：
  - 兼容性较差，支持 IE9+ 和现代浏览器
  - 浏览器渲染 SVG 的性能一般，还不如 png

### 实践

- 引入解压文件中的 `iconfont.js`

```html
<script src="iconfont.js" defer></script>
```

- 加入通用 CSS 代码

```css
.icon {
	width: 40px;
	height: 40px;
	vertical-align: -0.15em;
	fill: currentColor;
	overflow: hidden;
}
```

- 使用 `SVG` 引用图标，添加通用类 `icon`

```html
<svg class="icon icon-earrings" aria-hidden="true">
  <use xlink:href="#icon-Icon_earrings"></use>
</svg>
```

::: warning
更改 SVG 图标颜色的方法：
- 更改 SVG 的 fill 属性；
- 删除 SVG 的 fill 属性，在 CSS 中设置 color，并把 fill 设置为 currentColor：
```css
.icon {
  fill: currentColor;
  color: darkblue;
}
```
:::

### 封装组件

::: code-tabs
@tab IconSvg.vue
```vue
<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  iconClass: {
    type: String,
    required: true,
  },
})

const iconName = computed(() => `#icon-${props.iconClass}`)
</script>

<style scoped>
.icon {
  width: 2em;
  height: 2em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
```

@tab MainView.vue
```vue
<template>
  <IconSvg icon-class="guanbi" />
  <IconSvg icon-class="Icon_freckle" />
</template>

<script setup>
import IconSvg from '@/components/IconSvg'
</script>
```
:::

## svg sprite

> Reference: 
> - [svg sprite](https://juejin.cn/post/6844903517564436493#heading-7)
> - [svg sprite basic](https://www.zhangxinxu.com/wordpress/2014/07/introduce-svg-sprite-technology/)
> - [svg-sprite-loader](https://github.com/JetBrains/svg-sprite-loader)
> - [svgo-loader](https://github.com/svg/svgo-loader)

### iconfont 的缺点

- svg 包含在 Iconfont 网站生成的 `iconfont.js` 文件中，如果新增一个 svg 文件，就需要把这个 svg 文件上传到 iconfont 官网并和其他 svg 图片放到同一个项目库中，然后根据该项目库重新生成 `iconfont.js` 文件，操作比较麻烦。
- 无法按需加载，`iconfont.js` 包含未使用的 svg 图标。

### 生成

- 使用 `svg-sprite-loader` 生成 svg sprite，解决 iconfont 的缺点。

::: code-tabs
@tab webpack.config.js
```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              symbolId: 'icon-[name]',
            },
          },
        ],
        // 为了让作为**图标**的 svg 与作为**图片**的 svg 区分开，需要配置 `include` 和 `exclude`
        include: resolve(process.cwd(), 'src/icon'),
      },
    ],
  },
}
```

@tab MainView.vue
```vue
<script setup lang="ts">
import '@/icon/svg/bulb.svg'
import '@/icon/svg/mask.svg'
</script>

<template>
  <svg aria-hidden="true">
    <use xlink:href="#icon-bulb"></use>
  </svg>
  <svg aria-hidden="true">
    <use xlink:href="#icon-mask"></use>
  </svg>
</template>
```
:::

![生成 svg sprite 并使用 svg 图标](./_images/svg-sprite-loader.png =x300)

### 自动导入

- 使用 webpack 的 `require.context` 自动导入指定文件夹下的所有 svg 图标。

::: code-tabs
@tab entry.js
```js
import './index.js'
```

@tab index.js
```js
const requireContext = require.context('./svg', false, /\.svg$/)

function requireAll(requireContext) {
  requireContext.keys().map(requireContext)
}

requireAll(requireContext)
```
:::

- 实现自动导入后使用 svg 图标时不需要手动导入图标。

```vue
<script setup lang="ts">
// 不需要手动导入图标
// import '@/icon/svg/bulb.svg'
</script>

<template>
  <svg
    aria-hidden="true"
    class="icon"
  >
    <use xlink:href="#icon-bulb"></use>
  </svg>
</template>
```

### 优化

- 使用 `svgo-loader` 优化 svg，例如删除注释，优化 path 的值等。

```js {13}
module.exports = {
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              symbolId: 'icon-[name]',
            },
          },
          'svgo-loader',
        ],
        include: resolve(process.cwd(), 'src/icon'),
      },
    ],
  },
}
```

![优化前后的对比](./_images/svgo-loader.png =x250)
