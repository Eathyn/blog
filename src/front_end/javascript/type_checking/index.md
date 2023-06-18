---
date: 2023-06-18
category: JavaScript
---

# Type-Checking Methods

## typeof

### 适用范围

- 检测原始值类型

### 返回值

```js
console.log(typeof undefined) // undefined
console.log(typeof true) // boolean
console.log(typeof 1) // number
console.log(typeof Symbol()) // symbol
console.log(typeof 1n) // bigint
console.log(typeof 'hello') // string
// 特殊
console.log(typeof null) // object
console.log(typeof function() {}) // function
```

## instanceof

### 适用范围

- 检测对象 (判断构造函数 `prototype` 属性指向的对象是否出现在实例的原型链上)

### 算法

1. 判断对象`[[prototype]]` 属性指向的对象是否等于构造函数 `prototype` 属性指向的对象
2. 如果 `1` 不成立，则判断对象 `[[prototype]]` 属性的 `[[prototype]]` 属性指向的对象是否等于构造函数 `prototype` 属性指向的对象
3. 沿着原型链向上类推，直到判断成立或遇到 `null`

_例子_

```js
// 判断 arr instanceof Object
console.log(arr.__proto__ === Object.prototype) // false
console.log(arr.__proto__.__proto__ === Object.prototype) // true
```

![instanceof](./_image/instanceof.png =x400)

## Object.prototype.toString

### 适用范围

- 原始值类型
- 内置对象类型
- 拥有 Symbol.toStringTag 的对象

### 例子

_原始值类型_

```js
const a = 1
const b = true
const c = null
const d = undefined
const e = Symbol()
const f = 100n
const g = ''

console.log(objectToString.call(a)) // [object Number]
console.log(objectToString.call(b)) // [object Boolean]
console.log(objectToString.call(c)) // [object Null]
console.log(objectToString.call(d)) // [object Undefined]
console.log(objectToString.call(e)) // [object Symbol]
console.log(objectToString.call(f)) // [object BigInt]
console.log(objectToString.call(g)) // [object BigInt]
```

_内置对象类型_

```js
const obj = {}
const arr = []

console.log(objectToString.call(obj)) // [object Object]
console.log(objectToString.call(arr)) // [object Array]
```

_拥有 Symbol.toStringTag 的对象_

```js
const user = {
  [Symbol.toStringTag]: 'User',
}

console.log(objectToString.call(user)) // [object User]
```

## Refs

- [type checking methods in JavaScript](https://javascript.info/instanceof)
- [the reason why typeof null returns object type](https://2ality.com/2013/10/typeof-null.html)
