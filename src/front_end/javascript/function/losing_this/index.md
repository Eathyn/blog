---
date: 2022-03-20
category: JavaScript
tag: losing this keyword
---

# Losing `this` Keyword

`this` 由**调用**函数的上下文决定，不是由**定义**函数的上下文决定

```js
function fn() {
  console.log(this)
}

fn() // Window

const obj = {
  fn,
}
obj.fn() // obj

const instance = new fn() // instance
```

因为 `this` 由**调用**函数的上下文决定，所以存在 `this` 丢失的情况

```js
const user = {
  name: 'Eathyn',
  getName() {
    console.log(this.name)
  },
}

// this 丢失
function fn1(callback) {
  callback()
}
fn1(user.getName) // undefined

// this 丢失
const fn2 = user.getName
fn2() // undefined
```

`this` 丢失的解决方法

```js
const user = {
  name: 'Eathyn',
  getName() {
    console.log(this.name)
  },
}

// solution-1: a wrapping function
function fn3() {
  user.getName()
}
fn3() // Eathyn

// solution-2: bind
const boundGetName = user.getName.bind(user)
function fn4(callback) {
  callback()
}
fn4(boundGetName) // Eathyn
```

## Refs

- [Losing this Keyword](https://stackoverflow.com/a/20279485/9863318)
- [Losing this Keyword Solutions](https://javascript.info/bind)
