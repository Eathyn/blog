# Why Don't Use `v-if` and `v-for` on The Same Element

## Reason

- 下面的代码会报错，因为 `v-if` 比 `v-for` 有更高的优先级，`v-for` 中的 `number` 变量还没有渲染出来， `v-if` 中找不到 `number` 这个变量。

```vue

<template>
  <div
    v-for="(number, index) in [1, 2, 3]"
    v-if="number % 2 === 0"
    :key="index"
  >
    {{ number }}
  </div>
</template>
```

## Solutions

- 使用 `computed` 过滤数据

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

- 在 `template` 上使用 `v-for`

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

- [The Reason Why don't Use v-if and v-for On The Same Element](https://vuejs.org/guide/essentials/list.html#v-for-with-v-if)
- [Solutions](https://vuejs.org/style-guide/rules-essential.html#avoid-v-if-with-v-for)
