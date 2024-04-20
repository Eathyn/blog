---
date: 2023-06-12
category: TypeScript
---

# Utility Types

## Partial Type

> Reference: [How the TypeScript Partial Type Works](https://dev.to/smpnjn/how-the-typescript-partial-type-works-2klj)

- 将一个类型的所有属性都转变为可选（optional）属性，并生成一个新类型。

```ts {2,3,6}
interface User {
  name: string
  age: number
}

type PartialUser = Partial<User> // {name?: string, age?: number}
```

## Required Type

> Reference: [How the TypeScript Required Type Works](https://dev.to/smpnjn/how-the-typescript-required-type-works-2nlc)

- 将一个类型的所有可选属性都转变为必需（required）属性，并生成一个新类型。

```ts {3,6}
interface User {
  name: string
  age?: number
}

type RequiredUser = Required<User> // {name: string, age: number}
```

## Record Type

> Reference: 
> - [How the TypeScript Record Type Works](https://dev.to/smpnjn/how-the-typescript-record-type-works-1f5m)
> - [Define a list of optional keys for Typescript Record](https://stackoverflow.com/q/53276792/9863318)

Record 可以确保一致性，接收一个键和一个值：

```ts
interface User {
  name: string
  age: number
}

type Country = 'uk' | 'france' | 'india'

let data: Record<Country, User> = {
  uk: { name: 'Jeff', age: 18 },
  france: { name: 'Eaven', age: 19 },
  india: { name: 'John', age: 20 },
}
```

因为 `Record` 的定义是：

```ts
type Record<K extends keyof any, T> = {
    [P in K]: T;
};
```

所以 `Record` 的键是必须的，不是可选的。如果缺少则会报错：

```ts {8-12}
interface User {
  name: string
  age: number
}

type Country = 'uk' | 'france' | 'india'

// TS2741: Property `india` is missing in type
let data: Record<Country, User> = {
  uk: { name: 'Jeff', age: 18 },
  france: { name: 'Eaven', age: 19 },
}
```

有两种方法（参考 [stackoverflow](https://stackoverflow.com/a/53276873/9863318)）可以让 `Record` 的键变为可选：

::: code-tabs
@tab 方法一
```ts {8-10}
// 方法一：参考 Record 的定义，将 key 改为可选
interface User {
  name: string
  age: number
}

type Country = 'uk' | 'france' | 'india'
type PartialRecord<K extends keyof any, T> = {
  [P in K]?: T
}

let data: PartialRecord<Country, User> = {
  uk: { name: 'Jeff', age: 18 },
  france: { name: 'Eaven', age: 19 },
}
```

@tab 方法二
```ts {9-12}
// 方法二：使用 Partial 封装 Record
interface User {
  name: string
  age: number
}

type Country = 'uk' | 'france' | 'india'

let data: Partial<Record<Country, User>> = {
  uk: { name: 'Jeff', age: 18 },
  france: { name: 'Eaven', age: 19 },
}
```
:::

## Readonly Type

> Reference: [How the TypeScript Readonly Type Works](https://dev.to/smpnjn/how-the-typescript-readonly-type-works-2on2)

- 将对象的所有属性都转变为只读（readonly）。

```ts
interface User {
  name: string
}

type UserReadonly = Readonly<User> // {readonly name: string}
```

- `Readonly` 类型对变量不起作用，使用 `const` 可以形成只读变量。

```ts
let age: Readonly<number> = 18
age = 19 // work

const grade = 4
grade = 5 // TS2588: Cannot assign to 'grade' because it is a constant.
```

## Exclude Type

> Reference: [How the TypeScript Exclude Type Works](https://dev.to/smpnjn/how-the-typescript-exclude-type-works-4j1)

- Exclude 类型可以排除联合（union）类型中的某些类型。

```ts
type Country = 'China' | 'Japan' | 'Korea' // "China" | "Japan" | "Korea"
type ExcludeKorea = Exclude<Country, 'Korea'> // "China" | "Japan"
```

- 可以使用 `|` 排除联合类型中的多个类型。

```ts
type Country = 'China' | 'Japan' | 'Korea' // "China" | "Japan" | "Korea"
type OnlyChina = Exclude<Country, 'Korea' | 'Japan'> // "China
```

## Extract Type

> Reference: [How the TypeScript Extract Type Works](https://dev.to/smpnjn/how-the-typescript-extract-type-works-26b0)

- Extract 类型可以将联合类型中的某些类型提取出来，形成一个新类型。

```ts
type Country = 'China' | 'Japan' | 'Korea' // "China" | "Japan" | "Korea"
type onlyChina = Extract<Country, 'China'> // "China"
```

- 可以使用 `|` 提取联合类型中的多个类型。

```ts
type Country = 'China' | 'Japan' | 'Korea' // "China" | "Japan" | "Korea"
type ChinaAndKorea = Extract<Country, 'China' | 'Korea'> // "China" | "Korea"
```

## Omit Type

> Reference: [How the TypeScript Omit Type Works](https://dev.to/smpnjn/how-the-typescript-omit-type-works-56jl)

- Omit 类型可以忽略对象类型中的某些属性，并生成新的类型。

```ts
type User = {
  name: string
  age: number
}

type UserNameOnly = Omit<User, 'age'> // {name: string}
```

## Pick Type

> Reference: [How the TypeScript Pick Type Works](https://dev.to/smpnjn/how-the-typescript-pick-type-works-aph)

- Pick 类型可以挑选出对象类型中的某些属性，并生成新的类型。

```ts
type Student = {
  name: string
  age?: number
  grade: number
}

type Person = Pick<Student, 'name' | 'age'> // {name: string, age?: number}
```

## Parameters Type

> Reference: [How the TypeScript Parameters Type Works](https://dev.to/smpnjn/how-the-typescript-parameters-type-works-49p5)

- Parameters 类型会以元组的形式返回函数的形参类型。

```ts {1,5}
function logPersonInfo(name: string, age: number) {
  console.log(`name: ${name} - age: ${age}`)
}

type ParameterType = Parameters<typeof logPersonInfo> // [string, number]
let parameter: ParameterType = ['Jeff', 18]
logPersonInfo(...parameter)
```

## NonNullable Type

> Reference: [How the TypeScript NonNullable Type Works](https://dev.to/smpnjn/how-the-typescript-parameters-type-works-12h4)

- NonNullable 类型将**联合类型**中的 `null` 和 `undefined` 去除，并返回一个新类型。

```ts
type WithNullable = string | number | null | undefined
type WithoutNullable = NonNullable<WithNullable> // string | number
```

## Return Type

> Reference: [How the TypeScript ReturnType Type Works](https://dev.to/smpnjn/how-the-typescript-returntype-type-works-hao)

- ReturnType 可以获取函数返回值的类型。

```ts {1,2,5}
function sendPersonInfo(name: string, age: number) {
  return { name, age }
}

type PersonInfo = ReturnType<typeof sendPersonInfo> // {name: string, age: number}
```

## Instance Type

> Reference: []()

- Instance Type 返回构造函数的实例类型。

```ts
class Person {
  private readonly name: string
  private readonly age: number
  
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

type PersonInstance = InstanceType<typeof Person> // Person
let person: PersonInstance = new Person('Jeff', 18)
```
