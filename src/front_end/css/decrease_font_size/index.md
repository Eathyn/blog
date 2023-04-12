---
date: 2020-11-21
category: CSS
tag: decrease font size
---

# Decrease Font Size

## Reason

- The minimum font size is 12px in Chrome.
- The default font size is 16px in Chrome.
- Using `zoom` or `transform: scale` to decrease font size.

```html
<div class="text">hello world</div>
```

```css
.text {
	font-size: 10px; /* the actual font size is 12px */
}
```

## Zoom

```html
<div class="text">hello world</div>
```

```css
.text {
	font-size: 20px;
	zoom: 0.5; /* 20px * 0.5 = 10px */
}
```

## Transform

```html
<div class="text">hello world</div>
```

```css
.text {
	font-size: 20px;
	transform: scale(0.5);
	transform-origin: left top;
}
```

## Refs

- [Decrease Font Size](https://vue3js.cn/interview/css/less_12px.html)
