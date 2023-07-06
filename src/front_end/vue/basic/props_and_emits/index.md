---
date: 2023-07-04
category: Vue
---

# Props and Emits

## Options API

::: code-tabs
@tab App.vue
```vue
<template>
  <div>count in App.vue: {{ count }}</div>
  <hr>
  <Main
    :count="count"
    @increment="handleIncrement"
  />
</template>

<script>
import Main from './components/Main.vue'

export default {
  name: 'App',
  components: {
    Main,
  },
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    handleIncrement({ number }) {
      this.count += number
    },
  }
}
</script>
```

@tab Main.vue
```vue
<template>
  <button @click="increment">increment</button>
  <hr>
  <div>count in Main.vue: {{ count }}</div>
</template>

<script>
export default {
  name: 'Main',
  props: {
    count: {
      type: Number,
      required: false,
      default: 0,
      validator(value) {
        if (value < 3) {
          console.error(`'count' must greater or equal to 3`)
          return false
        }
        return true
      },
    },
  },
  emits: {
    increment(payload) {
      const { number } = payload
      if (number <= 0) {
        console.error(`'count' must be integer`)
        return false
      }
      return true
    },
  },
  methods: {
    increment() {
      this.$emit('increment', { number: -1 })
    },
  }
}
</script>
```
:::

## Composition API

- `<script setup>` 写法：

::: code-tabs
@tab App.vue
```vue
<template>
  <div>count in App.vue: {{ count }}</div>
  <hr>
  <Main
    :count="count"
    @increment="handleIncrement"
  />
</template>

<script setup>
import { ref } from 'vue'
import Main from './components/Main.vue'

const count = ref(0)
function handleIncrement({ number }) {
  count.value += number
}
</script>
```

@tab Main.vue
```vue
<template>
  <button @click="increment">increment</button>
  <hr>
  <div>count in Main.vue: {{ props.count }}</div>
</template>

<script setup>
const props = defineProps({
  count: {
    type: Number,
    required: false,
    default: 0,
    validator(value) {
      if (value < 3) {
        console.error(`'count' must greater or equal to 3`)
        return false
      }
      return true
    },
  },
})

const emits = defineEmits({
  increment(payload) {
    const { number } = payload
    if (number <= 0) {
      console.error(`'count' must be integer`)
      return false
    }
    return true
  },
})

function increment() {
  emits('increment', { number: -1 })
}
</script>
```
:::

## TypeScript

::: code-tabs
@tab App.vue
```vue
<template>
  <div>count in App.vue: {{ count }}</div>
  <hr>
  <Main
    :count="count"
    @increment="handleIncrement"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Main from './components/Main.vue'

interface IncrementPayload {
  number: number
}
const count = ref(0)
function handleIncrement({ number }: IncrementPayload) {
  count.value += number
}
</script>
```

@tab Main.vue
```vue
<template>
  <button @click="increment">increment</button>
  <hr>
  <div>count in Main.vue: {{ props.count }}</div>
</template>

<script setup lang="ts">
interface Props {
  count?: number // type: Number, required: false
}

// 截止 2023-07-04，不支持 validator
const props = withDefaults(defineProps<Props>(), {
  count: 0,
})

// more succinct syntax
// 截止 2023-07-04，不支持校验
const emits = defineEmits<{
  increment: [{ number: number }]
}>()

// type-based
// interface EmitsPayload {
//   number: number
// }
// interface Emits {
//   (e: 'increment', { number }: EmitsPayload): void
// }
// const emits = defineEmits<Emits>()

function increment() {
  emits('increment', { number: 1 })
}
</script>
```
:::

## Render Function

::: code-tabs
@tab App.vue
```vue
<template>
  <render />
</template>

<script setup>
import { h, ref } from 'vue'
import Main from './components/Main.vue'

const count = ref(0)
function handleIncrement({ number }) {
  count.value += number
}

function render() {
  return [
    h('div', `count in App.vue: ${count.value}`),
    h('hr'),
    h(Main, {
      count: count.value,
      onIncrement: handleIncrement,
    }),
  ]
}
</script>
```

@tab Main.vue
```vue
<template>
  <render />
</template>

<script setup>
import { h } from 'vue'

const props = defineProps({
  count: {
    type: Number,
    required: false,
    default: 0,
    validator(value) {
      if (value > 3) {
        console.error(`'count' must less than or equal to 3`)
        return false
      }
      return true
    },
  },
})

const emits = defineEmits({
  increment(payload) {
    const { number } = payload
    if (number <= 0) {
      console.error(`'count' must be integer`)
      return false
    }
    return true
  },
})

function render() {
  return [
    h('button', { onClick: increment }, 'increment'),
    h('hr'),
    h('div', `count in Main.vue: ${ props.count }`)
  ]
}

function increment() {
  emits('increment', { number: 1 })
}
</script>
```
:::

## defineModel

- [查看](/blog/front_end/vue/basic/two_way_binding_in_component/#definemodel)
