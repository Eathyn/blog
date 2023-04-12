---
date: 2022-12-10
category: TypeScript
tag:
- Book - Learning TypeScript
- chapter 08
---

# Classes

## Class Methods

```ts
class Person {
  name: string
  age: number
  
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  
  greet(name: string) {
    console.log(`hello, ${name}`)
  }
}

const p = new Person('eathyn', 25)
p.greet('smith')
```

## Class Properties

- If you want to access a property on a class in TypeScript, that property must be declared in the class.

```ts
class Person {
  name: string
  age: number
  
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
    // Property 'grade' does not exist on type 'Person'.
    this.grade = 4
  }
}
```

### Function Properties

- The function is a property of the constructor's prototype.
- The arrow function is a property of instance.

```ts
class Person {
  myMethod() {}
  myProperty = () => {}
}

console.log(new Person().myMethod === new Person().myMethod) // true
console.log(new Person().myProperty === new Person().myProperty) // false
```

_Transpile to JavaScript_

```js
var Person = /** @class */ (function () {
    function Person() {
        this.myProperty = function () { };
    }
    Person.prototype.myMethod = function () { };
    return Person;
}());
console.log(new Person().myMethod === new Person().myMethod);
console.log(new Person().myProperty === new Person().myProperty);
```

### Initialization Checking

- Properties in class should be initialized unless properties are assigned in the constructor or the type of properties may be `undefined`.

```ts
class Custom {
  // ok
  a: number = 0
  
  // ok
  b: string
  
  // error: Property 'c' has no initializer and is not definitely assigned in the constructor.
  c: number
  
  // ok
  d: number | undefined
  
  constructor(a: number, b: string) {
    this.a = a
    this.b = b
  }
}
```

#### Definitely assigned properties

- Using `!` after property to inform TypeScript compiler don't apply strict initialization checking to that property.

```ts
class Custom {
  // ok
  a!: number
}
```

### Optional Properties

- Using `?` after a property to indicate that property is optional.
- `?` means the type of the property is a union of `undefined`.

```ts
class Custom {
  // ok
  a?: string // -> type is: string | undefined
}

// TS2532: Object is possibly 'undefined'.
new Custom().a.length

// ok
new Custom().a?.length
```

### Read-Only Properties

- `readonly` property cannot be modified except in the class constructor.

```ts
class Person {
  readonly name: string
  
  constructor(name: string) {
    this.name = name
  }
  
  changeName(name: string) {
    // TS2540: Cannot assign to 'name' because it is a read-only property.
    this.name = name
  }
}
```

- A readonly property without explicit type annotation will be inferred to their value's narrowed literal type if possible, rather than the wider primitive.

```ts
class Custom {
  readonly a: string = 'AAA' // type: string
  readonly b = 'BBB' // type: 'BBB'
  
  constructor() {
    this.a = 'aaa'
    // TS2322: Type '"bbb"' is not assignable to type '"BBB"'.
    this.b = 'bbb'
  }
}
```

## Classes as Types

```ts
class Person {
  name = ''

  constructor(name: string) {
    this.name = name
  }
}

let p1 = new Person('eathyn')
// TS2741: Property 'name' is missing in type '{}' but required in type 'Person'.
p1 = {}

let p2: Person = new Person('eaven')
// TS2741: Property 'name' is missing in type '{}' but required in type 'Person'.
p2 = {}
```

## Classes and Interfaces

- An instance of a class which implements one or more interfaces should be assignable to each of those interfaces.

```ts
interface Person {
  name: string;
  getInfo(): void;
}

// ok
class Student implements Person {
  name: string
  
  constructor(name: string) {
    this.name = name
  }
  
  getInfo() {
    console.log(`name: ${this.name}`)
  }
}

// ok 
class Child implements Person {
  name: string
  age: number
  
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  
  getInfo() {
    console.log(`name: ${this.name} - age: ${this.age}`)
  }
}
```

### Implementing Multiple Interfaces

- A class can implement multiple interfaces.
- All properties and methods must be implemented in the class.

```ts
interface One {
  a: number;
}

interface Two {
  fn(): void
}

class Custom implements One, Two {
  a: number = 1
  fn() {
    console.log('hello')
  }
}
```

- TypeScript will throw error if a class implements multiple interfaces that has conflicting properties or methods.

```ts
interface One {
  a: number;
}

interface Two {
  a: string;
}

class Custom implements One, Two {
  // TS2416: Property 'a' in type 'Custom' is not assignable to the same property in base type 'Two'.
  a: number = 1;
  
  // TS2416: Property 'a' in type 'Custom' is not assignable to the same property in base type 'One'.
  a: string = 'hello'
}
```

## Extending a Class

- Derived class has all properties and methods of base class.

```ts
class Person {
  name: string = 'eathyn'
  getName() {
    return this.name
  }
}

class Student extends Person {
  grade: number = 4
  getGrade() {
    return this.grade
  }
}

const s = new Student()
console.log(s.name) // property of base class
console.log(s.grade)
console.log(s.getName()) // method of base class
console.log(s.getGrade())
```

