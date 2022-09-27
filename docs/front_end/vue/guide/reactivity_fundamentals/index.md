# Reactivity Fundamentals

## Declaring Reactive State

### Reactive Proxy vs. Original

- Calling `reactive` on the same object always return the same proxy.
- Calling `reactive` on the same proxy always return the same proxy.

```vue
<script setup>
import { reactive } from 'vue'

const origin = {}
const proxy = reactive(origin)

console.log(reactive(origin) === proxy) // true
console.log(reactive(proxy) === proxy) // true
</script>
```

- Due to deep reactivity, nested objects inside a reactive object are also proxies.

```vue
<script setup>
import { reactive } from 'vue'

const proxy = reactive({})
const origin = {}
proxy.nested = origin

console.log(proxy.nested === origin) // false
console.log(proxy.nested === reactive(origin)) // true
</script>
```

### Limitations of `reactive()`

- `reactive` cannot hold primitives.

```vue
<script setup>
import { reactive } from 'vue'

// warn: value cannot be made reactive: 0
const test = reactive(0)
console.log(test)
</script>
```

- When we assign or destructure a reactive object's property into local variables, or when we pass that property into a function, we will lose the reactivity connection.

```vue
<template>
  <button @click="handleIncrement">increment</button>
  <div>{{ obj.val1 }}</div>
  <div>{{ obj.val2 }}</div>
</template>

<script setup>
import { reactive } from 'vue'

const obj = reactive({
  val1: 1,
  val2: 1,
})

// assign
let val1 = obj.val1
val1++ // does not affect original state

// destructure
let { val2 } = obj
val2++ // does not affect original state

function handleIncrement() {
  obj.val1++
  obj.val2++
}
</script>
```

## Reactive Variables with `ref()`

- When holding object types, `ref` automatically converts its `.value` with `reactive()`

```vue
<template>
  <!-- count: 0 -->
  <div>count: {{ objRef.count }}</div>

  <!-- Error -->
  <div>count: {{ objRef.value.count }}</div>
</template>

<script setup>
import { ref } from 'vue'

const objRef = ref({ count: 0 })

console.log(objRef.value.count) // 0
</script>
```

- The `.value` property of a ref is reactive.

```vue
<template>
  <div>count: {{ count }}</div>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)

setTimeout(() => {
  // reactive
  count.value = 1
}, 2000)
</script>
```

- A `ref` containing an object value can reactively replace the entire object.

```vue
<template>
  <div>count: {{ objRef.count }}</div>
</template>

<script setup>
import { ref } from 'vue'

let objRef = ref({ count: 1 })

setTimeout(() => {
  // reactive
  objRef.value = { count: 2 }
}, 2000)
</script>
```

### Ref Unwrapping in Templates

- When refs are accessed as **top-level** properties in the template, they are automatically unwrapped.

```vue
<template>
  <div>count: {{ count }}</div>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>
```

- If a property is not a top-level property in the template, it is not automatically unwrapped.

```vue
<template>
  <!-- count: [object Object]1 -->
  <div>count: {{ obj.count + 1 }}</div>
</template>

<script setup>
import { ref } from 'vue'

const obj = { count: ref(0) }
</script>
```

- A ref will also be unwrapped if it is the final evaluated value of a text interpolation.

```vue
<template>
  <!-- count: 0 -->
  <div>count: {{ obj.count }}</div>
</template>

<script setup>
import { ref } from 'vue'

const obj = { count: ref(0) }
</script>
```

### Ref Unwrapping in Reactive Objects

- The `ref` is automatically unwrapped when it is accessed as a property of a `reactive`.

```vue
<script setup>
import { reactive, ref } from 'vue'

const count = ref(0)
const obj = reactive({ count })

console.log(obj.count) // The `ref` is automatically unwrapped
obj.count = 1
console.log(obj.count) // The `ref` is automatically unwrapped
</script>
```

- The `ref` isn't automatically unwrapped when it is accessed as a property of a `shallowReactive`.

```vue
<script setup>
import { ref, shallowReactive } from 'vue'

const count = ref(0)
const state = shallowReactive({ count })

console.log(state.count) // Ref<0>
console.log(state.count.value) // 0

state.count.value = 1
console.log(state.count.value) // 1
</script>
```

### Ref Unwrapping in Arrays and Collections

- The `ref` isn't automatically unwrapped when it is accessed as a property of an element of a reactive array or a native collection type like `Map`.

```vue
<script setup>
import { ref, reactive } from 'vue'

const count = ref(0)
const reactiveArray = reactive([count])
const reactiveCollection = reactive(new Map([
  ['key', count]
]))

// The `ref` isn't automatically unwrapped
console.log(reactiveArray[0]) // Ref<0>
console.log(reactiveArray[0].value) // 0

// The `ref` isn't automatically unwrapped
console.log(reactiveCollection.get('key')) // Ref<0>
console.log(reactiveCollection.get('key').value) // 0
</script>
```
