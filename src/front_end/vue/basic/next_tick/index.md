---
date: 2022-07-28
category: Vue
tag:
- basic
- nextTick
---

# NextTick

## Vue 更新 DOM 的策略

一个响应式状态更新后，Vue 不会立即更新 DOM，而是会收集所有更改的响应式状态，并在虚拟 DOM 中更新它们。下一个事件循环开始后，Vue 才根据虚拟 DOM 更改实际 DOM。之所以这样做，是因为积累多个响应式状态更新后一次性修改 DOM 比每个响应式状态更新后立刻修改 DOM 所消耗的资源少。

## nextTick 的作用

nextTick 可以让开发者捕获到 DOM 更新后的时刻，用于确保接下来的操作是在 DOM 完成更新的前提下执行的。

## 例子

```vue
<template>
  <button @click="increment">increment</button>
  <div class="div">count: {{ count }}</div>
</template>

<script setup>
import { nextTick, ref } from 'vue'

const count = ref(0)

async function increment() {
  count.value++
  console.log(document.querySelector('.div').textContent) // count: 0
  await nextTick()
  console.log(document.querySelector('.div').textContent) // count: 1
}
</script>
```

## Refs

- [Blog: `nextTick` API](https://dmitripavlutin.com/vue-next-tick/)
- [Docs: `nextTick` API](https://vuejs.org/api/general.html#nexttick)
- [Async Update Queue](https://v2.vuejs.org/v2/guide/reactivity.html#Async-Update-Queue)
