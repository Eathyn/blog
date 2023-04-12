---
date: 2021-02-03
category: Browser
tag: event
---

# Event Basics

## onclick

- `onclick` 只能赋值一次
- 删除事件监听

```js
ele.onclick = null
```

## addEventListener

- 可以添加多个 `addEventListener`

```js
const btn = document.querySelector('.btn')
btn.addEventListener('click', () => {
  console.log('one')
})
btn.addEventListener('click', () => {
  console.log('two')
})
```

- `addEventListener` 第二个参数可以是对象

```js
const obj = {
  handleEvent(evt) {
    console.log('run')
  }
}
const btnAdd = document.querySelector('.add')
btnAdd.addEventListener('click', obj)
```

## removeEventListener

- 删除的事件监听函数必须是同一个
