---
date: 2022-12-16
category: TypeScript
tag:
- Book - Learning TypeScript
- chapter 09
---

# Type Modifiers

## Top Types

- A top type, or universal type, is a type that can represent any possible value in a system.
- All types are assignable to a top type.

```ts
const a: number = 1
// ok
const b: any = a
```

### any, Again

- Using `any` type tells TypeScript not to perform type checking on that value's assignability or members.

```ts
const a: any = 1
console.log(a.length) // undefined
```

- If you want to indicate that a value can be anything, the `unknown` type is much safer.

### unknown

- TypeScript does not allow directly accessing properties of `unknown` typed value.

```ts
const a: unknown = 1
// TS2571: Object is of type 'unknown'.
console.log(a.length)
```

- The `unknown` type value can't be assignable to types that are not a top type (`any` or `unknown`).

```ts
const a: unknown = 1
// ok
const b: unknown = a
// ok
const c: any = a
// TS2322: Type 'unknown' is not assignable to type 'number'.
const d: number = a
```

- TypeScript will allow code to access members of `unknown` type value if the value's type is narrowed, such as `instanceof`, `typeof` or type assertion.

```ts
function fn(a: unknown) {
  if (typeof a === 'string') {
    console.log(a.toUpperCase()) // ok
  } else {
    console.log('do nothing')
  }
}

fn('hello')
fn(100)
```

- You should generally prefer using `unknown` instead of `any` when possible.

## Type Predicates

- `instanceof` and `typeof` can't narrow a type when wrap the logic with a function.

Stop: TS throw error

## Type Operators

### keyof

- TypeScript instead provides a `keyof` operator that takes in an existing type and gives back a union of all the keys allowed on that type.

```ts
interface Person {
  name: string;
  age: number;
}

function getInfo1(person: Person, key: string) {
  // TS7053: Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'Person'.
  // No index signature with a parameter of type 'string' was found on type 'Person'.
  return person[key]
}

function getInfo2(person: Person, key: keyof Person) {
  return person[key] // ok
}

function getInfo3(person: Person, key: 'name' | 'age') {
  return person[key] // ok
}
```

### typeof

- `typeof` operator in JavaScript: a runtime operator that returns the string name of a type
- `typeof` operator in TypeScript: a type operator, can only be used in types and won’t appear in compiled code

```ts
const person = {
  name: 'eathyn',
  age: 25,
}

// typeof of 'result': { name: string, age: number }
let result: typeof person
```

_compiled code:_

```js
var person = {
  name: 'eathyn',
  age: 25
};

// typeof in TS is disappear
var result;

// typeof in JS is appear
console.log(typeof person);
```

- TypeScript allows `keyof` and `typeof` to be chained together to succinctly retrieve the allowed keys on a value’s type.

```ts
const person = {
  name: 'eathyn',
  age: 25,
}

// typeof of 'key': 'name' | 'age'
let key: keyof typeof person
```

## Type Assertions

- type assertion: override the type system’s understanding of a value’s type, also known as a “type cast”. TypeScript will defer to your assertion and treat the value as that type.
- syntax: `as` keyword followed by a type

```ts
const rawData = `['eathyn', 'eaven']`

// type of result1 : any
let result1 = JSON.parse(rawData)

// type of result2 : string[]
let result2 = JSON.parse(rawData) as string[]

// type of result3: [string, string]
let result3 = JSON.parse(rawData) as [string, string]

// type of result4: ['eathyn', 'eaven']
let result4 = JSON.parse(rawData) as ['eathyn', 'eaven']
```

- Type assertions exist only in the TypeScript type system. They’re removed along with all other pieces of type system syntax when compiled to JavaScript.

- TypeScript best practice is generally to avoid using type assertions when possible.

### Asserting Caught Error Types

- It is generally impossible to know what type a caught error in a catch block will be because the code in the try block may unexpectedly throw any object different from what you expect.

```ts
try {
  throw new Error('the error')
} catch (error: Error) { // TS1196: Catch clause variable type annotation must be 'any' or 'unknown' if specified.
  console.warn(error.message)
}

try {
  throw new Error('the error')
} catch (error) {
  console.warn((error as Error).message) // ok
}

// safer version
try {
  throw new Error('the error')
} catch (error) {
  console.warn(error instanceof Error ? error.message : error)
}
```

### Non-Null Assertions

- The `!` non-null assertion asserts that the type is not `null` or `undefined`

```ts
// type: null | undefined | string
let data: null | undefined | string

// type: string
let filter = data!
```

- Non-null assertions are particularly useful with APIs such as `Map.get` that return a value or `undefined` if it doesn’t exist.

```ts
const person = new Map([
  ['name', 'eathyn'],
  ['hobby', 'coding'],
])

// type: number | undefined
// TS2532: Object is possibly 'undefined'.
const result1 = person.get('name').toUpperCase()

// type: number
// ok
const result2 = person.get('name')!.toUpperCase()
```

### Type Assertion Caveats

- Like the `any` type, they should be avoided whenever reasonably possible.
- It is often better to have more accurate types representing your code than it is to make it easier to assert on a value’s type.

```ts
const person = new Map([
  ['name', 'eathyn'],
])

// type: string
const result1 = person.get('test')!
// Runtime TypeError: Cannot read property 'toUpperCase' of undefined.
result1.toUpperCase()
```

#### Assertion assignability

- TypeScript will only allow type assertions between two types if one of the types is assignable to the other.

```ts
// TS2352: Conversion of type 'string' to type 'number' may be a mistake because neither type sufficiently overlaps with the other.
let data = 'hello' as number
```

- If you absolutely must switch a value from one type to a totally unrelated type, you can use a double type assertion.

```ts
// type: number
data = 'hello' as unknown as number
```

- `as unknown as...` double type assertions are dangerous and almost always a sign of something incorrect in the types of the surrounding code.

## Const Assertions

- Arrays are treated as readonly tuples, not mutable arrays

```ts
// type: readonly [1, 2, 3]
let arr = [1, 2, 3] as const
```

### Literals to Primitives

- Literals are treated as literals, not their general primitive equivalents.

```ts
// type: 'hello'
let data1 = 'hello' as const

// type: 'hello'
const data2 = 'hello'
```

### Read-Only Objects

- Properties on objects are considered readonly.

```ts
// type: { name: 'eathyn' }
const person = {
  name: 'eathyn' as const
}

// TS2322: Type '"eaven"' is not assignable to type '"eathyn"'.
person.name = 'eaven'
```

```ts
function fn(value: 'yes' | 'no'): string {
  switch (value) {
    case 'yes':
      return 'true'
    case 'no':
      return 'no'
    default:
      return 'default'
  }
}

// type: {value: string}
const obj1 = { value: 'yes' }
// {readonly value: "yes"}
const obj2 = { value: 'yes' } as const

// TS2345: Argument of type 'string' is not assignable to parameter of type '"yes" | "no"'.
fn(obj1.value)
// ok
fn(obj2.value)
```
