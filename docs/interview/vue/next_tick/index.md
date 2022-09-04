# NextTick

## Why do we need nextTick

- `nextTick()` can be used immediately after a state change to wait for the DOM updates to complete.

## Attentions

- When you mutate reactive state in Vue, the resulting DOM updates are not applied synchronously. Instead, Vue buffers
  them until the "next tick" to ensure that each component updates only once no matter how many state changes you have
  made.
- You can either pass a callback as an argument, or await the returned Promise.

## Example

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

## Principle

- Vue performs DOM updates asynchronously.
- Whenever a data change is observed, it will open a queue and buffer all the data changes that happen in the same event
  loop.
- This buffered de-duplication is important in avoiding unnecessary calculations and DOM manipulations. Then, in the
  next event loop “tick”, Vue flushes the queue and performs the actual (already de-duped) work.
## Refs

- [`nextTick` API](https://vuejs.org/api/general.html#nexttick)
- [Async Update Queue](https://v2.vuejs.org/v2/guide/reactivity.html#Async-Update-Queue)
