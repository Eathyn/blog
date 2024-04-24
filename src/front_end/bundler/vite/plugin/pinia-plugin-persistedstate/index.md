---
date: 2024-04-24
---

# pinia-plugin-persistedstate

## Why

> Ref: 
> - [why pinia-plugin-persistedstate](https://www.reddit.com/r/vuejs/comments/107dudn/comment/j3pkx1z/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button)
> - [why pinia-plugin-persistedstate](https://prazdevs.github.io/pinia-plugin-persistedstate/guide/why.html#why-would-i-need-this-plugin)

当我们既想把数据存在全局状态管理中，又想把数据存在 local storage 中时，对于前者可以使用 Pinia，对于后者可以使用 LocalStorage。代码如下：

::: code-tabs
@tab src/store/module/count.js
```js
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCountStore = defineStore('counter', () => {
  const count1 = ref(0)
  const count2 = ref(0)

  function increment() {
    count1.value++
    count2.value += 10
  }

  return {
    count1,
    count2,
    increment,
  }
})
```

@tab src/App.vue
```vue
<script setup>
import { useCountStore } from './store/module/count.js'

const countStore = useCountStore()

function increment() {
  countStore.increment()
  const counter = JSON.stringify({
    count1: countStore.count1,
    count2: countStore.count2,
  })
  localStorage.setItem('counter', counter)
}
</script>

<template>
  <div>count1: {{ countStore.count1 }}</div>
  <div>count2: {{ countStore.count2 }}</div>
  <button @click="increment">increment</button>
</template>
```
:::

如上代码所示，如果我们需要同时更新存储在 Pinia 中的 countStore.count1/count2 和存储在 LocalStorage 中的 count1/count2。我们需要分别调用 countStore.increment() 和 localStorage.setItem()。有没有一种方法执行一次就可以同时更新 Pinia 和 LocalStorage 中的值？这就是 pinia-plugin-persistedstate 做的事情。

pinia-plugin-persistedstate 的作用是更新 Pinia 中的数据后自动更新 LocalStorage 中的数据，不需要开发者手动更新 LocalStorage 中的数据。

## Usage

> Ref: [use pinia-plugin-persistedstate](https://prazdevs.github.io/pinia-plugin-persistedstate/guide/#usage)

pinia-plugin-persistedstate 支持 Composition API 和 Options API 的写法。

::: code-tabs
@tab src/store/module/count.js
```js {18-20}
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCountStore = defineStore('counter', () => {
  const count1 = ref(0)
  const count2 = ref(0)

  function increment() {
    count1.value++
    count2.value += 10
  }

  return {
    count1,
    count2,
    increment,
  }
}, {
  persist: true,
})
```

@tab src/App.vue
```vue
<script setup>
import { useCountStore } from './store/module/count.js'

const countStore = useCountStore()
</script>

<template>
  <div>count1: {{ countStore.count1 }}</div>
  <div>count2: {{ countStore.count2 }}</div>
  <button @click="countStore.increment">increment</button>
</template>
```
:::
