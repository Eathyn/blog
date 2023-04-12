---
date: 2021-12-15
category: implement
tag:
- debounce
---

# Debounce 防抖

## 概念

如果事件在特定的时间内再次被触发，就取消将要执行的定时器中的函数，重新开始倒计时。如果事件在特定的时间内没有再次被触发，就执行定时器中的函数

## 基础版本

```js
function debounce(fn, wait) {
  let timerId = null
  
  return function() {
    if (timerId) {
      clearTimeout(timerId)
    }
    timerId = setTimeout(function() {
      fn()
      timerId = null
    }, wait)
  }
}
```

## 传递参数

为回调函数 `fn` 传递参数

```js
const input = document.querySelector('.the-input')
const innerFn = debounce(logInfo, 500)
input.addEventListener('input', () => innerFn('Eathyn', 25))

function logInfo(name, age) {
  console.log(`${name}-${age}`)
}

function debounce(fn, wait) {
  let timerId = null

  // 剩余参数接收所有参数
  return function innerFn(...args) {
    if (timerId) {
      clearTimeout(timerId)
    }
    timerId = setTimeout(function() {
      // 将参数作为回调函数的实参
      fn(...args)
      timerId = null
    }, wait)
  }
}
```

## 改变 `this` 关键字

如果没有使用 `apply` 改变 `this`，那么 `fn` 的 `this` 永远都是 `window`（因为在 `setTimeout` 中）不会与 `inner1` 保持一致

```js
const input = document.querySelector('.the-input')
const inner = debounce(logInfo, 500)
const obj = { inner }
input.addEventListener('input', () => obj.inner())

function logInfo() {
  console.log('this in fn: ', this) // Window
}

function debounce(fn, wait) {
  let timerId = null

  return function inner() {
    console.log('this in inner1: ', this) // obj
    const that = this
    if (timerId) {
      clearTimeout(timerId)
    }
    timerId = setTimeout(function () {
      fn()
      timerId = null
    }, wait)
  }
}
```

使用 `apply` 或 `call` 可以改变 `this`，`fn` 的 `this` 就可以与 `inner` 的 `this` 保持一致

```js
const input = document.querySelector('.the-input')
const inner = debounce(logInfo, 500)
const obj = { inner }
input.addEventListener('input', () => obj.inner())

function logInfo() {
  console.log('this in fn: ', this) // obj
}

function debounce(fn, wait) {
  let timerId = null

  return function inner() {
    console.log('this in inner1: ', this) // obj
    const that = this
    if (timerId) {
      clearTimeout(timerId)
    }
    timerId = setTimeout(function () {
      fn.apply(that)
      timerId = null
    }, wait)
  }
}
```

## 最终版本

```js
const input = document.querySelector('.the-input')
const inner = debounce(logInfo, 500)
const obj = { inner }
input.addEventListener('input', () => obj.inner('Eathyn', 25))

function logInfo(name, age) {
  console.log('this in fn: ', this) // obj
  console.log(name) // Eathyn
  console.log(age) // 25
}

function debounce(fn, wait) {
  let timerId = null

  return function inner(...args) {
    const that = this
    console.log('this in inner: ', this) // obj
    if (timerId) {
      clearTimeout(timerId)
    }
    timerId = setTimeout(function () {
      fn.call(that, ...args)
      timerId = null
    }, wait)
  }
}
```

## Refs

- [implement debounce](https://www.cnblogs.com/echolun/p/16199299.html)
