---
date: 2024-06-16
---

# Structural Typing

> Ref: [TypeScript 全面进阶指南：第十章](https://juejin.cn/book/7086408430491172901?scrollMenuIndex=1)

TypeScript 是结构化类型系统（structural typing system）。TypeScript 通过**结构**而不是**名称**比较两个类型，即如果两个类型拥有相同的属性和方法，那么 TypeScript 就认为这两个类型是相同的。

## 结构相同所以不报错

下面代码中，`feedCat` 的形参类型是 `Cat`，但是传入 `Dog` 类型的实参后 TypeScript 没有报错：

```ts
interface Cat {
  eat: () => void
}

interface Dog {
  eat: () => void
}

function feedCat(cat: Cat) {
  cat.eat()
}

const dog: Dog = {
  eat() {}
}
// ok
feedCat(dog)
```

## 结构不同所以报错

下面代码中，由于 `Cat` 和 `Dog` 的结构不同（`Cat` 比 `Dog` 多了 `meow` 方法），所以 `feedCat(dog)` 报错：

```ts
interface Cat {
  eat: () => void
  meow: () => void
}

interface Dog {
  eat: () => void
}

function feedCat(cat: Cat) {
  cat.eat()
}

const dog: Dog = {
  eat() {}
}
// TS2345: Argument of type Dog is not assignable to parameter of type Cat
// Property meow is missing in type Dog but required in type Cat
feedCat(dog)
```

## 继承结构所以不报错

下面代码中，虽然 `Cat` 与 `Dog` 的结构不同（`Dog` 比 `Cat` 多了 `bark` 方法），但是 `feedCat(dog)` 没有报错。这是因为结构化类型系统认为 `Dog` 继承了 `Cat`，`bark` 是额外添加的方法，类似于 `Dog` 是 `Cat` 的子类：

```ts
interface Cat {
  eat: () => void
}

interface Dog {
  eat: () => void
  bark: () => void
}

function feedCat(cat: Cat) {
  cat.eat()
}

const dog: Dog = {
  eat() {},
  bark() {},
}
// ok
feedCat(dog)
```
