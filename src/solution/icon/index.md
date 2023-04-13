---
date: 2021-12-07
category: solution
tag: icon
---

# 图标

## 精灵图 Image Sprites

- 原理：将多张图片组合成一张图片，通过 `background-position` 定位到各个小图片
- 原因：减少 HTTP 请求（如果使用 HTTP/2，那么多请求也不会有很大的性能开销）

_代码 ([地址](https://github.com/Eathyn/icon-solutions/tree/main/image-sprites))：_

```html
<div id="home"></div>
<div id="left"></div>
<div id="right"></div>
```

```css
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

## Iconfont

### unicode

- `unicode` 的特点是兼容性最好，但不支持多色图标

_代码 ([地址](https://github.com/Eathyn/icon-solutions/tree/main/iconfont/unicode))_：

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

### font-class

- `font-class` 可以解决 `unicode` 语义不直观，不能一眼看出引用了哪个图标的问题

_代码 ([地址](https://github.com/Eathyn/icon-solutions/tree/main/iconfont/font-class))_：

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

.icon-Icon_eyebrows:before {
	content: "\e603";
}

.icon-Icon_eyes:before {
	content: "\e604";
}

.icon-Icon_clothes:before {
	content: "\e609";
}

.icon-Icon_freckle:before {
	content: "\e60a";
}
```

- 在 `html` 中添加这些伪元素类就可以显示图标，通过类名就能快速识别引用了哪些图标

```html
<span class="iconfont icon-Icon_earrings"></span>
<span class="iconfont icon-Icon_eyebrows"></span>
```

### symbol

- 特点：支持多色图标；矢量图形，放大不会模糊

- 步骤如下（[代码地址](https://github.com/Eathyn/icon-solutions/tree/main/iconfont/symbol)）：

第一步：引入解压文件中的 `iconfont.js`

```html
<script src="iconfont.js" defer></script>
```

第二步：加入通用 CSS 代码

```css
.icon {
	width: 40px;
	height: 40px;
	vertical-align: -0.15em;
	fill: currentColor;
	overflow: hidden;
}
```

第三步：使用 `SVG` 引用图标，添加通用类 `icon`

```html
<svg class="icon icon-earrings" aria-hidden="true">
  <use xlink:href="#icon-Icon_earrings"></use>
</svg>
```

## 封装 icon 组件



## Refs

- [图标发展史](https://juejin.cn/post/6844903517564436493)
- [Image Sprites](https://www.tutorialrepublic.com/css-tutorial/css-sprites.php)
