---
date: 2020-09-13
category: CSS
tag: centering
---

# Centering

## Horizontally

### inline or inline-* element

1. 将内联（inline）元素放在块（block）元素里。
2. 对块元素使用 `text-align: center`。

::: normal-demo
```html {3,7}
<div class="item">hello</div>

<nav class="nav">
  <a href="#">one</a>
  <a href="#">two</a>
  <a href="#">three</a>
</nav>
```

```css {3}
.item, .nav {
	border: 1px solid #000;
	text-align: center;
	margin-bottom: 10px;
}
```
:::

::: tip
`inline`, `inline-block`, `inline-table`, `inline-flex` 都适用这个方法。
:::

### one block-level element

- 对块元素使用 `margin-left: auto; margin-right: auto`。

::: normal-demo
```html
<div class="item"></div>
```

```css {5-6}
.item {
	width: 100px;
	height: 100px;
	border: 1px solid #000;
  margin-left: auto;
  margin-right: auto;
}
```
:::

### multiple block-level elements

#### in one row

- 对块级元素的父元素使用 `display: flex` + `justify-content: center`。

::: normal-demo
```html {1}
<div class="container">
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
</div>
```

```css {2,3}
.container {
	display: flex;
	justify-content: center;
	border: 1px solid #000;
	padding: 20px;
	margin: 10px;
}

.item {
	width: 100px;
	height: 100px;
	border: 1px solid #000;
}
```
:::

- 对块级元素使用 `display: inline-block`，对块级元素的父元素使用 `text-align: center`。

```html {1}
<div class="container">
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
</div>
```

```css {5,9}
.container {
	border: 1px solid #000;
	padding: 20px;
	margin: 10px;
	text-align: center;
}

.item {
	display: inline-block;
	width: 100px;
	height: 100px;
	border: 1px solid #000;
}
```

#### in multiple row

- 对块级元素使用 `margin-left: auto` + `margin-right: auto`

::: normal-demo
```html
<div class="container">
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
</div>
```

```css
.container {
	border: 1px solid #000;
	padding: 20px;
	margin: 10px;
}

.item {
	width: 100px;
	height: 100px;
	border: 1px solid #000;
	margin: 0 auto;
}
```
:::

## Vertically

### inline or inline-* element

#### single line

- 将 `padding-top` 和 `padding-bottom` 设置为相同的值。

::: normal-demo
```html
<div class="container">
  <a href="#" class="item">this is a link</a>
</div>
```

```css
.container {
	box-sizing: border-box;
	padding: 20px;
	border: 1px solid red;
	margin: 20px;
}

.item {
	border: 1px solid #000;
	padding: 30px 0;
	margin: 10px;
}
```
:::

- 将 `height` 和 `line-height` 设置为相同的值。

::: normal-demo
```html
<div class="item">hello</div>
```

```css
.item {
	height: 100px;
	line-height: 100px;
	border: 1px solid #000;
}
```
:::

#### multiple lines

- making values of `padding-top` and `padding-bottom` to be equal.

- use `display` + `flex-direction` + `justify-content` 

::: normal-demo
```html
  <div class="item">I'm vertically centered multiple lines of text in a flexbox container.</div>
```

```css
.item {
	height: 200px;
	width: 200px;
	border: 1px solid #000;
	display: flex;
	flex-direction: column;
	justify-content: center;
}
```
:::

- use `display` + `vertical-align`

::: normal-demo
```html
<div class="container">
  <div class="item">I'm vertically centered multiple lines of text in a flexbox container.</div>
</div>
```

```css
.container {
	display: table;
	width: 200px;
	height: 200px;
	border: 1px solid #000;
}

.item {
	display: table-cell;
	vertical-align: middle;
}
```
:::

- employing the “ghost element” technique, in which a full-height pseudo-element is placed inside the container and the text is vertically aligned with that.

::: normal-demo
```html
<div class="container">
  <div class="item">I'm vertically centered multiple lines of text in a flexbox container.</div>
</div>
```

