---
date: 2021-12-21
category: implement
tag: throttle
---

# Throttle 节流

## 概念

间隔一段时间触发一次时间，用于减少事件的频率

## 基础版本

```js
const container = document.querySelector('.container')

for (let i = 0; i < 100; i++) {
  const item = document.createElement('div')
  item.textContent = `${i}`
  item.setAttribute('class', 'item')
  container.append(item)
}

window.addEventListener('scroll', throttle(log, 500))

function throttle(fn, wait) {
  let timerId = null

  return function() {
    if (timerId) {
      return
    }
    timerId = setTimeout(function() {
      fn()
      timerId = null
    }, wait)
  }
}

function log() {
  console.log(this)
}
```

## 优化

支持传递参数，统一 `this`。详情参见实现防抖的文章

## 最终版本

```js
const container = document.querySelector('.container')

for (let i = 0; i < 100; i++) {
  const item = document.createElement('div')
  item.textContent = `${i}`
  item.setAttribute('class', 'item')
  container.append(item)
}

const throttleScrollHandler = throttle(log, 500)
const obj = { fn: throttleScrollHandler }
window.addEventListener('scroll', () => obj.fn('Eathyn', 25))

function throttle(fn, wait) {
  let timerId = null

  return function(...args) {
    console.log('this in inner: ', this) // obj
    const that = this
    if (timerId) {
      return
    }
    timerId = setTimeout(function() {
      fn.call(that, ...args)
      timerId = null
    }, wait)
  }
}

function log(name, age) {
  console.log('this in setTimeout callback: ', this) // obj
  console.log(name)
  console.log(age)
}
```
