---
date: 2022-12-28
category: TypeScript
tag:
- Book - Learning TypeScript
- chapter 10
---

# Generics

- The reason to use generics: a piece of code may be intended to work with various different types depending on how it’s called
- Generics may be declared using `<` and `>` brackets.
- Type parameters: `T`, `U` and `UserInput` in the demo below
- Type arguments: `boolean`, `number` and `string` in the demo below

```ts
// type parameters: T, U, UserInput
function fn<T, U, UserInput>(a: T, b: U, c: UserInput) {
  console.log(a)
  console.log(b)
  console.log(c)
}

// type arguments: boolean, number, string
fn<boolean, number, string>(true, 1, 'hello')
```
- In TypeScript, constructs such as functions may declare any number of generic type parameters.

## Generic Functions

- Function and arrow function all support generics.

```ts
// function
function fn<T>(input: T) {
  // type of 'input': T
  return input
}

// arrow function
const arrowFn = <T>(input: T) => input

// type of 'result1': number
let result1 = fn(1)

// type of 'result2': string
let result2 = arrowFn('hello')
```

- The syntax for generic arrow functions has some restrictions in `.tsx` files, as it conflicts with JSX syntax.

### Explicit Generic Call Types

- Most of the time when calling generic functions, TypeScript will be able to infer type arguments based on how the function is being called.

```ts
function fn<T, U, UserInput>(a: T, b: U, c: UserInput) {
  console.log(a)
  console.log(b)
  console.log(c)
}

// TypeScript will infer type arguments.
fn(true, 1, 'hello')
```

- TypeScript will default to assuming the `unknown` type for any type argument it cannot infer.

```ts
function wrap<T>(callback: (input: T) => void) {
  return (input: T) => {
    callback(input)
  }
}

wrap(function (input) {
  // type of 'input': unknown
  console.log(input.length)
})

wrap<string>(function (input) {
  // type of 'input': string
  console.log(input.length)
})
```

### Multiple Function Type Parameters

- Functions can define any number of type parameters.

```ts
function fn<First, Second>(a: First, b: Second) {
  return [a, b] as const
}

// type of result: readonly [boolean, string]
let result1 = fn<boolean, string>(true, 'hello')

// type of result: readonly [true, "hello"]
let result2 = [true, 'hello'] as const
```

- If a function declares multiple type parameters, calls to that function must explicitly declare either none of the generic types or all of them.

```ts
function fn<T, U>(a: T, b: string) {
  console.log(a)
  console.log(b)
}

// TS2558: Expected 2 type arguments, but got 1
fn<boolean>(true, 'hello')

// ok
fn<boolean, string>(true, 'hello')

// ok
fn(true, 'hello')
```

- Try not to use more than one or two type parameters in any generic construct. As with runtime function parameters, the more you use, the harder it is to read and understand the code.

## Generic Interfaces

```ts
interface Box<T> {
  inside: T;
}

const o1: Box<string> = {
  inside: 'hello'
}

const o2: Box<boolean> = {
  inside: false
}
```

### Inferred Generic Interface Types

```ts
interface Box<T> {
  inside: T;
}

function getInside<T>(inside: T): T {
  return inside
}

const o1: Box<string> = {
  inside: 'hello'
}

const o2: Box<boolean> = {
  inside: false
}

// type of 'result1': string
let result1 = getInside(o1.inside)

// type of 'result1': boolean
let result2 = getInside(o2.inside)
```

## Generic Classes

- Classes can also declare any number of type parameters to be later used on members.

```ts
class MyClass<T, U> {
  key: T
  value: U

  constructor(key: T, value: U) {
    this.key = key
    this.value = value
  }

  getKey(): T {
    return this.key
  }
}

// type of 'instance1': MyClass<number, string>
const instance1 = new MyClass(1, 'hello')

// typeof 'instance2': MyClass<boolean, bigint>
const instance2 = new MyClass(true, 100n)
```

### Extending Generic Classes

- TypeScript will not attempt to infer type arguments for the base class from usage.
- Any type arguments without defaults will need to be specified using an explicit type annotation.

```ts
class Base<T> {
  a: T

  constructor(a: T) {
    this.a = a
  }
}

class DerivedOne extends Base<number> {
  constructor(a: number) {
    super(a)
  }
}

class DerivedTwo extends Base<string> {
  constructor(b: string) {
    super(b)
  }
}

const instance1 = new DerivedOne(1)
// type of result1: number
const result1 = instance1.a

const instance2 = new DerivedTwo('hello')
// type of result2: string
const result2 = instance2.a
```

### Implementing Generic Interfaces

- Generic classes may also implement generic interfaces by providing them any necessary type parameters.

```ts
interface MyInterface<T> {
  a: T
}

class MyClass implements MyInterface<number> {
  // 'a' must be provided
  a: number
  b: string

  // TS2416: Property 'a' in type 'MyClass' is not assignable to the same property in base type 'MyInterface<number>'.
  // Type 'string' is not assignable to type 'number'.
  // a: string

  constructor(a: number, b: string) {
    this.a = a
    this.b = b
  }
}
```

### Method Generics

- Class methods may declare their own generic types separate from their class instance.

