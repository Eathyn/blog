---
date: 2020-09-24
category: CSS
tag: 
- layout
- multi-column
---

# Layout: Multi-Column

## Two Columns Layout

### FlexBox

- `flex: 1` : 右列自适应
- `align-items: flex-start` : 避免左右列高度一致

::: normal-demo
```html
<div class="container">
  <div class="left"></div>
  <div class="right"></div>
</div>
```

```css
.container, .left, .right {
	border: 1px solid #000;
	margin: 10px;
}

.container {
	display: flex;
	align-items: flex-start; /* 避免左右列高度一致 */
}

.left {
	width: 200px; /* 左列等宽 */
	height: 300px;
}

.right {
	flex: 1; /* 右列自适应 */
	height: 200px;
}
```
:::

## Three Columns Layout

### FlexBox

- 左右两列固定 中间自适应

::: normal-demo
```html
<div class="container">
  <div class="left"></div>
  <div class="middle"></div>
  <div class="right"></div>
</div>
```

```css
.container, .left, .right, .middle {
	border: 1px solid #000;
}

.container {
	display: flex;
	justify-content: space-between;
	padding: 10px;
	gap: 0 10px;
}

.left {
	width: 200px; /* 左列等宽 */
	height: 300px;
}

.middle {
	width: 100%;
}

.right {
	width: 250px; /* 右列等宽 */
}
```
:::

## Refs

- [Two or Three Columns Layouts](https://vue3js.cn/interview/css/column_layout.html)
- [Popular Layouts and Patterns](https://csslayout.io/)
