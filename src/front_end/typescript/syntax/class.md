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

```ts {7}
class Animal {
  makeSound() {
    return 'animal makes sound'
  }
}

class Dog extends Animal {
  makeSound(): string {
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
