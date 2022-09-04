# Composition API

## Accessing the Router and current Route inside `setup`

- We can access route and router through `useRoute` and `useRouter`, respectively, in composition API.
- The `route` object is a reactive object, so any of its properties can be watched, and you should avoid watching the whole `route` object. 
- we still have access to `$router` and `$route` in templates

```vue
<template>
  <div>user: {{ userId }}</div>
  <div>user: {{ $route.params.id }}</div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import { computed, watch } from 'vue'

// eslint-disable-next-line no-unused-vars
const router = useRouter()
const route = useRoute()

watch(
  () => route.params.id,
  (id) => userId.value = id,
)

const userId = computed(() => route.params.id)
</script>
```

## Navigation Guards

- Vue Router exposes update and leave guards as Composition API functions.
- Vue Router doesn't have `onBeforeRouteEnter` guard.

```vue
<script setup>
import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'

onBeforeRouteUpdate((to, from) => {
  if (to.params.id !== from.params.id) {
    console.log('fetch data')
  }
})

onBeforeRouteLeave(() => {
  const answer = window.confirm('Do you really want to leave?')
  if (!answer) {
    return false
  }
})
</script>
```

## useLink

Skip

## Refs

- [Composition API](https://router.vuejs.org/guide/advanced/composition-api.html)
