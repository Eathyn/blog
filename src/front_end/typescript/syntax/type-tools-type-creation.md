---
date: 2024-05-03
---

# Type Tools - Type Creation

## Type Alias

> Ref: [TypeScript 全面进阶指南](https://juejin.cn/book/7086408430491172901?scrollMenuIndex=1): 第七章

类型别名的作用主要是对一组类型或一个特定类型结构进行封装，以便于在其它地方进行复用：

```ts
type StatusCode = 100 | 200 | 300 | 400 | 500
let code: StatusCode = 100
```

工具类型就是类型别名加上泛型：

```ts
type Factory<NewType> = NewType | number | string
type FactoryWithBoolean = Factory<boolean>
```

## Union and Intersection Type

### Union Type

> Ref: [TypeScript 全面进阶指南](https://juejin.cn/book/7086408430491172901?scrollMenuIndex=1): 第七章

联合类型（union type）表示只需要符合联合类型中的一个类型。例如 A | B 只需要实现 A 或 B 即可：

```ts
type Type = number | string
let a: Type = 1
let b: Type = ''
```

> Ref: ChatGPT

在联合类型中，never 类型会被忽略，因为在联合类型中 never 代表没有值或空集：

```ts
type TypeA = string | never // string
type TypeB = unknown | never // unknown
type TypeC = any | never // any
```

### Intersection Type

交叉类型（intersection type）表示需要符合交叉类型中的所有类型。例如 A & B 需要同时实现 A 和 B：

```ts
interface NameStructure  {
  name: string
}

interface AgeStructure {
  age: number
}

type Person = NameStructure & AgeStructure

const p1: Person = {
  name: 'john',
  age: 25,
}

// TS2322: Type { name: string; } is not assignable to type Person
// Property age is missing in type { name: string; } but required in type AgeStructure
const p2: Person = {
  name: 'john',
}

// TS2322: Type { age: number; } is not assignable to type Person
// Property name is missing in type { age: number; } but required in type NameStructure
const p3: Person = {
  age: 25,
}
```

如果交叉类型的操作对象是不同的原始类型，那么结果是 `never` 类型。因为无法同时满足不同的原始类型，这也是 `never` 作为 bottom type 的意义，描述根本不存在的类型：

```ts
// type Type = never
type Type = string & boolean
```

## Index Type

### Index Signature

> Ref: [why index signature](https://dmitripavlutin.com/typescript-index-signatures/#1-why-index-signature)

当你不能确定对象有哪些具体的属性，但是能确定对象的属性类型和属性值类型时，可以使用索引签名描述（index signature）这个对象的类型。例如：我不能确定 `Person` 类型的对象有哪些具体的属性，但是我能确定 `Person` 类型的对象的属性类型都是 `string`，属性值类型是 `string` 或 `number`，那么我可以用索引签名这样表示类型：

```ts
interface Person {
  [key: string]: string | number
}

const person: Person = {
  name: 'John',
  age: 25,
}
```

> Ref: [types of key of index signature](https://dmitripavlutin.com/typescript-index-signatures/#2-index-signature-syntax:~:text=The%20key%20of%20the%20index%20signature%20can%20only%20be%20a%20string%2C%20number%2C%20or%20symbol.%20Other%20types%20are%20not%20allowed%3A)

索引签名的键的类型只能是 `string`、`number` 或 `symbol`，因为 JavaScript 对象的属性只能是这三种类型。

> Ref: [TypeScript 全面进阶指南](https://juejin.cn/book/7086408430491172901?scrollMenuIndex=1): 第七章

索引签名（index signature）用于在接口或类型别名中声明一个键值类型一致的类型结构。下面代码中的 `[key: string]: string` 表示索引签名：

```ts
interface AllStringType {
  [key: string]: string
}
```

因为在 JavaScript 中，字符串类型、数字类型和 symbol 类型的对象属性最终都会被转化为字符串，所以以下 ts 代码不会报错：

```ts
interface AllStringType {
  [key: string]: string
}

const obj: AllStringType = {
  'x': 'a',
  100: 'b',
  [Symbol('y')]: 'c',
}
```

> Ref: [在索引签名中声明可选项](https://basarat.gitbook.io/typescript/type-system/index-signatures#using-a-limited-set-of-string-literals)

使用 `?` 操作符可以在索引签名中声明可选项：

```ts
type Index = 'a' | 'b' | 'c'

type RequiredProp = {
  [key in Index]: number
}

type OptionalProp = {
  [key in Index]?: number
}

// TS2739: Type { a: number; } is missing the following properties from type RequiredProp: b, c
const foo: RequiredProp = {
  a: 1
}

const bar: OptionalProp = {
  a: 1
}
```

索引签名可以和具体的键值对类型声明并存，但是具体的键值对类型声明要符合索引签名的声明：

```ts
interface AllStringType {
  [key: string]: string
  propA: string
  // TS2411: Property propB of type number is not assignable to string index type string
  propB: number
}

interface StringOrBooleanType {
  [key: string]: string | boolean
  propA: string
  propB: boolean
}
```

> Ref: [index signature caveat](https://dmitripavlutin.com/typescript-index-signatures/#31-non-existing-properties)

警告1：TypeScript 编译器可能会把不存在的属性的类型推断为索引签名上定义的类型。例如，TypeScript 编译器把 `value` 的类型推断为 `string`，但 `value` 是 `undefined`：

```ts
interface StringByString {
  [key: string]: string
}

const object: StringByString = {}
// value: string
const value = object['notExistingProp']
// undefined
console.log(value)
```

解决这个问题的方法是将 `undefined` 添加到索引签名的类型值：

```ts
interface StringByString {
  [key: string]: string | undefined
}

const object: StringByString = {}
// value: string | undefined
const value = object['notExistingProp']
// undefined
console.log(value)
```

> Ref: [index signature vs Record](https://dmitripavlutin.com/typescript-index-signatures/#4-index-signature-vs-record)

索引签名和 Record 的区别是：索引签名不支持字面量类型，Record 支持字面量类型：

```ts
interface NumberByString {
  // TS1337: An index signature parameter type cannot be a literal type or generic type.
  [key: 'a' | 'b']: number
}

const obj1: NumberByString = { a: 1 }
const obj2: Record<'a' | 'b', number> = {
  a: 1,
  b: 2,
}
```

> Ref: [`Object.keys` 在 TypeScript 中的问题和解决方式](https://blog.logrocket.com/how-to-use-keyof-operator-typescript/#:~:text=when%20we%20iterate%20the%20keys%20and%20access%20the%20object%20property%20by%20the%20key%2C%20TypeScript%20throws%20an%20error%20when%20the%20TypeScript%20strict%20mode%20is%20turned%20on)

当开启 `noImplicitAny` 时，使用 `Object.keys` 可能会报错：

::: code-tabs
@tab tsconfig.json

```json
{
  "compilerOptions": {
    "noImplicitAny": true
  }
}
```

@tab index.ts
```ts
const user = {
  name: 'John',
  age: 25,
}

Object.keys(user).forEach((key) => {
  // TS7053: Element implicitly has an any type because expression of type string can't be used to index type { name: string; age: number; }
    // No index signature with a parameter of type string was found on type { name: string; age: number; }
  console.log(user[key])
})
```
:::

上述代码报错的原因是因为 TypeScript 推断 `user` 的类型是 `{name: string, age: number}`，并把 `key` 的类型推断为 `string`。因为 `string` 不属于 `'name' | 'age'`，所以 TypeScript 就报错了。

（**解决方式一**）将 `key` 的类型 `string` 断言为 `user` 的键（即 `'name' | 'age'`）：

```ts
const user = {
  name: 'John',
  age: 25,
}

// "name" | "age"
type userKeyType = keyof typeof user

Object.keys(user).forEach((key) => {
  console.log(user[key as userKeyType])
})
```

（**解决方式二**）将 `Object.keys` 的返回类型由 `string[]` 改为 `(keyof T)[]`：

```ts
const user = {
  name: 'John',
  age: 25,
}

interface ObjectConstructor {
  keys<T>(o: T): (keyof T)[]
}

Object.keys(user).forEach((key) => {
  console.log(user[key])
})
```

### keyof Type Operator

> Ref: [TypeScript 全面进阶指南](https://juejin.cn/book/7086408430491172901?scrollMenuIndex=1): 第七章

`keyof` 可以将对象中的键转化为对应的字面量类型，然后再组合成联合类型。注意：字符串或 Symbol 类型的键会转成字符串字面量，而数字类型的键会转成数字类型的字面量：

```ts
const testSymbol = Symbol('test')

interface A {
  name: string
  age: number
  1: string
  [testSymbol]: string
}

// "name" | "age" | 1 | "testSymbol"
type B = keyof A
```

> Ref: [对拥有索引签名的对象使用 keyof](https://www.typescriptlang.org/docs/handbook/2/keyof-types.html#:~:text=If%20the%20type%20has%20a%20string%20or%20number%20index%20signature%2C%20keyof%20will%20return%20those%20types%20instead%3A)

对拥有索引签名的对象使用 `keyof` 时，返回索引的类型：

```ts
interface Type {
  [key: number]: string
}

// Keys: number
type Keys = keyof Type

const a: Keys = 1
const b: Keys = 'x' // TS2322: Type string is not assignable to type number
```

> Ref: [对拥有 string 类型的索引签名的对象使用 keyof](https://www.typescriptlang.org/docs/handbook/2/keyof-types.html#:~:text=JavaScript%20object%20keys%20are%20always%20coerced%20to%20a%20string)

对拥有 string 类型的索引签名的对象使用 `keyof` 时，返回 `string | number`。因为在 JavaScript 中，number 类型的键会被转化为 string 类型的键：

```ts
interface Type {
  [key: string]: boolean
}

// Keys: string | number
type Keys = keyof Type

const a: Keys = 1
const b: Keys = 'x'
```

> Ref: [keyof + typeof](https://blog.logrocket.com/how-to-use-keyof-operator-typescript/#using-keyof-typeof-pattern)

`keyof` 只能获取类型对象（例如 interface, type）的属性，而无法获取对象实例的键：

```ts
interface User {
  name: string
  age: number
}

type Person = {
  name: string
  age: number
}

const student = {
  name: 'John',
  age: 25
}

// "name" | "age"
type UserKeys = keyof User
// "name" | "age"
type PersonKeys = keyof Person
// TS2749: student refers to a value, but is being used as a type here.
type StudentKey = keyof student
```

`keyof` 配合 `typeof` 可以获取对象实例的键：

```ts
const student = {
  name: 'John',
  age: 25
}

// "name" | "age"
type StudentKeys = keyof typeof student
```

> Ref: [keyof + generics](https://refine.dev/blog/typescript-keyof/#using-typescript-keyof-in-generic-types)

`keyof` 可以结合泛型使用：

```ts
const user = {
  name: 'John',
  age: 25,
}

function getProp<T, K extends keyof T>(obj: T, prop: K) {
  console.log(obj[prop])
}

function setProp<T, K extends keyof T>(obj: T, prop: K, value: T[K])  {
  obj[prop] = value
}
```

> Ref: [keyof + index signature + generics](https://refine.dev/blog/typescript-keyof/#typescript-keyof-with-generic-type-mappers)

`keyof` 结合索引签名和泛型一起使用：

```ts
type User = {
  name: string
  age: number
}

type ExtendedType<T> = {
  [K in keyof T]: {
    value: T[K]
    description: string
  }
}

/**
 * {
 *  name: { value: string, description: string },
 *  age: { value: number, description: string },
 * }
 * */
type ExtendedUser = ExtendedType<User>

const user: User = {
  name: 'John',
  age: 25,
}

const extendedUser: ExtendedUser = {
  name: {
    value: 'John',
    description: 'user name',
  },
  age: {
    value: 25,
    description: 'user age',
  },
}
```

> Ref: [keyof + index signature + as + generics](https://refine.dev/blog/typescript-keyof/#typescript-keyof-a-remapped-type-example)

```ts
interface User {
  name: string
  age: number
}

type PropGetterMapper<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: (obj: T) => T[K]
}

// {
//  getName: (obj: User) => User["name"],
//  getAge: (obj: User) => User["age"],
// }
type UserPropGetters = PropGetterMapper<User>

const userPropGetters: UserPropGetters = {
  getName(user: User) {
    return user.name
  },
  getAge(user: User) {
    return user.age
  },
}

const user = {
  name: 'John',
  age: 25,
}

userPropGetters.getName(user) // John
userPropGetters.getAge(user) // 25
```

> Ref: [keyof in set function](https://dev.to/this-is-learning/typescript-tips-tricks-keyof-4an0)

Q: 为什么 `setUserProp2` 会报错？

```ts
interface User {
  name: string
  age: number
}

function setProp<T extends object, K extends keyof T>(obj: T, key: K, val: T[K]) {
  obj[key] = val
}

function setUserProp<K extends keyof User>(user: User, key: K, val: User[K]) {
  user[key] = val
}

type UserKeys = keyof User
function setUserProp2(user: User, key: UserKeys, val: User[UserKeys]) {
  // TS2322: Type string | number is not assignable to type never
    // Type string is not assignable to type never
  user[key] = val
}
```

### Indexed Access Type

> Ref: [TypeScript 全面进阶指南](https://juejin.cn/book/7086408430491172901?scrollMenuIndex=1): 第七章

在 TypeScript 中，对象值的类型可以通过 `对象类型[对象键的类型]` 获取，这种方式称为索引访问类型：

```ts
interface Foo {
  [key: string]: number
}
// number
type FooValType = Foo[string]
```

同理，下面的 `propA` 和 `propB` 也属于字符串字面量类型，而不是 JavaScript 字符串值：

```ts
interface Type {
  propA: string
  propB: number
}

// string
type A = Type['propA']
// number
type B = Type['propB']
```

使用字面量联合类型进行索引类型访问时，其结果是将联合类型每个分支进行索引类型访问，然后将这些结果联合起来：

```ts
interface Type {
  propA: string
  propB: number
}

// string | number
type B = Type['propA' | 'propB']
```

当然，我们也可以用 `keyof` 简化这个过程：

```ts
interface Type {
  propA: string
  propB: number
}

// string | number
type B = Type['propA' | 'propB']

// string | number
type C = Type[keyof Type]
```

如果没有定义索引签名，那么只能通过字面量类型访问：

```ts
interface Foo {
  propA: boolean
}
// TS2537: Type Foo has no matching index signature for type string
type FooValType1 = Foo[string]
// ok
type FooValType2 = Foo['propA']
```

> Ref: [`类型数组[number]` 获取数组项的类型](https://www.allthingstypescript.dev/p/indexed-access-types-in-typescript)

通过 `类型数组[number]` 可以获取数组项的类型：

```ts
type Persons = {
  name: string
  age: number
  address: {
    country: string
    province: string
    city: string
  }
}[]

// {name: string, age: number, address: {country: string, province: string, city: string}}
type Person = Persons[number]

// {country: string, province: string, city: string}
type Address = Persons[number]['address']
```

> Ref: [`typeof 数组实例[number]` 获取数组项的类型](https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html#:~:text=Another%20example%20of%20indexing%20with%20an%20arbitrary%20type%20is%20using%20number%20to%20get%20the%20type%20of%20an%20array%E2%80%99s%20elements.)

通过 `typeof 数组实例[number]` 可以获取数组项的类型：

```ts
const persons = [
  { name: 'John', age: 25 },
  { name: 'Eaven', age: 30 },
]

// {name: string, age: number}
type Person = typeof persons[number]
const person: Person = {
  name: 'John',
  age: 25,
}
```

数组项的类型可能不同，所以 `typeof 数组[number]` 的返回值是数组项类型的并集：

```ts
const persons = [
  { name: 'John', age: 25 },
  { name: 'Eaven', hobby: 'cs' },
]

// {name: string, age: number} | {name: string, hobby: string}
type Person = typeof persons[number]

const person1: Person = {
  name: 'John',
  age: 25,
}
const person2: Person = {
  name: 'Eavan',
  hobby: 'cs'
}
```

> Ref: [索引访问类型只能接受类型](https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html#:~:text=You%20can%20only%20use%20types%20when%20indexing)

索引访问类型只能接受类型，可以使用别名，但不能使用变量：

```ts
interface Person {
  name: string
  age: number
}

type key1 = 'name'
// string
type NameType1 = Person[key1]

const key2 = 'name'
// TS2538: Type key2 cannot be used as an index type.
  // TS2749: key2 refers to a value, but is being used as a type here.
type NameType2 = Person[key2]
```

## Mapped Type

> Ref: [TypeScript 全面进阶指南](https://juejin.cn/book/7086408430491172901?scrollMenuIndex=1): 第七章

映射类型（mapped type）的作用是基于键名映射到键值类型，经常用于复制类型或者在某个类型的基础上生成新的类型。

> Ref: None

映射类型可以用来复制类型：

```ts
type Person = {
  name: string
  age: number
}

// {name: string, age: number}
type ClonePerson = {
  [K in keyof Person]: Person[K]
}
```

> Ref: None

映射类型结合泛型：

```ts
type TypeA = {
  x: number
}

type TypeB = {
  y: string
}

type Clone<T> = {
  [K in keyof T]: T[K]
}

// {x: number}
type TypeAClone = Clone<TypeA>
// {y: string}
type TypeBClone = Clone<TypeB>
```

> Ref: [+/- modifier with readonly/optional](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#mapping-modifiers)

`+readonly` 表示将属性设置为 `readonly`；`-readonly` 表示移除属性的 `readonly`：

```ts
type TypeA = {
  readonly x: number
}

// {readonly x: number}
type TypeB = {
  +readonly [K in keyof TypeA]: TypeA[K]
}

// {x: number}
type TypeC = {
  -readonly [K in keyof TypeA]: TypeA[K]
}
```

`+?` 表示将属性设置为可选项；`-?` 表示将属性设置为必填项：

```ts
type TypeA = {
  x?: number
}

// {x?: number}
type TypeB = {
  [K in keyof TypeA]+?: TypeA[K]
}

// {x: number}
type TypeC = {
  [K in keyof TypeA]-?: TypeA[K]
}
```

> [mapped type + as + Capitalize](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#key-remapping-via-as)

映射类型结合 `as` 与 `Capitalize` 可以修改属性类型名：

```ts
type Person = {
  name: string
  age: number
}

// {
//  getName: () => Person["name"],
//  getAge: () => Person["age"]
// }
type PersonGetter = {
  [K in keyof Person as `get${Capitalize<string & K>}`]: () => Person[K]
}
```

> Ref: [mapped type + as + Exclude](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#key-remapping-via-as:~:text=You%20can%20filter%20out%20keys%20by%20producing%20never%20via%20a%20conditional%20type)

映射类型结合 `as` 与 `Exclude` 可以删除属性类型名：

```ts
type Person = {
  name: string
  age: number
}

// {age: number}
type RemoveAgeField = {
  [K in keyof Person as Exclude<K, 'name'>]: Person[K]
}
```

> Ref: [mapped type + as + conditional type](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#further-exploration)

映射类型结合 `as` 与条件类型可以做条件判断：

```ts
type TypeA = {
  x: string
  y: string
}

type TypeB = {
  y: string
  z: string
}

type TypeC<T> = {
  [K in keyof T]: T extends { x: string } ? true : false
}

// { x: true, y: true }
type TypeATest = TypeC<TypeA>

// { y: false, z: false }
type TypeBTest = TypeC<TypeB>
```
