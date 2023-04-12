---
date: 2022-02-27
category: JavaScript
tag: this keyword
---

# this Keyword

## 全局环境

全局环境下，即不在任何函数中。`this` 为 `Window`

```js
console.log(this) // Window
```

## 直接调用

函数定义在全局环境中，且直接调用函数。`this` 在严格模式下为 `undefined`，在非严格模式下为 `Window`

```js
function fn() {
  console.log(this)
}
// 非严格模式下：window | 严格模式下：undefined
fn()
```

## 隐式绑定

构造函数和类：`this` 为实例

```js
// 构造函数: this 是构造函数实例
function Person() {
  console.log(this)
}
new Person() // Person instance

// 类: this 是类实例
class Student {
  constructor() {
    console.log(this)
  }
}
new Student() // Student instance
```

多个对象: `this` 为距离函数最近的对象

```js
function fn() {
  console.log(this.n)
}
const obj1 = {
  n: 1,
}
const obj2 = {
  n: 2,
  fn,
}
obj1.o = obj2
obj1.o.fn() // 2
```

## 隐式绑定丢失

函数作为参数导致的 `this` 丢失

```js
// 函数作为参数传递后 `this` 丢失，指向 `Window`
const obj = {
  fn1() {
    console.log(this)
  }
}
function fn2(callback) {
  callback()
}
fn2(obj.fn1) // window
```

变量赋值导致的 `this` 丢失

```js
const obj = {
  fn() {
    console.log(this)
  }
}
const fn = obj.fn
fn() // window
```

## 显式绑定

`call` / `apply` / `bind` 改变 `this`

```js
function fn() {
  console.log(this.n)
}
const obj = { n: 1 }
fn.call(obj) // 1
fn.apply(obj) // 1
fn.bind(obj)() // 1
```

## 箭头函数

`this` 取决于外层作用域

```js
const fn1 = () => {
  console.log(this)
}
fn1() // window

const obj = {
  fn2() {
    const fn3 = () => {
      console.log(this)
    }
    fn3()
  }
}
obj.fn2() // obj
```

## 事件

`this` 为触发事件的元素

```js
const div = document.querySelector('div')
div.addEventListener('click', function() {
  console.log(this) // div element
})
```

## 定时器

- `setTimeout` / `setInterval` 的函数的 `this` 值为全局对象

```js
const o1 = {
  fn() {
    setTimeout(function() {
      console.log(this)
    })
  }
}
o1.fn() // this = window
```

## 优先级

- 箭头函数 > call/apply/bind > 其他

```js
const arrowFn = () => this
const o1 = {}

console.log(arrowFn.call(o1) === o1) // false
console.log(arrowFn.call(o1) === window) // true
```

## Refs

- [MDN: this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
- [this Keyword in JavaScript](https://en.wikipedia.org/wiki/This_(computer_programming)#JavaScript)
