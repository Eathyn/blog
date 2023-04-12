---
date: 2022-10-23
category: TypeScript
tag:
- Book - Learning TypeScript
- chapter 05
---

# Function

## Function Parameters

- TypeScript will infer the type of parameter to `any` if no type annotation for parameter.

```ts
// a: any
function f(a) {}
```

- We can add type annotation to function parameters.

```ts
function f(a: string) {
  console.log(a)
}
```

### Required Parameters

- TypeScript assumes that all parameters declared on a function are required.

```ts
function f(a: string, b: number) {}

// works
f('a', 1)

// error: need 'b'
f('a')
```

### Optional Parameters

- TypeScript allows annotating a parameter as optional by adding a `?` before the `:` in its type annotation

```ts
function f(a: string, b?: number) {}

// works
f('a', 1)

// also works
f('a')
```

- Optional parameter is not equal to `<type> | undefined`. `<type>` or `undefined` must explicitly be specified.

```ts
function f1(a: string, b?: number) {}

// works
f1('a')

function f2(a: string, b: number | undefined) {}

// error: Expected 2 arguments, but got 1.
f2('a')

// works
f2('a', undefined)
f2('a', 1)
```

- Optional parameter must be the last parameter.

```ts
// A required parameter cannot follow an optional parameter.
function f(a?: string, b: number) {}

// works
function f(b: number, a?: string) {}
```

### Default Parameters

- If a parameter has a default value and doesn’t have a type annotation, TypeScript will infer the parameter’s type based on that default value.

```ts
// type of 'a' is inferred to 'number'
function f(a = 1) {}

// Argument of type 'string' is not assignable to parameter of type 'number'
f('hello')
```

### Rest Parameters

- The `...` spread operator may be placed on the last parameter in a function declaration.
- TypeScript allows declaring the types of these rest parameters.

```ts
function f(a: number, ...rest: number[]) {}
```

## Return Types

- TypeScript will infer the return type when it knows the return value.

```ts
// function fn(): number
function fn() {
  return 1
}
```

- TypesScript will infer the return type to be a union of all the possible returned types.

```ts
// return type: number | string
function fn() {
  return Math.random() > 0.5 ? 1 : 'a'
}
```

### Explicit Return Types

- 一般不建议显式声明函数的返回类型，但有些情况下可以指定:
  - 让有多个可能的返回值的函数强制返回一个类型
  - TypeScript 对递归函数的类型推断可能失效
  - 加快 TypeScript 的类型检测速度

- Specifying return type in function and arrow function.

```ts
function fn1(): number {
  return Math.random()
}

const f2 = (): number => Math.random()
```

- If a `return` statement in a function returns a value not assignable to the function’s return type, TypeScript will give an assignability complaint.

```ts
// error: Type 'string' is not assignable to type 'number'.
function fn():number {
  return 'a'
}
```

## Function Types

- Function type syntax looks similar to an arrow function, but with a type instead of the body.

```ts
type cbType = (a: number, b: string) => string

function fn(callback: cbType) {
  const a = 1
  const b = 'h'
  callback(a, b)
}

function callback1(a: number, b: string) {
  return `${a}-${b}`
}

function callback2(a: number, b: number) {
  return `${a}-${b}`
}

// works
fn(callback1)

// error
fn(callback2)
```

### Function Type Parentheses

- We must add parentheses when using function type for creating union type.

```ts
// the type is the uion of a function and a number 
type cbType = (() => string) | number

// equivalent to : () => (string | number)
// the type is a function returns a string or number
type cbType2 = () => string | number
```

### Parameter Type Inferences

- TypeScript can infer the types of parameters in a function provided to a location with a declared type.

```ts
let fn: (a: number) => number

// the type of 'a' is inferred to 'number'
fn = function (a) {
  return a
}
```

- Functions passed as arguments to parameters with function parameter types will have their parameter types inferred as well.

```ts
const arr = ['a', 'b', 'c']

// the type of 'item' is inferred to 'string'
// the type of 'index' is inferred to 'number'
arr.forEach((item, index) => {
  console.log(`${index}-${item}`)
})
```

### Function Type Aliases

- We can set type alias for function type.

```ts
type StringToNumber = (input: string) => number

let fn1: StringToNumber = (input: string) => {
  return Number(input)
}
```

## More Return Types

### Void Returns

- We can use `void` to indicate the function returns nothing.

```ts
function fn(): void {
  console.log('hello')
}
```

- `void` means the return type of a function will be ignored, while `undefined` is a literal value to be returned. Trying to assign a value of type `void` to a value whose type instead includes `undefined` is a type error

```ts
function fn(): void  {}
// error: Type 'void' is not assignable to type 'undefined'.
const lazyValue: undefined = fn()
```

### Never Returns

- Never-returning functions are those that always throw an error or run an infinite loop.

```ts
function fail(message: string): never {
  throw new Error(`Failure: ${message}`)
}

function fn() {
  const success = false
  if (!success) {
    fail('something is wrong!')
  }
  // do something...
}
```

- `void` is for a function that returns nothing. `never` is for a function that never returns.

## Function Overloads

- overload signatures: declaring different versions of the function’s name, parameters, and return types multiple times before one final implementation signature and the body of the function.

```ts
function createDate(timestamp: number): Date;
function createDate(month: number, day: number, year: number): Date;
function createDate(monthOrTimestamp: number, day?: number, year?: number) {
  return day === undefined || year === undefined
    ? new Date(monthOrTimestamp)
    : new Date(year, monthOrTimestamp, day)
}

createDate(1000000) // works
createDate(1, 2,3) // works
createDate(1, 2) // error: No overload expects 2 arguments
```

- Function overloads are generally used as a last resort for complex, difficult-to-describe function types. It’s generally better to keep functions simple and avoid using function overloads when possible.

### Call-Signature Compatibility

- The implementation signature has to be compatible with all of the
  overload signatures.

```ts
function fn(a: number): void; // overload signature
function fn(a: number, b: string): void; // overload signature
function fn(callback: () => string): void; // overload signature (not compatible with implementation signature)
function fn(a: number, b?: string) { // implementation signature
  console.log('run fn')
}
```