### Extension Assignability

- An instance of a derived class can be assigned to a variable with base class type annotation.

```ts
class Person {
  name: string
  age: number
  
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

class Student extends Person {
  grade: number
  
  constructor(name: string, age: number, grade: number) {
    super(name, age)
    this.grade = grade
  }
}

let student: Person

// ok
student = new Student('eathyn', 25, 4)

// TS2339: Property 'grade' does not exist on type 'Person'.
console.log(student.grade)
```

- If all properties and methods of a base class already exist on its derived class with same type, instances of that base class can be assigned to a variable with derived class type annotation.

```ts
class BaseClass {
  a: number = 1
}

class DerivedClassOne extends BaseClass {
  a: number = 2
}

class DerivedClassTwo extends BaseClass {
  a: number = 3
  b?: number = 4
}

class DerivedClassThree extends BaseClass {
  c: number = 5
}

let instance1: DerivedClassOne
instance1 = new BaseClass() // ok

let instance2: DerivedClassTwo
instance2 = new BaseClass() // ok

let instance3: DerivedClassThree
// TS2741: Property 'c' is missing in type 'BaseClass' but required in type 'DerivedClassThree'.
instance3 = new BaseClass()
```

### Overridden Methods

- Overridden methods in subclassed must be assignable to methods of base class.

```ts
class BaseClass {
  fn(a: number) {
    return a * 2
  }
}

class SubClassOne extends BaseClass {
  // ok
  fn(a: number) {
    return a * 2
  }
}

class SubClassTwo extends BaseClass {
  // TS2416: Property 'fn' in type 'SubClassTwo' is not assignable to the same property in base type 'BaseClass'.
  // Type '(a: number, b: number) => number' is not assignable to type '(a: number) => number'.
  fn(a: number, b: number) {
    return a + b
  }
}

class SubClassThree extends BaseClass {
  // TS2416: Property 'fn' in type 'SubClassThree' is not assignable to the same property in base type 'BaseClass'.
  // Type '(a: number) => string' is not assignable to type '(a: number) => number'.
  // Type 'string' is not assignable to type 'number'.
  fn(a: number) {
    return `${a}`
  }
}
```

### Overridden Properties

- Overridden Property types in subclass must be assignable to property types in base class.

```ts
class BaseClass {
  a?: number
}

class SubClassOne extends BaseClass {
  a: number = 1
}

class SubClassTwo extends BaseClass {
  // TS2416: Property 'a' in type 'SubClassTwo' is not assignable to the same property in base type 'BaseClass'.
  // Type 'string' is not assignable to type 'number'.
  a: string = 'A'
}
```

- Overridden properties are usually used to be narrowed to some more specific type in subclass.

```ts
class BaseClass {
  // type: number | undefined
  a?: number
}

class SubClass {
  a: number
  
  constructor(a: number) {
    this.a = a
  }
}
```

## Abstract Classes

- A class that doesn't implement some methods.
- Adding `abstract` keyword before a class or a method to indicates that is an abstract class.
- TypeScript will throw error if abstract methods aren't implemented in subclass.

```ts
abstract class Person {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  
  abstract getInfo(): string
}

class Student extends Person {
  grade: number
  
  constructor(name: string, age: number, grade: number) {
    super(name, age)
    this.grade = grade
  }
  
  // must implement the method
  getInfo(): string {
    return `${this.name} - ${this.age} - ${this.grade}`
  }
}
```

- Cannot create an instance of an abstract class.

```ts
abstract class AbstractClass {}

// TS2511: Cannot create an instance of an abstract class.
const obj = new AbstractClass()
```

## Member Visibility

- `public`: allowed to be accessed by anybody, anywhere
- `protected`: allowed to be accessed by the class itself and its subclass
- `private`: allowed to be accessed by the class itself

```ts
class BaseClass {
  public a: number
  protected b: number
  private c: number
  
  constructor(a: number, b: number, c: number) {
    this.a = a
    this.b = b
    // private member is accessible in the class itself
    this.c = c
  }
}

class SubClass extends BaseClass {
  constructor(a: number, b: number, c: number) {
    super(a, b, c)
  }
  
  getB() {
    // protected member is accessible in the class itself and subclasses
    return this.b
  }
  getC() {
    // TS2341: Property 'c' is private and only accessible within class 'BaseClass'.
    return this.c
  }
}
```

- A visibility keyword is positioned before the `readonly` keyword.

```ts
class Base {
  private readonly a: number = 1
}
```

### Static Field Modifiers

- static members are belong to a class rather than an instance.

```ts
class Base {
  static a: number = 1
  static greet() {
    return 'hello'
  }
}

console.log(Base.a)
console.log(Base.greet())
```

- A visibility keyword comes first, then `static`, then `readonly`.

```ts
class Base {
  private static readonly a: number = 1
  static getA() {
    return this.a
  }
}

console.log(Base.getA())
```
