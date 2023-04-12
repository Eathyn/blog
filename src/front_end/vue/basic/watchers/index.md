---
date: 2021-05-13
category: Vue
tag: watch
---

# Watchers

## Basic Example

```vue
<script setup>
import { ref, watch } from 'vue'

const count = ref(0)

watch(count, (newVal, oldVal) => {
  console.log(`new: ${newVal} - old: ${oldVal}`)
})

function increment() {
  count.value++
}
</script>
```

## Watch Source Types

- `watch`'s first argument:
  - ref
  - reactive
  - getter function
  - array of multiple source above

```vue
<script setup>
import { reactive, ref, watch } from 'vue'

const val1 = ref(0)
const val2 = reactive({ count: 0 })
const val3 = ref(0)
const val4 = ref(0)
const val5 = ref(0)
const val6 = reactive({ count: 0 })

// ref
watch(val1, (val) => console.log(val))

// reactive
watch(val2, (val) => console.log(val))

// getter
watch(() => val3.value + val4.value, (sum) => console.log(sum))
setTimeout(() => { val3.value++ }, 1000)

// array of source above
watch([val5, val6], ([newVal5, oldVal5], [newVal6, oldVal6]) => {
  console.log(`newVal5: ${newVal5} - oldVal5: ${oldVal5}`)
  console.log(`newVal6: ${newVal6} - oldVal6: ${oldVal6}`)
})
setTimeout(() => { val5.value++ }, 1000)
setTimeout(() => { val6.count++ }, 2000)
</script>
```

- Using getter instead of watching the property of a reactive object

```vue
<script setup>
import { reactive, watch } from 'vue'

const state = reactive({ count: 0 })

// fail
watch(state.count, (val) => {
  console.log(val)
})

// ok
watch(() => state.count, (val) => {
  console.log(val)
})
</script>
```

## Deep Watchers

- The callback will be triggered on all nested mutations

```vue
<script setup>
import { reactive, watch } from 'vue'

const outer = reactive({
  inner: {
    count: 0,
  }
})

watch(outer, (val) => {
  console.log(val.inner.count)
})
</script>
```

- 

```vue
<script setup>
import { reactive, watch } from 'vue'

const outer = reactive({
  inner: {
    count: 0,
  }
})

watch(() => outer.inner, (val) => {
  // fires only when outer.inner is replaced
  console.log(val.inner.count)
})

// not triggering watcher
setTimeout(() => {
  outer.inner.count++
}, 1000)
</script>
```

## Refs

[Watchers](https://vuejs.org/guide/essentials/watchers.html)
