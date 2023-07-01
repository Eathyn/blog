---
date: 2023-06-29
category: Vue
---

# Vue 3.3

> Reference: [Announcing Vue 3.3](https://blog.vuejs.org/posts/vue-3-3)

## 提升 TypeScript 的开发体验

### 宏支持导入的类型

_Before_

- 在 Vue 3.3 之前，传入到 `defineProps` 和 `defineEmits` 中的泛型的类型形参只能是类型字面量（type literal）或者**当前文件**中定义的接口（interface）。

```vue
<script setup lang="ts">
// 类型字面量作为 defineProps 的泛型的类型形参
const props1 = defineProps<{
  name: string
  age: number
}>()

// 当前文件中定义的接口作为 defineProps 的泛型的类型形参
interface Props {
  name: string
  age: number
}
const props2 = defineProps<Props>()
</script>
```

_After_

- Vue 3.3 支持导入位于其他文件中的接口作为 `defineProps` 和 `defineEmits` 中的泛型的类型形参。

```ts
// foo.ts
export interface Props {
  name: string
  age: number
}
```

```vue {2}
<script setup lang="ts">
import type { Props } from './foo.ts'
const props = defineProps<Props>()
</script>
```

### 宏支持复杂的类型

- Vue 3.3 之前不支持在 `defineProps` 和 `defineEmits` 的泛型类型形参中进行复杂的类型计算，Vue 3.3 支持了这个操作。

```vue {10}
<script setup lang="ts">
interface Props1 {
  name: string
}
interface Props2 {
  age: number
}

// 在 defineProps 的泛型类型形参中进行交集计算
const props = defineProps<Props1 & Props2>()
</script>
```

::: warning
需要实际类型分析的类型（例如条件类型）则不支持上述的特性。
:::

### 泛型组件

- Vue 3.3 支持泛型组件（generic component）。

::: code-tabs
@tab App.vue
```vue
<template>
  <Main :items="numbers" />
  <Main :items="chars" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Main from './components/Main.vue'

const numbers = ref([1, 2, 3, 4, 5])
const chars = ref(['a', 'b', 'c', 'd', 'e'])
</script>
```

@tab Main.vue
```vue {1,5,9}
<script setup lang="ts" generic="T">
import { onMounted, Ref, ref } from 'vue'

interface Props {
  items: T[]
}

const props = defineProps<Props>()
const randomItem = ref<T>() as Ref<T>

function changeRandomItem() {
  const randomIndex = Math.floor(Math.random() * props.items.length)
  randomItem.value = props.items[randomIndex]
}

onMounted(() => changeRandomItem())
</script>

<template>
  <button @click="changeRandomItem">change random item</button>
  <div>item: {{ randomItem }}</div>
</template>
```
:::

### 简写 `defineEmit`

- Vue 3.3 之前在 `defineEmit` 中需要使用调用签名（call signature）的写法定义类型名称、形参类型和返回类型。Vue 3.3 简化了写法。

```vue
<script setup lang="ts">
// Before
const emits1 = defineEmits<{
  (e: 'send', data: number): void
}>()

// After
const emits2 = defineEmits<{
  send: [data: number]
}>()
</script>
```
