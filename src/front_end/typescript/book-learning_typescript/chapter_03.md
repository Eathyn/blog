---
date: 2022-10-07
category: TypeScript
tag:
- Book - Learning TypeScript
- chapter 03
---

# Unions and Literals

## Union Types

- A union type will be one of constituents that construct it.
- Using `|` to constitute a union type.

```ts
// the type of 'text' is a union type
// it will be 'string' or 'undefined'
let text: string | undefined = 'a'
```

### Union Properties

- TypeScript will throw error if one of the types does not have some property / method.

```ts
function fn(text: string | number) {
  // Error: Property 'toUpperCase' does not exist on type 'number'.
  text.toUpperCase()
}
```

## Narrowing

### Assignment Narrowing

```ts
let text: string | number
// assignment narrows 'string | number' to 'string'
text = 'hi'
text.toUpperCase()
```

### Conditional Narrowing

```ts
let text: string | number
text = 'hi'
if (text === 'hi') {
  console.log(text.toUpperCase())
}
```

### Typeof Checks

```ts
let text = Math.random() > 0.5 ? 'hi': 1
if (typeof text === 'string') {
  text.toUpperCase()
} else {
  text.toFixed()
}
```

## Literal Types

- Literal types are more specific versions of primitive types.

```ts
// type of 'a' is 'string'
let a = 'text'

// type of 'b' is 'text'
const b = 'text'

// type of 'c' is 'text'
let c: 'text'
```

- Union can mix and match between literals and primitives.

```ts
let a: number | 'hi' | 'hello'
```

### Literal Assignability

- Different literal types within the same primitive type are not assignable to each other.

```ts
// Error: Type '"hello"' is not assignable to type '"hi"'.
let a: 'hi' = 'hello'
```

- Literal types allowed to be assigned to their corresponding primitive types.

```ts
const a = 'hi'
let b: string = a
```

## Strict Null Checking

### The Billion-Dollar Mistake

- The billion-dollar mistake is that type systems allowing `null` value to be used in places that require a different type.

```ts
let a: string = null
```

### Truthiness Narrowing

- falsy value: false, 0, -0, 0n, "", null, undefined.

- TypeScript can also narrow a variable’s type from a truthiness check if only some of its potential values may be truthy.

```ts
let a = Math.random() > 0.5 ? 'ok' : undefined

if (a) {
  // truthiness narrowing
  a.toUpperCase()
}

// Error: Object is possibly 'undefined'.
a.toUpperCase()
```

- Logical operators support truthiness narrowing.

```ts
let a = Math.random() > 0.5 ? 'ok' : undefined

a && a.toUpperCase()
a?.toUpperCase()
```

### Variables Without Initial Values

- TypeScript will throw error if you use a variable that doesn't have an initial value.

```ts
let a: string
a?.length // Variable 'a' is used before being assigned.
a = 'hi'
```

## Type Alias

- Type alias makes the type name shorter and easier to reuse.

```ts
// without type alias
let a: number | boolean | string | bigint = 1
let b: number | boolean | string | bigint = 2

// with type alias
type CustomType = number | boolean | string | bigint
let c: CustomType = 3
let d: CustomType = 4
```

### Type Aliases Are Not JavaScript

- Type aliases are purely in the type system, you cannot reference them in runtime code.

```ts
type CustomType = number | string
// Error: 'CustomType' only refers to a type, but is being used as a value here.
console.log(CustomType)
```

### Combining Type Aliases

- Type alias can reference other type alias.

```ts
type ID = number | string
type MayBeID = ID | null | undefined
```
