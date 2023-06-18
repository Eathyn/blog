---
date: 2023-06-17
category: JavaScript
---

# Variable

## Store

- 基本数据类型存储在栈中，复制后不会相互影响

![primitives](./_image/primitives.png =x250)

- 对象类型存储在堆中，栈中保存的是指向堆内存的地址，复制后会相互影响

![object](./_image/object.png =x250)

## `var`, `let` and `const`

### var

- variables declared in global environment will be properties of global object (eg: window in browser, global in Node).

```js
var a = 1
console.log(window.a) // 1
```

- variables will be hoisting.

```js
console.log(a) // undefined
var a = 1
console.log(a) // 1

// equal to:
var a
console.log(a) // undefined
a = 1
console.log(a) // 1
```

- can't form the block scope

```js
{
  var a = 1
}
console.log(a) // 1
```

- we can declare a variable multiple times.

```js
var a = 1
var a = 2
console.log(a) // 2
```

### let

- variable will create code block.

```js
{
  let a = 1
}
console.log(a) // error: a is not defined
```

### const

- The variable must be assigned a value.

```js
// no
const a // Missing initializer in const declaration

// yes
const b = 1
```

- The value of variable can not be changed after initialized.

```js
const a = 1
a = 2 // Assignment to constant variable.

const b = { c: 1 }
b = {} // Assignment to constant variable.

b.c = 2 // work
```

### Summary

|                     | var | let | const |
|---------------------|-----|-----|-------|
| variable hoisting   | yes | no  | no    |
| temporary dead zone | no  | yes | yes   |
| block scope         | no  | yes | yes   |
| declare repeatedly  | yes | no  | no    |
| change value        | yes | yes | no    |

## Refs

- [Variable Store](https://www.freecodecamp.org/news/primitive-vs-reference-data-types-in-javascript/)
