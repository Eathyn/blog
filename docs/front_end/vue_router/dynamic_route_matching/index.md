# Dynamic Route Matching

## Basis

- In Vue Router, we can use dynamic segment called _params_.
- A param is denoted by a colon `:`.
- Accessing route params by `this.$route.params`.

_router/index.js_

```js
import { createRouter, createWebHistory } from 'vue-router'
import User from '@/views/UserView'

const routes = [
  {
    path: '/user/:id', // 'id' is a param denoted by a colon.
    name: 'user',
    component: User,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
```

_UserView.vue_

```vue
<template>
  <div>user id: {{ id }}</div>
</template>

<!-- options api version -->
<script>
export default {
  name: 'UserView',
  computed: {
    id() {
      // access params
      return this.$route.params.id
    },
  },
}
</script>

<!-- composition api version -->
<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const id = computed(() => route.params.id)
</script>
```

- Multiple params are available.

_router/index.js_

```js
import { createRouter, createWebHistory } from 'vue-router'
import User from '@/views/UserView'

const routes = [
  {
    path: '/user/:userId/post/:postId', // multiple params
    name: 'user',
    component: User,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
```

_UserView.vue_

```vue
<template>
  <div>user id: {{ userId }}</div>
  <div>post id: {{ postId }}</div>
</template>

<!-- options api version -->
<script>
export default {
  name: 'UserView',
  computed: {
    userId() {
      return this.$route.params.userId
    },
    postId() {
      return this.$route.params.postId
    },
  },
}
</script>

<!-- composition api version -->
<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const userId = computed(() => route.params.userId)
const postId = computed(() => route.params.postId)
</script>
```

## Reacting to Params Changes

### Problem

- The same component instance will be reused when changing route params (e.g. /user/1 -> /user/2). Since both routes render the same component, this is more efficient than destroying the old instance and then creating a new one. However, this is also means that the lifecycle hooks of the component will **NOT** be called.

### Solution 1

- Using `watch` api in lifecycle hooks to watch anything on the `$route` object, for example, `$route.params`.

_UserView.vue_

```vue
<template>
  <router-link to="/user/1">user 1</router-link>
  |
  <router-link to="/user/2">user 2</router-link>
</template>

<!-- options api version -->
<script>
export default {
  name: 'UserView',
  created() {
    this.$watch(
      () => this.$route.params,
      (toParams, previousParams) => {
        console.log('created...')
        console.log('toParams:', toParams)
        console.log('previousParams: ', previousParams)
      },
    )
  }
}
</script>

<!-- composition api version -->
<script setup>
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

onMounted(() => {
  watch(
    () => route.params,
    (toParams, previousParams) => {
      console.log('mounted...')
      console.log('toParams:', toParams)
      console.log('previousParams: ', previousParams)
    }
  )
})
</script>
```

### Solution 2

- Using `beforeRouteUpdate` in options api or `onBeforeRouteUpdate` in composition api.

_MainView.vue_

```vue
<template>
  <router-link to="/user/1">user 1</router-link>
  |
  <router-link to="/user/2">user 2</router-link>
</template>

<!-- options api version -->
<script>
export default {
  name: 'UserView',
  
  beforeRouteUpdate(to, from) {
    console.log('toParams:', to)
    console.log('previousParams: ', from)
  },
}
</script>

<!-- composition api version -->
<script setup>
import { onBeforeRouteUpdate } from 'vue-router'

onBeforeRouteUpdate((to, from) => {
  console.log('toParams:', to)
  console.log('previousParams: ', from)
})
</script>
```

## Catch all / 404 Not Found Route

TODO: Must review regular expression first.

## Advanced Matching Patterns

- Vue Router supports many advanced matching patterns:
  - optional params
  - zero or more / one or more requirements (What's it ?)
  - custom regular expression

## Refs

- [Dynamic Route Matching](https://router.vuejs.org/guide/essentials/dynamic-matching.html)
