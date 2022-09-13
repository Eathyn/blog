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
