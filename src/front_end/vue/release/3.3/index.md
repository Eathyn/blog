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

### 使用 `defineSlots` 规定类型

- Vue 3.3 之前使用 `useSlots` 无法规定插槽属性（slot prop）的类型。Vue 3.3 引入了 `defineSlots` 宏，规定插槽属性的类型。

_Before_

[Using Slot in Render Function without TypeScript](/blog/front_end/vue/basic/slot/#render-function)

_After_

::: code-tabs
@tab App.vue
```vue
<template>
  <render />
</template>

<script setup lang="ts">
import Main from './components/Main.vue'
import { h } from 'vue'

function render() {
  return h(Main, null, {
    header: (slotProps) => [
      h('div', null, 'header'),
      h('div', null, `a: ${slotProps.a}`),
      h('div', null, `b: ${slotProps.b}`),
    ],
    default: () => h('div', null, 'default'),
    footer: () => h('div', null, 'footer'),
  })
}
</script>
```

@tab Main.vue
```vue
<template>
  <render />
</template>

<script setup lang="ts">
import { defineSlots, h, ref } from 'vue'

interface Slots {
  header: (props: { a: number, b: number }) => any
  default: () => any
  footer: () => any
}

const slots = defineSlots<Slots>()
const a = ref(1)
const b = ref(2)

function render() {
  return [
    h('header', null, [
      h('div', null, slots.header({ a: a.value, b: b.value })),
    ]),
    h('main', null, slots.default()),
    h('footer', null, slots.footer()),
  ]
}
</script>
```
:::

## 实验的特性

### 解构 Props 不丢失响应式

- Vue 3.3 之前，对 Props 进行解构之后响应式会丢失。Vue 3.3 支持对 Props 进行解构和设置默认值，并且解构之后响应式不会丢失。

::: code-tabs
@tab App.vue
```vue
<template>
  <button @click="increment">increment</button>
  <div>count in parent component: {{ count }}</div>
  <Main :count="count" />
</template>

<script setup lang="ts">
import Main from './components/Main.vue'
import { ref } from 'vue'

const count = ref(0)
function increment() {
  count.value++
}
</script>
```

@tab Main.vue
```vue {12-13}
<template>
  <div>doubleCount in child component: {{ doubleCount }}</div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  count: number
}
const { count = 0 } = defineProps<Props>()
// count 改变后 doubleCount 也会改变，响应式不会丢失
const doubleCount = computed(() => count * 2)
</script>
```
:::

::: warning
该特性需要更改配置文件

::: code-tabs
@tab vite.config.js
```js
export default {
  plugins: [
    vue({
      script: {
        propsDestructure: true
      }
    })
  ]
}
```

@tab vue.config.js
```js
module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap((options) => {
        return {
          ...options,
          reactivityTransform: true
        }
      })
  }
}
```
:::

### `defineModel`

- [`defineModel`](/blog/front_end/vue/basic/two_way_binding_in_component/#definemodel)

## 其他特性

### `defineOptions`

> Reference: [`defineOptions`](https://blog.vuejs.org/posts/vue-3-3#defineoptions)

::: code-tabs
@tab Options API
```vue {4}
<script>
export default {
  name: 'Main',
  inheritAttrs: false,
  created() {
    console.log(this.$attrs)
  }
}
</script>
```

@tab Composition API
```vue {10}
<script setup>
import { useAttrs } from 'vue'

const attrs = useAttrs()
console.log(attrs)
</script>

<script>
export default {
  inheritAttrs: false
}
</script>
```

@tab defineOptions
```vue {4}
<script setup>
import { useAttrs } from 'vue'

defineOptions({ inheritAttrs: false })

const attrs = useAttrs()
console.log(attrs)
</script>
```
:::

### 增强 `toRef`

> Reference
> - [Better Getter Support with `toRef` and `toValue`](https://blog.vuejs.org/posts/vue-3-3#better-getter-support-with-toref-and-tovalue)
> - [toRef](https://vuejs.org/api/reactivity-utilities.html#toref)


```vue
<script setup>
import { ref, toRef } from 'vue'

// 将 value 转化为 ref：`toRef(1)` 相当于 `ref(1)`。
const a = toRef(1) // ref(1)
console.log(a)

// 将 getter 转化为 ref：比 computed 性能更好。
const props = defineProps(['b'])
const b = toRef(() => props.b) // readonly
console.log(b)

// 将 ref 转化为 ref：返回原来的 ref。
const c = ref(3)
const cRef = toRef(c)
console.log(c === cRef) // true
</script>
```

### 增强 `toValue`

> Reference:
> - [Better Getter Support with `toRef` and `toValue`](https://blog.vuejs.org/posts/vue-3-3#better-getter-support-with-toref-and-tovalue)
> - [unref](https://vuejs.org/api/reactivity-utilities.html#unref)
> - [toValue](https://vuejs.org/api/reactivity-utilities.html#tovalue)

- `toValue` 与 `unref` 的区别：当参数为 getter 时，`unref` 返回 getter，`toValue` 返回 getter 返回的值。

```vue
<script setup>
import { toValue, unref } from 'vue'

const a = () => 1
console.log(a)

const value1 = unref(a)
console.log(value1) // () => 1

const value2 = toValue(a)
console.log(value2) // 1
</script>
```
