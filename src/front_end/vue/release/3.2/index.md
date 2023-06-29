---
date: 2023-06-29
category: Vue
---

# Vue 3.2

> Reference: [Vue 3.2 Released!](https://blog.vuejs.org/posts/vue-3-2)

## script setup

- `setup` 是编译时（compile-time）的语法糖，可以更加方便使用 Composition API。

_Before_

```vue {10,16-19}
<template>
  <button @click="handleIncrement">increment</button>
  <div>count: {{ count }}</div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const count = ref(0)
    function handleIncrement() {
      count.value++
    }

    return {
      count,
      handleIncrement,
    }
  }
}
</script>
```

_After_

- 在 `script` 标签旁边加上 `setup`。
- 不需要手动 `return` 状态和方法。

```vue {6}
<template>
  <button @click="handleIncrement">increment</button>
  <div>count: {{ count }}</div>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)
function handleIncrement() {
  count.value++
}
</script>
```

## style v-bind

- Vue 3.2 支持在 `style` 中将 script 中的状态（state）作为属性值绑定到 CSS 属性中。 

_Before_

```vue {3}
<template>
  <button @click="changeColor">change color</button>
  <div :style="{ color }">hi</div>
</template>

<script setup>
import { ref } from 'vue'

const color = ref('red')

function changeColor() {
  color.value = color.value === 'red' ? 'blue' : 'red'
}
</script>
```

_After_

```vue {3,18}
<template>
  <button @click="changeColor">change color</button>
  <div>hi</div>
</template>

<script setup>
import { ref } from 'vue'

const color = ref('red')

function changeColor() {
  color.value = color.value === 'red' ? 'blue' : 'red'
}
</script>

<style>
div {
  color: v-bind(color);
}
</style>
```
