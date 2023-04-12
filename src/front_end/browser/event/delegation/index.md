---
date: 2021-02-09
category: Browser
tag:
- event
- event delegation
---

# Event Delegation

## Reason

- 如果多个子元素需要相同的事件操作，我们不需要对每个子元素都定义事件监听，而是利用事件冒泡机制，对子元素的父元素定义事件监听。
- 事件捕获可以减少重复编写代码

## Example

_index.html_
```html
<table>
  <tr>
    <td>A</td>
    <td>B</td>
  </tr>
  <tr>
    <td>C</td>
    <td>C</td>
  </tr>
</table>
```

_main.css_
```css
td {
  padding: 40px;
  border: 1px solid #000;
}

.highlight {
  background-color: #9bb3d9;
}
```

_index.js_
```js
const table = document.querySelector('table')
let selectedTd = null

table.addEventListener('click', (evt) => {
  const target = evt.target
  if (target.tagName !== 'TD') {
    return
  }
  highlight(target)
})

function highlight(td) {
  if (selectedTd) {
    selectedTd.classList.remove('highlight')
  }
  selectedTd = td
  selectedTd.classList.add('highlight')
}
```

## Refs

- [Event Delegation](https://javascript.info/event-delegation)
