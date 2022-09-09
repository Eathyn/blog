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
