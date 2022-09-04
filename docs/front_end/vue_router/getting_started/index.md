# Getting Started

## Built-in Components

### router-link

- Using `router-link` to create links.
- `router-link` allows Vue router to change the URL without reloading the page, handle URL generation as well as its encoding.

### router-view

- `router-view` will display the component that corresponds to the url.

## Example

_router / index.js_

```js
import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/MainView'
import LoginView from '@/views/LoginView'

// define routes
const routes = [
  {
    path: '/',
    component: MainView,
  },
  {
    path: '/login',
    component: LoginView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
```

_main.js_

```js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
```

## Access `route` and `router`

By calling `app.use(router)`, we get access to it as `this.$router` as well as the current route as `this.$route` inside of any component.

_MainView.vue_

```vue
<template>
  <div>main</div>
</template>

<script>
export default {
  name: 'MainView',
  created() {
    console.log(this.$route) // access route
    console.log(this.$router) // access router
  }
}
</script>
```

To access the router or route inside the `setup` function, call the `useRouter` or `useRoute` functions.

```vue
<template>
  <div>main</div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

console.log(route)
console.log(router)
</script>
```

## Refs

- [Getting Started](https://router.vuejs.org/guide/)
