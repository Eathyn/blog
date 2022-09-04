# this

## 一般情况

- 一般情况下，`this` 的值为调用 `this` 所在函数的对象

### 全局

- 非严格模式下，`this` 值为 `window`
- 在全局环境中调用函数相当于全局对象调用函数

```js
function fn() {
  console.log(this)
}

// 相当于 window.fn()
fn() // window
```

- 严格模式下 `this` 为 `undefined`

```js
function fn() {
  console.log(this)
}

fn() // undefined
```

Question

来源: [掘金](https://juejin.cn/post/6844904083707396109#heading-7)

```js
var a = 1

function foo() {
  var a = 2

  function inner() {
    // 为什么 inner 函数的 this 值为 window
    console.log(this.a)
  }

  inner()
}

foo()
```

### 对象的函数

```js
const obj = {
  fn() {
    console.log(this)
  }
}

obj.fn() // this = obj
```

### 构造函数 / 类

- 当函数使用 `new` 生成实例，则函数中的 `this` 相当于实例

```js
// 构造函数
function Person(name) {
  this.name = name
  this.greet = function() {
    console.log(`Hi, I am ${this.name}`)
  }
}

const p1 = new Person('eathyn')
p1.greet() // this = p1

// 类
class Person {
  constructor(name) {
    this.name = name
  }

  greet() {
    console.log(`Hi, I am ${this.name}`)
  }
}

const p1 = new Person('eathyn')
p1.greet() // this = p1
```

## call / apply / bind

- call / apply / bind 第一个实参为 `this` 的值

```js
const obj1 = {
  getThis() {
    return this
  }
}
const obj2 = {}

obj1.getThis() // this = obj1
obj1.getThis.call(obj2) // this = obj2
obj1.getThis.apply(obj2) // this = obj2
obj1.getThis.bind(obj2)() // this = obj2
```

## 箭头函数

- 箭头函数的 `this` 值与最靠近的词法上下文的 `this` 值相同

```js
function fn() {
  return () => this
}

const o1 = { fn }
const o2 = { fn }

// 箭头函数的 this 值取决于 fn，fn 此时被 o1 调用
console.log(o1.fn()() === o1) // true, this = o1

// 箭头函数的 this 值取决于 fn，fn 此时被 o2 调用
console.log(o2.fn()() === o2) // true, this = o2
```

## 事件处理函数

- 事件处理函数的 `this` 值为当前运行事件处理函数的元素

```html

<div class="container">
  <button class="button">click me</button>
</div>
```

```js
const div = document.querySelector('.container')
const button = document.querySelector('.button')

div.addEventListener('click', function() {
  console.log('--- div ---')
  console.log(this) // div
})

button.addEventListener('click', function() {
  console.log('--- button ---')
  console.log(this) // button
})
```

## 定时器

- setTimeout / setInterval 的函数的 `this` 值为全局对象

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

## [特殊] 隐式绑定丢失

- 把一个函数当成参数传递到另一个函数的时候，会发生隐式丢失的问题，且与包裹着它的函数的this指向无关。在非严格模式下，会把该函数的 `this` 绑定到 `window` 上，严格模式下绑定到 `undefined`

```js
function fn1() {
  console.log(this) // window
}

function fn2(fn) {
  fn()
}

fn2(fn1)
```

## 优先级

- 箭头函数 > call/apply/bind > 其他

```js
const arrowFn = () => this
const o1 = {}

console.log(arrowFn.call(o1) === o1) // false
console.log(arrowFn.call(o1) === window) // true
```

## 参考

- [MDN: this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
