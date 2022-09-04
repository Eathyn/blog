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

