---
date: 2021-04-15
category: Vue
tag: conditional rendering
---

# Conditional Rendering

## `v-if` on `template`

- Using `v-if` on `template` to show/hide multiple elements.

```vue
<template>
  <template v-if="condition">
    <div>one</div>
    <div>two</div>
    <div>three</div>
  </template>
</template>

<script setup>
import { ref } from 'vue'

const condition = ref(true)
</script>
```

## `v-if` vs `v-show`

- 初始值
  - `v-if` 的初始值为 `false` 时不会被渲染为 DOM
  - `v-show` 的初始值为 `false` 时会被渲染为 DOM，同时 display 属性被设置为 `none`

- 原理
  - 切换 `v-if` 的值相当于销毁或重新渲染 DOM 结构
  - 切换 `v-show` 的值相当于设置 `display` 的值为 `none` 或移除 `display`

- 使用场景
  - `v-if` 切换开销比较大，初始化开销比较小，适用于不会进行频繁切换的场景
  - `v-show` 切换开销比较小，初始化开销比较大（因为初始值为 `false` 时也会渲染成 DOM 结构），适用于会进行频繁切换的场景

- 是否触发生命周期函数
  - `v-if` 为 `true` 时触发 `beforeCreate` / `created` / `beforeMount` / `mounted` 生命周期函数
  - `v-if` 为 `false` 时触发 `beforeUnmount` / `unmounted` 生命周期函数
  - `v-show` 第一次为 `true` 时触发 `beforeCreate` / `created` / `beforeMount` / `mounted` 生命周期函数，后续切换不会触发生命周期函数

## `v-if` with `v-for`

### Why not use `v-if` and `v-for` on the same element

- `v-if` has higher priority than `v-for`.

```vue
<template>
  <!-- Error: can not access 'number' -->
  <div
    v-for="(number, index) in [1, 2, 3]"
    v-if="number % 2 === 0"
    :key="index"
  >
    {{ number }}
  </div>
</template>
```

### Solutions

#### Computed

- Using `computed` to filter the data.

```vue
<template>
  <div
    v-for="(number, index) in evenNumbers"
    :key="index"
  >
    {{ number }}
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const numbers = ref([1, 2, 3, 4, 5])
const evenNumbers = computed(() => numbers.value.filter((number) => number % 2 === 0))
</script>
```

#### Use `v-for` on `template`

- Using `v-for` on `template` element.

```vue
<template>
  <template
    v-for="(number, index) in numbers"
    :key="index"
  >
    <div v-if="number % 2 === 0">{{ number }}</div>
  </template>
</template>

<script setup>
import { ref } from 'vue'

const numbers = ref([1, 2, 3, 4, 5])
</script>
```

## Refs

- [Conditional Rendering](https://vuejs.org/guide/essentials/conditional.html)
- [Solutions](https://vuejs.org/style-guide/rules-essential.html#avoid-v-if-with-v-for)
