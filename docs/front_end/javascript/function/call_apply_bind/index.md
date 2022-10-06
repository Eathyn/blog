# `call`, `apply` and `bind`

## Reason

- 对象不需要定义函数就可以调用某个函数，有利于代码复用

## Example

```js
function add(c, d) {
  console.log(this.a + this.b + c + d)
}

const obj = {
  a: 1,
  b: 2,
}

add.call(obj, 3, 4)
add.apply(obj, [100, 200])
add.bind(obj, 1000, 2000)()
```

## Attention

非严格模式下，如果 `call` / `bind` 第一个参数为原始值类型，则变为对应的对象类型；如果是 `undfined` 或 `null`, 则变为全局对象

```js
function fn() {
  return this
}

console.log(typeof fn.call(1) === 'object') // t
console.log(fn.call(undefined) === globalThis) // t
console.log(fn.call(null) === globalThis) // t
console.log(fn.bind(null) === globalThis) // f
```

`bind` 只能绑定一次

```js
const o1 = { a: 1 }
const o2 = { a: 2 }

function f() {
  console.log(this.a)
}

const g = f.bind(o1)
g() // 1

const h = g.bind(o2)
h() // 1
```

## Refs
- [Call](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
- [Apply](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
- [Bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
