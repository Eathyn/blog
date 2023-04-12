---
date: 2022-03-12
category: JavaScript
tag: arrow function
---

# Arrow Function

## `this` / `arguments` / `super`

- `this` / `arguments` / `super` 取决于最接近箭头函数的词法上下文

_this_

```js
const f1 = () => {
  console.log(this === globalThis) // true
}
f1()

const obj = {
  a: 1,
  f2() {
    return () => this === obj
  },
}
console.log(obj.f2()()) // true
```

_arguments_

```js
const obj = {
  f1() {
    return () => {
      console.log(arguments)
    }
  }
}

obj.f1(1, 2, 3)() // Arguments [1, 2, 3]
```

## `new.target`

- 无法访问 `new.target`

```js
function f1() {
  console.log(new.target)
}

f1()
new f1()

const f2 = () => {
  console.log(new.target)
}

f2() // Uncaught SyntaxError: new.target expression is not allowed here
new f2() // Uncaught SyntaxError: new.target expression is not allowed here
```

## `call` / `apply` / `bind`

- `call` / `apply` / `bind` 对箭头函数无效

```js
const fn = () => {
  console.log(this)
}

const obj = {}

fn.call(obj) // globalThis
fn.apply(obj) // globalThis
fn.bind(obj)() // globalThis
```

## constructor

- 箭头函数不能作为构造函数

```js
const Person = (name, age) => {
  this.name = name
  this.age = age
}

const p1 = new Person('eathyn', 25) // Uncaught TypeError: Person is not a constructor
```

## `prototype`

- 箭头函数没有 `prototype` 属性

```js
const f1 = function() {}
const f2 = () => {}

console.log(f1.prototype) // {constructor: ƒ}
console.log(f2.prototype) // undefined
```

## `yield`

箭头函数不能使用 `yield`

to be continued: iterator and generator

## Usage

return object

```js
// bad
const getObj1 = () => {
  return {
    a: 1,
  }
}
console.log(getObj1())

// good
const getObj2 = () => ({ a: 1 })
console.log(getObj2())
```

## Refs

- [Arrow Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
