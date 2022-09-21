# Declaration Files

- TypeScript projects need a way to be told the type shapes of environment-specific features such as global variables and APIs. A project running in, say, Node.js might have access to built-in Node modules not available in browsers—and vice versa.
- TypeScript allows declaring type shapes separately from their implementation.
- Type declarations are typically written in files whose names end with the `.d.ts` extension, known as declaration files.

## Declaration Files

- `.d.ts` files contain only descriptions of available runtime values, interfaces, modules, and general types. They cannot contain any runtime code that could be compiled down to JavaScript.

_person.d.ts_

```ts
// ok
export interface Person {
  name: string;
  age: number;
}

// TS1046: Top-level declarations in .d.ts files must start with either a 'declare' or 'export' modifier.
let a = true
if (a) {
  console.log(1)
} else {
  console.log(2)
}
```

- Declaration files can be imported just like any other source TypeScript file.

_person.d.ts_

```ts
export interface Person {
  name: string;
  age: number;
}
```

_index.ts_

```ts
import { Person } from './person'

const person: Person = {
  name: 'eathyn',
  age: 25,
}
```

- Declaration files create what’s known as an ambient context, meaning an area of code where you can only declare types, not values.

## Declaring Runtime Values

- Although definition files may not create runtime values such as functions or variables, they are able to declare that those constructs exist with the `declare` keyword. Doing so tells the type system that some external influence—such as a `<script>` tag in a web page—has created the value under that name with a particular type.
- Declaring a variable with `declare` uses the same syntax as a normal variable declaration, except an initial value is not allowed.

_test.d.ts_

```ts
// TS1046: Top-level declarations in .d.ts files must start with either a 'declare' or 'export' modifier.
let a1: string

// ok
declare let a2: string

// TS1039: Initializers are not allowed in ambient contexts.
declare let a3: string = 'hello'
```

- Functions and classes are also declared similarly to their normal forms, but without the bodies of functions or methods.

_test.d.ts_

```ts
// TS1183: An implementation cannot be declared in ambient contexts.
declare function f1() {}

// ok
declare function f2()

declare class MyClass {
  // TS1183: An implementation cannot be declared in ambient contexts.
  f1() {}

  // ok
  fn2()
}
```

- TypeScript’s implicit `any` rules work the same for functions and variables declared in ambient contexts as they do in normal source code. Explicit return type annotations are generally the only way to stop them from implicitly being type `any`.

```ts
// return type: any
declare function f1()

// return type: string
declare function f2(): string
```

- The `declare` keyword can be used outside of declaration files

```ts
declare let a: string
```

- While type shapes such as interfaces are allowed with or without a `declare` in `.d.ts` definition files, runtime constructs such as functions or variables will trigger a type complaint without a `declare`.

```ts
// ok
declare interface InterfaceOne {}

// ok
interface InterfaceTwo {}

// ok
declare function f1(): string

// TS2391: Function implementation is missing or not immediately following the declaration.
function f2(): string
```

### Global Values

- Because TypeScript files that have no import or export statements are treated as scripts rather than modules, constructs—including types—declared in them are available globally.

_globals.d.ts_

```ts
declare var version: number
```

_index.ts_

```ts
function log() {
  global.version = 1
  console.log(global.version) // 1
  console.log(version) // 1
}

log()
```

_command to compile TS code_

```bash
npx ts-node --files .\index.ts
```

### Global Interface Merging

- 

_types_a.ts.d_

```ts
interface Person {
  name: string;
}
```

_types_b.ts.d_

```ts
interface Person {
  grade: number;
}
```

_index.ts_

```ts
// ok
let person1: Person = {
  name: 'eathyn',
  age: 25,
}

// TS2741: Property 'age' is missing in type '{ name: string; }' but required in type 'Person'.
let person2: Person = {
  name: 'eaven',
}
```

_command_

```bash
npx ts-node --files .\src\index.ts
```

## Refs

- [Global Values](https://bobbyhadz.com/blog/typescript-declare-global-variable)
