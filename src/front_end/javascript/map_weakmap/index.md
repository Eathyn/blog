---
date: 2023-06-17
category: JavaScript
---

# Map and WeakMap

## 解决的问题

### Map

_解决 Object 的缺点_

- Map 的键可以为任意数据类型; Object 的键必须为字符串或 Symbol

- Map 的迭代顺序和插入顺序相同; Object 的键会重新排序

```js
const obj = {}
obj['23'] = 'A'
obj['12'] = 'B'
for (const key in obj) {
  console.log(key) // 12, 23
}

const map = new Map()
map.set('23', 'A')
map.set('12', 'B')
for (const key of map.keys()) {
  console.log(key) // 23, 12
}
```

- Map 通过 `size` 属性可以直接获取键值对的数量; Object 必须手写循环或通过 `Object.keys().length` 才能获取

```js
// Map.prototype.size
const map = new Map()
map.set(true, 1)
map.set(100n, 2)
console.log(map.size) // 2

const obj = {
  a: 1,
  b: 2,
}

// for 循环
let length = 0
for (const key in obj) {
  length++
}
console.log(length) // 2

// Object.keys().length
console.log(Object.keys(obj).length)
```

- Map 是可迭代对象，可以直接使用 `for...of`; Object 不是

```js
const map = new Map()
map.set(false, 1)
map.set(() => {}, 2)
for (const value of map) {
  console.log(value) // [false, 1], [ƒ, 2]
}

const obj = {
  a: 1,
  b: 2,
}
for (const value of obj) {
  console.log(value) // error: obj is not iterable
}
```

- Map 在频繁地添加和删除键值对时性能比 Object 更好

### WeakMap

- 解决 Map 可能会导致内存泄露的问题

## 原理

与 [Set 和 WeakSet](../set_weakset/index.md) 类似，不同的是在 `Map` 和 `WeakMap` 中，如果键被垃圾回收，那么键对应的值也会被垃圾回收

## Refs

- [Differences between Map and Object]()
