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