```ts
class CreatePairFactory<Key> {
  key: Key

  constructor(key: Key) {
    this.key = key
  }

  createPair<Value>(value: Value) {
    return {
      key: this.key,
      value,
    }
  }
}

const factory = new CreatePairFactory('hello')

// {key: string, value: number}
const numberPair = factory.createPair(1)

// {key: string, value: boolean}
const booleanPair = factory.createPair(false)
```

### Static Class Generics

- Static members cannot reference class type parameters.

```ts
class MyClass<T> {
  a: T

  constructor(a: T) {
    this.a = a
  }

  static staticMethod() {
    // TS2302: Static members cannot reference class type parameters.
    let b: T
  }
}
```

## Generic Type Aliases

```ts
type Nullish<T> = T | null | undefined
```

```ts
type CreatesValue<Input, Output> = (input: Input) => Output
let creator: CreatesValue<string, number>

// ok
creator = text => text.length

// TS2322: Type 'string' is not assignable to type 'number'.
creator = text => text.toUpperCase()
```

### Generic Discriminated Unions

- Put together, generic types and discriminated types provide a wonderful way to model reusable types.

```ts
interface FailureResult {
  error: Error
  succeeded: false
}

interface SuccessfulResult<Data> {
  data: Data
  succeeded: true
}

type Result<Data> = FailureResult | SuccessfulResult<Data>

function handleResult(result: Result<string>) {
  if (result.succeeded) {
    console.log(result.data)
  } else {
    console.log(result.error)
  }
}
```

## Generic Modifiers

### Generic Defaults

- Generics support default type argument.

```ts
interface Test<T = string> {
  value: T
}

// ok
let a: Test<number> = { value: 1 }

// ok: type infer
let b: Test = { value: 'hello' }

// TS2322: Type 'number' is not assignable to type 'string'.
let c: Test = { value: 1 }
```

- Type parameters can default to earlier type parameters in the same declaration.

```ts
interface KeyValuePair<Key, Value = Key> {
  key: Key
  value: Value
}

// ok
let allExplicit: KeyValuePair<number, string> = {
  key: 1,
  value: 'hello',
}

// ok
let oneDefault: KeyValuePair<number> = {
  key: 1,
  value: 2,
}

let missing: KeyValuePair<string> = {
  key: 'hello',
  // Type parameters can default to earlier type parameters in the same declaration too.
  value: 1,
}
```

- All default type parameters must come last in their declaration list.

```ts
// ok
function fn1<T, U = string>() {}

// TS2706: Required type parameters may not follow optional type parameters.
function fn2<T = string, U>() {}
```

## Constrained Generic Types

- We should constrain generic types because some functions are only meant to work with a limited set of types.
- TypeScript allows for a type parameter to declare itself as needing to extend a type: meaning it’s only allowed to alias types that are assignable to that type.
- The syntax to constrain a type parameter is to place the `extends` keyword after the type parameter’s name, followed by a type to constrain it to.

```ts
interface WithLength {
  length: number
}

function logWithLength<T extends WithLength>(input: T) {
  console.log(input.length)
  return input
}

// ok
logWithLength("hello")

// ok
logWithLength([1, 2, 3])

// TS2345: Argument of type 'Date' is not assignable to parameter of type 'WithLength'.
// Property 'length' is missing in type 'Date' but required in type 'WithLength'.
logWithLength(new Date())
```

### keyof and Constrained Type Parameters

- Using `extends` and `keyof` together allows a type parameter to be constrained to the keys of a previous type parameter.

```ts
function get<T, Key extends keyof T>(container: T, key: Key) {
  return container[key]
}

const container = {
  a: 1,
  b: {
    c: 2,
  },
}

// ok
get(container, 'a')

// ok
get(container, 'b')

// TS2345: Argument of type '"c"' is not assignable to parameter of type '"a" | "b"'.
get(container, 'c')
```

## Promise

### Creating Promises

Skip: Demo not working...

### Async Functions

- TypeScript will infer the return type of an `async` function to always be a `Promise` for whatever value is returned.

```ts
// return type: Promise<number>
async function lengthAfterSecond(text: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return text.length
}
```

- Any manually declared return type on an `async` function therefore must always be a `Promise` type.

```ts
// ok
async function fn1(): Promise<string> {
  return 'hello'
}

// TS1064: The return type of an async function or method must be the global Promise  type.
async function fn2(): string {
  return 'hello'
}
```

## Using Generics Right

- Although generics can give us a lot of flexibility in describing types in code, they can become rather complex quite quickly.
- TypeScript best practice is generally to use generics only when necessary, and to be clear about what they’re used for when they are.

### The Golden Rule of Generics

- One quick test that can help show whether a type parameter is necessary for a function is it should be used at least twice.

```ts
// necessary
function fn1<T>(input: T): T {
  return input
}

// unnecessary
function fn2<T extends string>(input: T) {
  return input
}

// fix
function fn3(input: string) {
  return input
}
```

### Generic Naming Conventions

- When the intent of a generic isn’t clear from a single-letter T, it’s best to use descriptive generic type names that indicate what the type is used for

```ts
// good
function labelBox1<Label, Value>(label: Label, value: Value) {}

// bad
function labelBox2<L, V>(label: L, value: V) {}
```
