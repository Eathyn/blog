---
date: 2021-04-21
category: Vue
tag:
- provide
- inject
---

# Provide & Inject

## Prop Drilling

- A parent component can serve as a dependency provider for all its descendants.

## Provide

- To provide data to a component's descendants, use the `provide()` function.

```vue
<script setup>
import { provide } from 'vue'

provide('message', 'hello')
</script>
```

- If not using `<script setup>`, make sure `provide()` is called synchronously inside `setup()`.

```vue
<script>
import { provide } from 'vue'

export default {
  setup() {
    provide('message', 'hello')
  }
}
</script>
```

- The `provide()` function accepts two arguments. The first argument is called the injection key, which can be a string or a Symbol. The second argument is the provided value. The value can be of any type, including reactive state such as refs.

- Providing reactive values allows the descendent components using the provided value to establish a reactive connection to the provider component.

_Main.vue_

```vue
<template>
  <div>value: {{ value }}</div>
  <Child />
</template>

<script setup>
import { provide, ref } from 'vue'
import Child from './Child.vue'

const value = ref('hello')
provide('message', value)
</script>
```

_Child.vue_

```vue
<template>
  <div>child</div>
  <button @click="handleClick">change message value</button>
</template>

<script setup>
import { inject } from 'vue'

const message = inject('message')

function handleClick() {
  message.value = message.value === 'hello' ? 'hi' : 'hello'
}
</script>
```

## App-level Provide

- App-level provides are available to all components rendered in the app.

_main.ts_

```ts
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.provide('message', 'hello')
app.mount('#app')
```

_Main.vue_

```vue
<script setup>
import { inject } from 'vue'

const message = inject('message')
console.log(message) // hello
</script>
```

## Inject

- To inject data provided by an ancestor component, use the `inject()` function.
- If the provided value is a `ref`, it will be injected as-is and will not be automatically unwrapped.

_Main.vue_

```vue
<template>
  <Child />
</template>

<script setup>
import { provide, ref } from 'vue'
import Child from './Child.vue'

const message = ref('hello')
provide('message', message)
</script>
```

_Child.vue_

```vue
<template>
  <div>child</div>
</template>

<script setup>
import { inject } from 'vue'

const message = inject('message')
console.log(message.value) // hello
</script>
```

- if not using `<script setup>`, inject() should only be called synchronously inside `setup()`.

### Injection Default Values

- By default, inject assumes that the injected key is provided somewhere in the parent chain. In the case where the key is not provided, there will be a runtime warning.
- If we want to make an injected property work with optional providers, we need to declare a default value.

_Child.vue_

```vue
<script setup>
import { inject } from 'vue'

const greet = inject('greet', 'Hi')
console.log(greet) // Hi
</script>
```

## Working with Reactivity

- When using reactive provide / inject values, it is recommended to keep any mutations to reactive state inside the provider whenever possible. This ensures that the provided state and its possible mutations are co-located in the same component, making it easier to maintain in the future.

_Main.vue_

```vue
<template>
  <Child />
</template>

<script setup>
import { provide, ref } from 'vue'
import Child from './Child.vue'

const count = ref(0)

function increment() {
  count.value++
}

provide('count', {
  count,
  increment,
})
</script>
```

_Child.vue_

```vue
<template>
  <div>count: {{ count }}</div>
  <button @click="increment">increment</button>
</template>

<script setup>
import { inject } from 'vue'

const { count, increment } = inject('count')
</script>
```

- You can wrap the provided value with readonly() if you want to ensure that the data passed through provide cannot be mutated by the injected component.

_Main.vue_

```vue
<template>
  <Child />
</template>

<script setup>
import { provide, readonly, ref } from 'vue'
import Child from './Child.vue'

const count = ref(0)
provide('count', readonly(count))
</script>
```

_Child.vue_

```vue
<template>
  <div>count: {{ count }}</div>
</template>

<script setup>
import { inject } from 'vue'

const count = inject('count')
// warn: Set operation on key "value" failed: target is readonly.
count.value = 100
</script>
```

## Working with Symbol Keys

- Using Symbol injection keys to avoid potential collisions.
- It's recommended to export the Symbols in a dedicated file.

_key.js_

```js
export const countKey = Symbol()
```

_Main.vue_

```vue
<template>
  <Child />
</template>

<script setup>
import { provide, ref } from 'vue'
import { countKey } from '../utils/keys.js'
import Child from './Child.vue'

const count = ref(0)
provide(countKey, count)
</script>
```

_Child.vue_

```vue
<template>
  <div>count: {{ count }}</div>
</template>

<script setup>
import { inject } from 'vue'
import { countKey } from '../utils/keys.js'

const count = inject(countKey)
</script>
```

## Refs

- [Provide / Inject](https://vuejs.org/guide/components/provide-inject.html)
