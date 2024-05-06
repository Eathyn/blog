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

> Ref: [TypeScript 全面进阶指南](https://juejin.cn/book/7086408430491172901?scrollMenuIndex=1): 第七章

索引签名（index signature）用于在接口或类型别名中声明一个键值类型一致的类型结构。`[]` 表示索引签名：

```ts
interface AllStringType {
  [key: string]: string
}

type AllNumberType = {
  [key: string]: number
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