```css
.container {
	height: 200px;
	border: 1px solid #000;
	position: relative;
}

.container::before {
	content: " ";
	display: inline-block;
	height: 100%;
	width: 1%;
	vertical-align: middle;
}

.item {
	display: inline-block;
	vertical-align: middle;
}
```
:::

### block-level element

#### know the height of element

- absolute positioning + negative margin

::: normal-demo
```html
<div class="container">
  <div class="item">I'm vertically centered multiple lines of text in a flexbox container.</div>
</div>
```

```css
.container {
	height: 200px;
	padding: 10px;
	border: 1px solid #000;
	position: relative;
}

.item {
	height: 50px;
	padding: 10px;
	border: 1px solid #000;
	position: absolute;
	top: 50%;
	/* account for padding and border if not using box-sizing: border-box; */
	margin-top: -36px; /* calculation: -( 25px <a half of height> + 10px <padding> + 1px <border> ) */
}
```
:::

#### do not know the height of element

- absolute positioning + transform

::: normal-demo
```html
<div class="container">
  <div class="item">I'm vertically centered multiple lines of text in a flexbox container.</div>
</div>
```

```css
.container {
	height: 200px;
	padding: 10px;
	border: 1px solid #000;
	position: relative;
}

.item {
	height: 50px;
	padding: 10px;
	border: 1px solid #000;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
}
```
:::

#### if you don't care the element stretches the height of the container

::: normal-demo
```html
<div class="container">
  <div class="item">I'm vertically centered multiple lines of text in a flexbox container.</div>
</div>
```

```css
.container {
	height: 200px;
	padding: 10px;
	border: 1px solid #000;
	display: table;
}

.item {
	height: 50px;
	padding: 10px;
	border: 1px solid #000;
	display: table-cell;
	vertical-align: middle;
}
```
:::

#### flexbox

::: normal-demo
```html
<div class="container">
  <div class="item">I'm vertically centered multiple lines of text in a flexbox container.</div>
</div>
```

```css
.container {
	height: 200px;
	padding: 10px;
	border: 1px solid #000;
	display: flex;
	align-items: center;
}

.item {
	height: 50px;
	padding: 10px;
	border: 1px solid #000;
}
```
:::

## Both Horizontally and Vertically

### element with fixed element and height

- use absolute positioning and negative margin

::: normal-demo
```html
<div class="container">
  <div class="item">I'm vertically centered multiple lines of text in a flexbox container.</div>
</div>
```

```css
.container {
	height: 200px;
	padding: 10px;
	border: 1px solid #000;
	position: relative;
}

.item {
	border: 1px solid #000;
	position: absolute;
	top: 50%;
	left: 50%;
	width: 300px;
	height: 100px;
	margin: -50px 0 0 -150px;
}
```
:::

### element without fixed element and height

- use absolute positioning and transform

::: normal-demo
```html
<div class="container">
  <div class="item">I'm vertically centered multiple lines of text in a flexbox container.</div>
</div>
```

```css
.container {
	height: 200px;
	padding: 10px;
	border: 1px solid #000;
	position: relative;
}

.item {
	border: 1px solid #000;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
```
:::

### use flexbox

::: normal-demo
```html
<div class="container">
  <div class="item">I'm vertically centered multiple lines of text in a flexbox container.</div>
</div>
```

```css
.container {
	height: 200px;
	padding: 10px;
	border: 1px solid #000;
	display: flex;
	justify-content: center;
	align-items: center;
}

.item {
	border: 1px solid #000;
}
```
:::

### use grid

::: normal-demo
```html
<div class="container">
  <div class="item">I'm vertically centered multiple lines of text in a flexbox container.</div>
</div>
```

```css
.container {
	height: 200px;
	padding: 10px;
	border: 1px solid #000;
	display: grid;
	justify-content: center;
	align-items: center;
}

.item {
	border: 1px solid #000;
}
```
:::

## Refs

- [Centering in CSS](https://css-tricks.com/centering-css-complete-guide/)
- [Centering Interview Questions](https://vue3js.cn/interview/css/center.html)
