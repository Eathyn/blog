---
date: 2023-06-17
category: JavaScript
---

# For Loop Comparison

## for...in

### 概念

- 遍历对象的所有可枚举(enumerable)属性
- 包括继承的可枚举属性
- 不包括 symbol 属性

### 代码

```js
const o1 = { a: 1 }
const c = Symbol('c')
const o2 = Object.create(o1, {
  b: { value: 2, enumerable: true },
  [c]: { value: 3, enumerable: true }
})

for (const prop in o2) {
  console.log(prop) // b, a
}
```

## for...of

### 概念

- 遍历可迭代对象(iterable)的所有属性值
- 可枚举对象: 定义了 `[Symbol.iterator]` 属性的对象

### 代码

```js
const arr = [1, 2, 3, 4, 5]
for (const value of arr) {
  console.log(value) // 1, 2, 3, 4, 5
}
```

## for await...of

### 概念

- 遍历可迭代的同步或异步对象的所有属性值

### 代码

```js
const list = [
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3),
]

;(async function fn() {
  for await (const val of list) {
    console.log(val) // 1, 2, 3
  }
})()
```

## Refs

- [for...in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)
- [for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
- [for await...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of)
