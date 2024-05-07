---
date: 2024-05-06
---

# Full Background Image

## `background-size` property

> Ref: 
> - [`background-size` value definitions](https://developer.mozilla.org/en-US/docs/Web/CSS/background-size#values)
> - [`background-size` value examples](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_backgrounds_and_borders/Resizing_background_images)

`contain`：在容器中尽可能大地缩放图片，并且不会裁剪（crop）和拉伸（stretch）图片。如果容器比图片面积大，多出来的空间会重复这张图片。`background-repeat: no-repeat` 可以让多出来的空间不重复这张图片，让这部分空间留白。

`cover`：在保证纵横比（aspect ratio）不变的前提下，缩放图片直到填充整个容器。如果容器的比例与图片的比例不同，那么图片在水平或者垂直方向上会被裁剪。

`<horizontal_length> <vertical_length>`：在对应方向上按照指定的长度拉伸图片，可能会导致图片的纵横比发生改变。

`<horizontal_percentage> <vertical_percentage>`：在对应方向上按照指定的百分比拉伸图片，可能会导致图片的纵横比发生改变。

## Solution

> Ref: [full background image solution](https://www.webfx.com/blog/web-design/responsive-background-image/)

背景图全屏的要点：
- 包含背景图的元素及其父元素的高度设置为 `100%`；
- 使用 `background-size: cover` 将背景图铺满屏幕：

::: code-tabs
@tab index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>full background image</title>
  <link rel="stylesheet" href="./main.css">
</head>
<body>
<div class="container"></div>
</body>
</html>
```

@tab main.css
```css
/* reset */
html, body {
  margin: 0;
}

/* 包含背景图的元素及其父元素的高度设置为 `100%` */
html, body, .container {
  height: 100%;
}

/* 背景图片铺满全屏 */
.container {
  background-image: url(./background-photo.jpg);

  /* 让背景图片占满屏幕 */
  background-size: cover;

  /* 居中背景图片的位置 */
  background-position: center;

  /* 有滚动条时固定住背景图片 */
  background-attachment: fixed;

  /* 图片还没加载出来时有背景颜色可以提高用户体验 */
  background-color: #464646;
}
```
:::

> Ref: [兼容更低版本浏览器的方案](https://css-tricks.com/perfect-full-page-background-image/)

如果以上结局方案无法满足浏览器的兼容性，可以使用[其他方案](https://css-tricks.com/perfect-full-page-background-image/)。
