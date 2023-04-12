---
date: 2022-11-14
category: TypeScript
tag:
- Book - Learning TypeScript
- chapter 06
---

# Array 

- In TypeScript, array can only restore item of the same type.
- TypeScript infers what type of data a array can restore by type of its initial items.

```ts
const arr = [1, 2]
arr.push(3) // works
arr.push(true) // error
```

## Array Types

- You'd better give arrays type annotations when array variables don't have initial values.

```ts
let arr: number[]
arr = [1, 2, 3]
```

- Array types can also be written in a syntax like `Array<number>` called class generics.

```ts
let arr: Array<number>
arr = [1, 2, 3]
```

### Array and Function Types

```ts
// type is a function returns an array of strings
const fn1: () => string[]

// type is an array of functions that each return a string
const fn2: (() => string)[]
```

### Union-Type Arrays

```ts
// type is either number or an array of string
const fn1: number | string[]
// type is an array of elements that are each either a number or string
const fn2: (string | number)[]
```

### Evolving Any Arrays

- If you don’t include a type annotation on a variable initially set to an empty array, TypeScript will treat the array as evolving any[], meaning it can receive any content.

```ts
// type: any[]
const values = []
values.push('')
values[1] = 1
```

### Multidimensional Arrays

- Two dimensional array

```ts
const arr: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
]
```

- also representable by:

```ts
const arr: (number[])[] = [
  [1, 2, 3],
  [4, 5, 6],
]
```

## Array Members

- TypeScript understands typical index-based access for retrieving members of an array to give back an element of that array’s type.

```ts
const arr1 = [1, 2]
const item1 = arr1[0] // type is number

const arr2 = [1, '2']
const item2 = arr2[0] // type is number or string
```

### Caveat: Unsound Members

- By default, TypeScript assumes all array member accesses return a member of that array.

```ts
const arr = ['a', 'b']
console.log(arr[100].length) // no type error
```

- TypeScript does have a `--noUncheckedIndexedAccess` flag that makes array lookups more restricted and type safe, but it’s quite strict and most projects don’t use it.

```ts
const arr = ['a', 'b']
console.log(arr[100].length) // error: Object is possibly 'undefined'.
```

## Spreads and Rests

### Spreads

- If two arrays of different types are spread together to create a new array, the new array will be understood to be a union type array of elements that are either of the two original types.

```ts
const arr1 = [1, 2]
const arr2 = ['a', 'b']
// type is (number | string)[]
const arr = [...arr1, ...arr2]
```

## Tuples

- tuple: an array with fixed size

```ts
let tuple: [number, string]
tuple = [1, 'a'] // ok
tuple = [1, 'a', 2] // error: Source has 3 element(s) but target allows only 2.
```

### Tuple Assignability

- Variable length array types aren’t assignable to tuple types.

```ts
const arr1 = [1, 'a']
// error: type '(string | number)[]' is not assignable to type '[number, string]'.
const arr2: [number, string] = arr1
```

- Tuples of different lengths are not assignable to each other.

```ts
let tuple1: [number, string] = [1, 'a']
// error: Type '[number, string]' is not assignable to type '[number, string, number]'.
let tuple2: [number, string, number] = tuple1;
```

#### Tuples as rest parameters

- Using spread operator with tuple

```ts
function fn(a: number, b: string) {
  console.log(`${a} - ${b}`)
}

// type is (number, string)[]
const arr = [1, 'a']
// type is [number, string]
const tuple: [number, string] = [1, 'a']

// error: A spread argument must either have a tuple type or be passed to a rest parameter.
fn(...arr)

// ok
fn(...tuple)
```

### Tuple Inferences

```ts
// return type is (number | string)[]
function fn() {
  return [1, 'a']
}
```

- There are two common ways in TypeScript to indicate that a value should be a more specific tuple type instead of a general array type:

#### Explicit tuple types
  
```ts
// return type is [number, string]
function fn(): [number, string] {
  return [1, 'a']
}
```
  
#### Const asserted tuples

- `as const`: const assertion
- `as const` placed after a value
- const assertions tell TypeScript to use the most literal, read-only possible form of the value when inferring its type.

```ts
// return type is readonly [1, "a"]
function fn() {
  return [1, 'a'] as const
}
```

- Read-only tuple cannot be assigned to mutable tuple.

```ts
// Error: The type 'readonly [1, "a"]' is 'readonly'
//        and cannot be assigned to the mutable type '[number, string]'.
const tuple1: [number, string] = [1, 'a'] as const
```

- We cannot modify items of read-only tuple.

```ts
const tuple = [1, 'a'] as const
// Error: Cannot assign to '0' because it is a read-only property.
tuple[0] = 2
```

- Returning read-only tuples for destructuring.

```ts
function fn() {
  return [1, 'a'] as const
}

const [num, str] = fn()
console.log(num) // type is 1
console.log(str) // type is 'a'a
```
