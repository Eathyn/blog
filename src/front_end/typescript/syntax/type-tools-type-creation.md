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

> Ref: [TypeScript 全面进阶指南](https://juejin.cn/book/7086408430491172901?scrollMenuIndex=1): 第七章

联合类型（union type）表示只需要符合联合类型中的一个类型。例如 A | B 只需要实现 A 或 B 即可：

```ts
type Type = number | string
let a: Type = 1
let b: Type = ''
```

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

### Search Index Type

> Ref: [TypeScript 全面进阶指南](https://juejin.cn/book/7086408430491172901?scrollMenuIndex=1): 第七章

`keyof` 可以将对象中的键转化为对应的字面量类型，然后再组合成联合类型。注意：字符串或 Symbol 类型的键会转成字符串字面量，而数组类型的键会转成数字类型的字面量：

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

### Access Index Type

> Ref: [TypeScript 全面进阶指南](https://juejin.cn/book/7086408430491172901?scrollMenuIndex=1): 第七章

在 TypeScript 中，可以通过访问对象属性类型的方式获得对象属性值的类型：

```ts
interface A {
  [key: string]: number
}

// number
type ValueType = A[string]
```

还可以通过访问接口的属性字面量获得属性值的类型：

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

## Mapped Type

> Ref: [TypeScript 全面进阶指南](https://juejin.cn/book/7086408430491172901?scrollMenuIndex=1): 第七章

映射类型（mapped type）的作用是基于键名映射到键值类型。以下代码表示创建 `StringedType`，然后把 `TypeA` 的所有键名复制到 `StringedType`，最后把 `StringedType` 的所有键值设置为 `string` 类型。`K in` 就是映射类型的语法：

```ts
interface TypeA {
  prop1: string
  prop2: number
  prop3: boolean
  prop4: () => void
}

type TypeB<T> = {
  [K in keyof T]: string
}

// {prop1: string, prop2: string, prop3: string, prop4: string}
type StringedType = TypeB<TypeA>
```

我们还能通过映射类型克隆接口，`T[K]` 可以获取键的值类型：

```ts
interface TypeA {
  prop1: string
  prop2: number
  prop3: boolean
  prop4: () => void
}

type Clone<T> = {
  [K in keyof T]: T[K]
}

// {prop1: string, prop2: number, prop3: boolean, prop4: () => void}
type TypeB = Clone<TypeA>
```

> Ref: ?

使用 `-readonly` 可以将只读属性改为可写属性：

```ts
interface TypeA {
  prop1: string
  readonly prop2: boolean
}

// {prop1: string, prop2: boolean}
type TypeB = {
  -readonly [K in keyof TypeA]: TypeA[K]
}
```

使用 `-?` 可以将可选属性改为必须属性：

```ts
interface TypeA {
  prop1: string
  prop2?: boolean
}

// {prop1: string, prop2: boolean}
type TypeB = {
  [K in keyof TypeA]-?: TypeA[K]
}
```
