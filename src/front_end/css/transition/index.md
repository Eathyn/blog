---
date: 2021-01-15
category: CSS
tag: transition
---

# Transition

## Reason

- Instead of having property changes take effect immediately, you can cause the changes in a property to take place over a period of time.

## Properties

- `transition-property`: which properties to animate
- `transition-duration`: how long the transition will last
- `transition-timing-function`: how the transition will run
- `transition-delay`: when the animation will start

## Single Property

_index.html_

```html
<div class="item"></div>
```

_main.css_

```css
.item {
	width: 200px;
	height: 200px;
	border: 1px solid #000;
	transition: background-color 1s;
}

.item:hover {
	background-color: lightpink;
}
```

## Multiple Properties

_index.html_

```html
<div class="item"></div>
```

_main.css_

```css
.item {
	width: 200px;
	height: 200px;
	border: 1px solid #000;
	transition: background-color 1s, width 1s, height 1s;
}

.item:hover {
	background-color: lightpink;
	width: 300px;
	height: 300px;
}
```

## Events

- `transitionrun`: the beginning of a transition before any delay
- `transitionstart`: the beginning of a transition after any delay
- `transitionend`: the end of a transition

_index.html_

```html
<div class="item"></div>
```

_main.css_

```css
.item {
	width: 100px;
	height: 100px;
	border: 1px solid #000;
	transition: width 1s 1s, height 1s 1s, background-color 1s 1s;
}

.item:hover {
	width: 200px;
	height: 200px;
	background-color: pink;
}
```

```js
const item = document.querySelector('.item')

item.addEventListener('transitionrun', () => {
  console.log('run')
})

item.addEventListener('transitionstart', () => {
  console.log('start')
})

item.addEventListener('transitionend', () => {
  console.log('end')
})
```
