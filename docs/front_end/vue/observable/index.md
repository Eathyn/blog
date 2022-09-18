# `Vue.observable`

## Why do we need `Vue.observable`

- Make an object reactive. Internally, Vue uses this on the object returned by the `data` function.
- The returned object can be used directly inside render functions and computed properties, and will trigger appropriate
  updates when mutated.
- `Vue.observable` API is like `reactive` API in Vue 3.

_reactive.js_

```js
import Vue from 'vue'

// 'state' is reactive data
const state = Vue.observable({
  count: 0,
})

export { state }
```

_Main.vue_

```vue
<template>
  <div>
    <button @click="increment">increment</button>
    <div>count: {{ count }}</div>
  </div>
</template>

<script>
import { state } from '../utils/reactive'

export default {
  name: 'Main',
  computed: {
    count() {
      return state.count
    },
  },
  methods: {
    increment() {
      state.count++
    },
  },
}
</script>
```

- It can also be used as a minimal, cross-component state store for simple scenarios.
- For future compatibility, we recommend always working with the object returned by `Vue.observable`, rather than the
  object originally passed to it.

## Refs

- [`Vue.observable` API](https://v2.vuejs.org/v2/api/#Vue-observable)
