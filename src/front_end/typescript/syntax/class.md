---
date: 2023-06-02
category: TypeScript
---

# Class

## Usage

```ts
class Person {
  private name: string
  private age: number
  
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  
  greet() {
    return `hi, I am ${this.name}`
  }
}
```

## Access Modifier

> Reference: [TypeScript Roadmap](https://roadmap.sh/typescript)

- TypeScript 有三种访问修饰符（access modifier）：
  - `private`：在定义属性和方法的类中可以访问。
  - `protected`：在定义属性和方法的类或者该类的子类中可以访问。
  - `public`（默认）：任何地方都可以访问。

## Constructor Overloading

> Reference: [TypeScript Roadmap](https://roadmap.sh/typescript)

- 构造函数可以重载。

```ts
class Person {
  private name?: string
  private age?: number
  private id?: number

  constructor(name: string, age: number)
  constructor(id: number)
  constructor(nameOrId: string | number, age?: number) {
    if (typeof nameOrId === 'string') {
      this.name = nameOrId
    } else {
      this.id = nameOrId  
    }
    
    if (age) {
      this.age = age
    }
  }
}

let person1 = new Person('Jeff', 18)
let person2 = new Person(123456)
```

## Method Overriding

> Reference: [TypeScript Roadmap](https://roadmap.sh/typescript)

- 方法覆盖（method overriding）指的是衍生类覆盖基类的方法。

```ts {8-10}
class Animal {
  makeSound() {
    return 'animal makes sound'
  }
}

class Dog extends Animal {
  makeSound() {
    return 'dark'
  }
}
```

## Abstract Class

> Reference: [TypeScript Roadmap](https://roadmap.sh/typescript)

- 抽象类（abstract class）不可以被实例化，只能被当作其他类的基类（base class）。
- 抽象类可以定义普通方法和抽象方法，抽象方法没有函数体，并且在衍生类（derived class）中必须要被实现。

```ts
abstract class Animal {
  abstract makeSound(): void
  move() {
    console.log('moving..')
  }
}

class Dog extends Animal {
  makeSound() {
    console.log('bark..')
  }
}

let dog = new Dog()
dog.makeSound()
dog.move()
```

## Inheritance

- 继承（inheritance）指的是衍生类继承基类的属性和方法。
- 继承使用 `extends` 关键字。

```ts
class Person {
  private name: string
  private age: number
  
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  
  greet() {
    console.log('hi')
  }
}

class Student extends Person {
  private grade: number

  constructor(name: string, age: number, grade: number) {
    super(name, age);
    this.grade = grade
  }
}
```

## Polymorphism

> Reference:
> - [TypeScript Roadmap](https://roadmap.sh/typescript)
> - [Polymorphism Definition](https://www.zhihu.com/question/30082151/answer/46688599)

- 调用方法时会调用衍生类的方法，而不是基类的方法。

```ts {19,21-22,24-26}
class Animal {
  makeSound() {
    console.log('some sound')
  }
}

class Dog extends Animal {
  makeSound() {
    console.log('Bark')
  }
}

class Cat extends Animal {
  makeSound() {
    console.log('Meow')
  }
}

let animal: Animal

animal = new Dog()
animal.makeSound() // Bark

animal = new Cat()
animal.makeSound() // Meow
```

## Implement Interface

- 接口可以被类实现。

```ts {6}
interface _Person {
  name: string
  greet(): string
}

class Person implements _Person {
  name: string

  constructor(name: string) {
    this.name = name
  }
  
  greet() {
    return `hello, I am ${this.name}`
  }
}
```

- 类可以实现多个接口。

```ts {10}
interface Person {
  name: string
  age: number
}

interface Learner {
  learn(): void
}

class Student implements Person, Learner {
  name: string
  age: number
  
  constructor(name: string, age: number, grade: number) {
    this.name = name
    this.age = age
  }
  
  learn() {
    console.log('learn something..')
  }
}
```

## Static Field

- 使用 `static` 关键字定义属于类的属性和方法。这些属性和方法不属于类的实例。

```ts {2-5,13}
class Employee {
  static headcount: number
  static getHeadCount() {
    return Employee.headcount
  }
  
  name: string
  title: string

  constructor(name: string, title: string) {
    this.name = name
    this.title = title
    Employee.headcount++
  }
}
```

## Getter and Setter

- 可以为属性定义 `getter` 和 `setter`。

```ts {8-10,12-14,18-19}
class Person {
  private _name: string

  constructor(name: string) {
    this._name = name
  }

  get name(): string {
    return this._name
  }

  set name(value: string) {
    this._name = value
  }
}

const person = new Person('Jeff')
person.name
person.name = 'Eathyn'
```
