---
date: 2021-12-10
category: implement
tag:
  - call
  - apply
---

# `call` & `apply`

## Call

### 基本使用

- `call` 接收多个参数，第一个参数是指定函数的 `this`，第二个参数开始为函数的实参。例如在 `logInfo.call(person1, 25, 'reading')` 中，`person1` 为函数的 `this`，`25` 和 `reading` 为函数的实参。

```js
const person1 = { name: 'eathyn' }
const person2 = { name: 'tom' }

function logInfo(age, hobby) {
  console.log(this.name, age, hobby)
}

logInfo.call(person1, 25, 'reading') // eathyn 25 reading
logInfo.call(person2, 50, 'planting') // tom 50 planting
```

### 代码实现

- `call` 可以被所有函数调用，所以把 `call_` 定义到 `Function.prototype` 上。
- `call` 第二个参数开始为函数实参，它们是一个接着一个传入的，而且个数不定，所以使用剩余参数 `...args`。
- 调用函数时使用扩展语法 `thisArg[fn](...args)` 将数组转化为多个参数。

```js
Function.prototype.call_ = function(thisArg, ...args) {
  // thisArg 是指定的 this 对象，例如 `person1`
  // this 是调用 `call_` 的方法，例如 `logInfo`
  thisArg.fn = this
  thisArg.fn(...args)
}

const person1 = { name: 'eathyn' }
logInfo.call_(person1, 25, 'reading') // eathyn 25 reading
```

- 因为调用 `call` 之后不会在对象上保留这个方法，所以要把函数从对象上删除掉。

```js
Function.prototype.call_ = function(thisArg, ...args) {
  thisArg.fn = this
  thisArg.fn(...args)
  delete thisArg.fn // 把函数从对象上删除掉
}
```

- 因为对象上可能存在名为 `fn` 的方法，为了避免覆盖掉之前的方法，我们可以使用 `Symbol` 生成一个独一无二的名称。

```js
Function.prototype.call_ = function(thisArg, ...args) {
  const fn = Symbol() // 生成一个独一无二的名称
  thisArg[fn] = this
  thisArg[fn](...args)
  delete thisArg[fn]
}
```

- 当 `call` 的第一个参数为 `undefined` 或 `null` 时，第一个参数的值自动变为全局对象 `globalThis`。

```js
Function.prototype.call_ = function(thisArg, ...args) {
  const fn = Symbol()
  thisArg[fn] = this ?? globalThis // undefined 或 null 时转变为全局对象
  thisArg[fn](...args)
  delete thisArg[fn]
}
```

- 调用 `call` 的函数可能有返回值，所以要处理一下有返回值的情况。

```js
Function.prototype.call_ = function(thisArg, ...args) {
  const fn = Symbol()
  thisArg[fn] = this
  const result = thisArg[fn](...args) // 函数可能有返回值
  delete thisArg[fn]
  return result // 把值返回
}

function logInfo(age, hobby) {
  return `${this.name} ${age} ${hobby}`
}
const person1 = { name: 'eathyn' }
const result = logInfo.call_test(person1, 25, 'reading')
console.log(result)  // eathyn 25 reading
```

## Apply

### 基本使用

- `apply` 接收两个参数，第一个参数为函数的 `this`，第二个参数为数组，该数组包含函数的所有实参。例如在 `logInfo.apply(person1, [25, 'reading'])` 中，`person1` 为函数的 `this`；`[25, 'reading']` 包含了函数的所有实参。

```js
const person1 = { name: 'eathyn' }
const person2 = { name: 'tom' }

function logInfo(age, hobby) {
  console.log(this.name, age, hobby)
}

logInfo.apply(person1, [25, 'reading']) // eathyn 25 reading
logInfo.apply(person2, [50, 'planting']) // tom 50 planting
```

### 代码实现

- `apply` 的实现与 `call` 总体上差不多。唯一的区别是函数实参的接收方式，`call` 是一个一个传入，`apply` 是一个包含所有实参的数组。因此 `apply` 不需要使用剩余参数，只要使用数组就可以了。

```js
Function.prototype.apply_ = function(thisArg, arr) {
  const fn = Symbol()
  thisArg[fn] = this ?? window
  // 第二个参数必须为数组
  if (!Array.isArray(arr)) {
    console.error('参数必须为数组')
    return
  }
  // 使用扩展语法展开数组
  const result = thisArg[fn](...arr)
  delete thisArg[fn]
  return result
}
```

## Refs

- [实现 call 和 apply](https://www.cnblogs.com/echolun/p/12144344.html)
