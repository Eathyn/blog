---
date: 2022-02-15
category: JavaScript
tag: closure
---

# Closure

## 定义

- 闭包是将函数和函数外部的词法环境绑定在一起。因此函数可以访问到外层词法环境的变量。

- 例子：函数 `fn` 可以访问到外部词法环境（即全局作用域）的变量 `a`。

```js
let a = 1

function fn() {
  console.log(a)
}

fn() // 1
```

- 例子：函数 `fn` 可以访问到外部词法环境（即 `outer` 函数作用域）的变量 `a`。

```js
function outer() {
  let a = 1

  function fn() {
    console.log(a)
  }

  fn()
}

outer() // 1
```

- 例子：函数 `fn` 可以访问到外部词法环境（即块作用域）的变量 `a`。

```js
{
  let a = 1

  function fn() {
    console.log(a)
  }

  fn() // 1
}
```

## 背景

- 引入闭包的特性是为了代码复用。如果 JavaScript 不存在闭包这个特性（即函数无法直接访问外层词法环境的变量），那么可能会导致开发者需要额外传递很多参数。

_利用闭包，开发者不需要传递参数_

```js
let a = 1
let b = 2
let c = 3

function fn() {
  console.log(a)
  console.log(b)
  console.log(c)
}

fn() // 1 2 3
```

_假设 JavaScript 不存在闭包，开发者需要手动地把外部词法环境的变量当作参数传递给函数_

```js
let a = 1
let b = 2
let c = 3

function fn(first, second, third) {
  console.log(first)
  console.log(second)
  console.log(third)
}

fn(a, b, c) // 1 2 3
```

- JavaScript 中作用域的叫做词法作用域（lexical scope）

Q: 嵌套的块作用域是闭包吗

```js
{
  let a = 1
  {
    console.log(a)
  }
}
```

## Refs

- [lexical environment and closure](https://javascript.info/closure)
- [how do javascript closures work](https://stackoverflow.com/a/111111/9863318)
- [MDN: closure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
