---
date: 2021-12-25
category: implement
tag: new operator
---

# `new` Operator

## Creating Process

1. 创建一个空对象(即新实例)
2. 将新实例的 `[[prototype]]` 属性指向构造函数 `prototype` 属性指向的对象
3. 执行构造函数，并把 `this` 绑定到新实例上
4. 如果构造函数返回对象，则将这个对象返回；如果构造函数无返回或者返回原始值类型，则将新实例返回

## Implement

```js
function New(constructor, ...args) {
  // 1.创建一个空对象(即新实例)
  const obj = {}
  // 2.将新实例的 `[[prototype]]` 属性指向构造函数 `prototype` 属性指向的对象
  Object.setPrototypeOf(obj, constructor.prototype)
  // 3.执行构造函数，并把 `this` 绑定到新实例上
  const result = constructor.apply(obj, args)
  // 4.如果构造函数返回对象，则将这个对象返回；如果构造函数无返回或者返回原始值类型，则将新实例返回
  return typeof result === 'object' ? result : obj
}

function Person(name, age) {
  this.name = name
  this.age = age
}

const p1 = New(Person, 'eathyn', 25)
```

## Refs

- [Creating Process](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new#description)
- [Implement new Operator](https://vue3js.cn/interview/JavaScript/new.html)
