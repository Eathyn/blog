---
date: 2023-06-14
category: TypeScript
---

# Exclude vs Omit | Extract vs Pick

> Reference: [Difference between `Omit` and `Exclude`](https://timmousk.com/blog/typescript-omit/)

## 类型不同

- `Exclude` 和 `Extract` 创建一个新类型，并删除或提取**联合**类型中的某些类型；`Omit` 或 `Pick` 创建一个新类型，并删除或挑选**对象类型**中的某些属性。

_Exclude and Extract_

```ts
type Country = 'China' | 'Korea' | 'Japan'
type CountryWithoutJapan = Exclude<Country, 'Japan'> // "China" | "Korea"
type CountryOnlyChina = Extract<Country, 'China'> // "China"
```

_Omit and Pick_

```ts
type Person = {
  name: string
  age: number
}

type PersonWithoutAge = Omit<Person, 'age'> // {name: string}
type PersonWithName = Pick<Person, 'name'> // {name: string}
```

## Enum

- 在枚举上可以使用 `Exclude` 和 `Extract`，不可使用 `Omit` 和 `Pick`。

```ts
enum Direction {
  UP = 1,
  RIGHT,
  BOTTOM,
  LEFT,
}

type WithoutUpDirection = Exclude<Direction, Direction.UP>
type WithUpDirection = Extract<Direction, Direction.UP>
```

## 组成关系

- `Omit` 由 `Pick` 和 `Exclude` 组成。

```ts
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>
```

```ts
type Person = {
  name: string
  age: number
}

type PersonOnlyName1 = Omit<Person, 'age'> // {name: string}

type PersonOnlyName2 = Pick<Person, Exclude<keyof Person, 'age'>> // {name: string}
// 1. keyof Person -> 'name' | 'age'
// 2. Exclude<keyof Person, 'age'> -> 'name'
// 3. Pick<Person, Exclude<keyof Person, 'age'>> -> Pick<'name' | 'age', 'name'> -> {name: string}
```
