# Prototype

## Basics

- 每一个引用类型（对象、数组、函数等）都有隐藏的 `[[prototype]]` 属性，该属性值为 `null` 或另一个对象的堆内存地址，这个对象被称为原型 (prototype)

- 通过 `__proto__` 或 `Object.getPrototypeOf` / `Object.setPrototypeOf` 访问

- 当在一个对象上找不到属性时，就会沿着 `[[prototype]]` 到其他对象上寻找

```js
const o1 = { a: 1 }
const o2 = {
  b: 2,
  __proto__: o1,
}

console.log(o2.a) // 1
```

## Constructor

- 内置的构造函数和 Function 实例都有 `prototype` 属性，指向另一个对象，该对象的 `constructor` 属性指向构造函数

```js
// 内置构造函数
console.log(Object.prototype)
console.log(Array.prototype)
console.log(Function.prototype)

// Function 实例
function Person() {}
console.log(Person.prototype)

// 不是构造函数，没有 prototype 属性
console.log([1, 2, 3].prototype) // undefined
```

![prototype and constructor properties](./_image/prototype_constructor.png =x300)

- 构造函数的实例的 `[[prototype]]` 属性指向 `构造函数.prototype` 对象

```js
const obj = {} // const obj = new Object()
console.log(obj.__proto__ === Object.prototype) // true

const arr = [] // const arr = new Array()
console.log(arr.__proto__ === Array.prototype) // true

const Person = function() {} // const Person = new Function()
console.log(Person.__proto__ === Function.prototype) // true

const p1 = new Person()
console.log(p1.__proto__ === Person.prototype) // true
```

![instance's \[\[prototype\]\] property](./_image/instance_prototype.png =x350)

- 除了 Object 构造函数，其他内置构造函数的 `prototype` 对象的 `[[prototype]]` 指向 `Object.prototype`

![built-in constructor's \[\[prototype\]\]](./_image/built_in_prototype.png =x350)

- Prototype 总结

![Prototype 总结](./_image/prototype_summary.png =x350)

## Inheritance

- storing properties in instance
- storing methods in prototype
- setting prototype of `Student.prototype` to `Person.prototype`

```js
function Person(name, age) {
  this.name = name
  this.age = age
}

Person.prototype.getInfo = function() {
  return `${this.name} ${this.age}`
}

function Student(name, age, grade) {
  Person.call(this, name, age)
  this.grade = grade
}

Student.prototype.getInfo = function() {
  return `${Person.prototype.getInfo()} ${this.grade}`
}

Object.setPrototypeOf(Student.prototype, Person.prototype)
```

## Refs

- [prototype basics](https://javascript.info/prototype-inheritance)
- [F.prototype](https://javascript.info/function-prototype)
- [built-in constructor prototype](https://javascript.info/native-prototypes)
