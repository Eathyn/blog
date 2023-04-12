---
date: 2022-11-29
category: TypeScript
tag:
- Book - Learning TypeScript
- chapter 07
---

# Interfaces

- Interfaces are in many ways similar to aliased object types but are generally preferred for their more readable error messages, speedier compiler performance, and better interoperability with classes.

## Type Aliases Versus Interfaces

- interfaces can “merge” together to be augmented — a feature particularly useful when working with third-party code such as built-in globals or npm packages.
- interfaces can be used to type check the structure of class declarations while type aliases cannot.
- interfaces are generally speedier for the TypeScript type checker to work with.
- interfaces' error messages are more likely to be readable in hard edge cases.

- TypeScript developers who prefer semicolons generally put them after type aliases and not after interfaces.

```ts
type Person1 = {
  name: string;
  age: number;
};

interface Person2 {
  name: string;
  age: number;
}
```

- I generally recommend using interfaces whenever possible (i.e., until you need features such as
  union types from type aliases).

## Types of Properties

### Optional Properties

```ts
type Person = {
  name: string,
  age?: number, // age is optional
}
```

### Read-Only Properties 

- Adding `readonly` before properties

```ts
interface Person {
  readonly name: string,
}

const p: Person = {
  name: 'eathyn'
}

// error: Cannot assign to 'name' because it is a read-only property.
p.name = 'eaven'
```

- Read-only properties only protect from modification during development with the TypeScript type
  checker.

### Functions and Methods

- TypeScript provides two ways of declaring interface members as functions:
  - method syntax
  - property syntax

```ts
interface Person {
  name: string,
  age: number,
  getInfoV1(): string; // method syntax
  getInfoV2: () => string; // property syntax
}

const p1: Person = {
  name: 'eathyn',
  age: 25,
  getInfoV1(): string {
    return `${this.name}-${this.age}`
  },
  getInfoV2: () => {
    return 'hello'
  },
}
```

- Adding `?` before `:` to indicate the method is optional.

```ts
interface Person {
  optionFnV1?: () => void;
  optionFnV2?(): void;
}
```

- Differences between method and property declarations
  - Methods cannot be declared as readonly; properties can.
  - Interface merging (covered later in this chapter) treats them differently.
  - Some operations performed on types treat them differently.

- Recommend
  - Use a method function if you know the underlying function may refer to `this`.
  - Use a property function otherwise.

### Call Signature

- Interfaces and object types can declare call signatures, which is a type system description of how a value may be called like a function.
- Only values that may be called in the way the call signature declares will be assignable to the interface.
- A call signature looks similar to a function type, but with a `:` colon instead of an `=>` arrow.

```ts
type FunctionAlias = (input: string) => number;

interface CallSignature {
  (input: string): number;
}

const functionAlias: FunctionAlias = (input) => input.length
const callSignature: CallSignature = (input) => input.length
```

- Call signatures can be used to describe functions that additionally have some user-defined property on them.

```ts
interface FnWithCount {
  count: number;
  (): void;
}

function f1() {}
f1.count = 0
// works
const fn1: FnWithCount = f1

function f2() {}
// Property 'count' is missing in type '() => void' but required in type 'FnWithCount'. 
const fn2: FnWithCount = f2
```

### Index Signature

- We can use index signature when we don't know the property name of an object.

```ts
interface Person {
  [i: string]: number,
}

const prop = Math.randow() > 0.5 ? 'age' : 'garde'
const p1: Person = {
  prop: 1,
}
```

- All named properties must be assignable to the index signature's type.

```ts
interface Person {
  age: number; // Property 'age' of type 'number' is not assignable to 'string' index type 'string'.
  [i: string]: string;
}
```

- As long as the named property’s type is assignable to the index signature’s, TypeScript will
  allow it.

```ts
interface Student {
  [i: string]: number;
}

const s: Student = {
  age: 25,
  grade: 4,
}
```

- The `number` type index signature must be assignable to the `string` type index signature.

```ts
interface Person {
  [i: number]: number; // 'number' index type 'number' is not assignable to 'string' index type 'string'.
  [i: string]: string;
}
```

### Nested Interfaces

```ts
interface Student {
  name: Name;
  grade: number;
}

interface Name {
  firstName: string;
  lastName: string;
}

const s: Student = {
  name: {
    firstName: 'eathyn',
    lastName: 'zakas',
  },
  grade: 4,
}
```

## Interface Extensions

- The derived interface has all members of the base interface.

```ts
interface Person {
  name: string;
  age: number;
}

interface Student extends Person {
  grade: number;
}

const s: Student = {
  name: 'eathyn',
  age: 25,
  grade: 4,
}
```

### Overridden Properties

- The derived interface's member must be assignable to the overridden member of the base interface.

```ts
interface Person {
  name: string | null;
}

interface Student extends Person {
  // Type 'number' is not assignable to type 'string'.
  name: number;
  
  // ok
  // number: string;
}
```

### Extending Multiple Interfaces

- Interface can extend multiple interfaces.
- Derived interface has member of all interfaces.

```ts
interface Animal {
  canMove: boolean;
}

interface Person {
  name: string;
}

interface Student extends Animal, Person {
  grade: number;
}

const s: Student = {
  canMove: true,
  name: 'eathyn',
  grade: 4,
}
```

## Interface Merging

- Multiple same name interface in the same scope will merge into one bigger interface which holds all members of interfaces.

```ts
interface Person {
  name: string;
}

interface Person {
  age: number;
}

// Equivalent To:
// interface Person {
//   name: string;
//   age: number;
// }
```

- Interface merging is particularly useful for augmenting interfaces from external packages or built-in global interfaces.

### Member Naming Conflicts

- If a property is already declared in an interface, a later merged interface must use the same type.

```ts
interface Person {
  name: string;
}

interface Person {
  // Property 'name' must be of type 'string', but here has type 'number'.
  name: number;
}
```

```ts
interface MergedProperties {
  same: (input: string) => string;
  different: (input: number) => string;
}

interface MergedProperties {
  same: (input: string) => string;
  // Property 'different' must be of type '(input: number) => string'
  different: (input: string) => string;
}
```

- If two same name interface define two same name method, a function overload will be created for that method.

```ts
interface MergedMethods {
  different(input: number): string;
}

interface MergedMethods {
  different(input: string): number; // ok
}

const obj: MergedMethods = {
  different: fn,
}

function fn(input: number): string;
function fn(input: string): number;
function fn(input: number | string): string | number {
  if (typeof input === 'number') {
    return 'hello'
  } else {
    return 100
  }
}

console.log(obj.different(0))
console.log(obj.different('test'))
```
