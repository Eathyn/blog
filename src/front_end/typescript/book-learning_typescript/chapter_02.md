---
date: 2022-10-04
category: TypeScript
tag:
- Book - Learning TypeScript
- chapter 02
---

# The Type System

## What's in A Type?

### Type Systems

- A type system is the set of rules for how a programming language understands what types the constructs in a program may have.

## Type Annotations

- The variable will be inferred to `any` type when that variable doesn't have initial value.

```ts
let a // let a:any
```

- Much of TypeScript’s type checking can’t be applied to `any` typed values because they don’t have known types to be checked.

- Type annotation: TypeScript provides a syntax for declaring the type of a variable without having to assign it an initial value.

```ts
// 'string' is a type annotation
let text: string
```
### Unnecessary Type Annotations

- The following type annotation is redundant because TypeScript could already infer the type

```ts
let text: string = 'hello'
```
