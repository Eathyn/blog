---
date: 2020-08-11
category: CSS
tag: unit
---

# Units

## px

- absolute length unit
- 1px = 1/96 th of 1 in

## em

- Relative to font size of the **parent**, in the case of typographical properties like `font-size`.

```html
<div class="container">
  <div class="text">hello</div>
</div>
```

```css
.container {
	font-size: 20px;
}

.text {
	font-size: 2em; /* 2 * 20px = 40px */
}
```

- Relative to font size of the **element itself**, in the case of other properties like `width`.

```html
<div class="container">
  <div class="text">hello</div>
</div>
```

```css
.container {
	font-size: 20px;
}

.text {
	font-size: 30px;
	width: 1em; /* 30px * 1 = 30px */
}
```

## rem

- Relative to font size of the root element.

```html
<div class="text">hello</div>
```

```css
html {
	font-size: 20px;
}

.text {
	width: 2rem; /* 2 * 20px = 40px */
}
```

## %

- Relative to parent object.

```html
<div class="parent">
  <div class="child">hello</div>
</div>
```

```css
.parent {
	width: 100px;
	font-size: 20px;
}

.child {
	width: 200%; /* 100px * 2 = 200px */
	font-size: 200%; /* 20 * 2 = 40px */
}
```

## vw

- 1% of the viewport's width.

## vh

- 1% of the viewport's height.

## vmin

- 1% of the viewport's smaller dimension.

## vmax

- 1% of the viewport's smaller dimension.

## Refs

- [Units](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#lengths)
