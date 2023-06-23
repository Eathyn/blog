---
date: 2022-07-03
category: Vue
tag:
- basic
- composable
---

# Composables

## 使用 composable 的原因

### mixin 的缺点

- 需要跳转到 mixin 对象所在的文件才能知道导入了哪些属性和方法
- 导入多个 mixin 对象可能导致命名冲突
- mixin 对象和组件可能导致命名冲突
- 导入多个 mixin 对象造成的命名冲突可能会导致隐式的跨 mixin 通信

## 概念

### stateful / stateless

- stateful (有状态的) : 函数运行时维护着内部状态，例如 composables
- stateless (无状态的) : 函数运行时没有维护着内部状态，例如 lodash

### composables

- composable : 使用 composition api 封装和复用有状态逻辑的函数

## 约定和最佳实践

### 命名

- 驼峰命名法
- 以 `use` 开头

### 参数

- 参数尽量使用 ref

### 返回值

- 返回包含 ref 的对象

### 副作用

- 如果 composable 有产生副作用(事件/获取数据)，要使用 onUnmounted 删除副作用

### 使用限制

- composable 应该在 `<script setup>` 或 `setup()` 中同步地调用，也可以在 hooks 中调用

## Refs

- [Composables](https://vuejs.org/guide/reusability/composables.html)
- [Composable vs. Mixin](https://vueschool.io/articles/vuejs-tutorials/what-is-a-vue-js-composable/)
