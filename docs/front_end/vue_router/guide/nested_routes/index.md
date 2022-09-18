# Nested Routes

## Basis

- Vue Router supports nest routes and `router-view`.
- To render nested `router-view`, we need add `children` property in routes.
- `path` prefixed `/` means that path are treated as root path, so the paths inside `children` usually don't need `/`.
- `path: ''` to handle undefined routes.

_router/index.js_

```js
import { createRouter, createWebHistory } from 'vue-router'

import User from '@/views/UserView'
import UserDefault from '@/components/UserDefault'
import UserProfile from '@/components/UserProfile'
import UserPost from '@/components/UserPost'

const routes = [
  {
    path: '/user/:id',
    name: 'user',
    component: User,
    children: [
      {
        path: '', // handle undefined routes
        component: UserDefault,
      },
      {
        path: 'profile',
        component: UserProfile,
      },
      {
        path: 'post',
        component: UserPost,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
```

_App.vue_

```vue
<template>
  <!-- first router view -->
  <router-view />
</template>
```

_UserView.vue_

```vue
<template>
  <div>user id: {{ userId }}</div>
  <!-- second router view -->
  <router-view />
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const userId = computed(() => route.params.id)
</script>
```

_UserDefault.vue_

```vue
<template>
  <div>user default</div>
</template>
```

_UserProfile.vue_

```vue
<template>
  <div>user profile</div>
</template>
```

_UserPost.vue_

```vue
<template>
  <div>user post</div>
</template>
```

## Nested Named Routes

- Using `name` property and `this.router.push` can show only render parent router view.
- Child router views will show after reloading the page.

_router/index.js_

```js
import { createRouter, createWebHistory } from 'vue-router'

import User from '@/views/UserView'
import UserDefault from '@/components/UserDefault'
import UserProfile from '@/components/UserProfile'
import UserPost from '@/components/UserPost'

const routes = [
  {
    path: '/user/:id',
    // get a name for parent route
    name: 'user',
    component: User,
    children: [
      {
        path: '',
        name: 'default',
        component: UserDefault,
      },
      {
        path: 'profile',
        name: 'profile',
        component: UserProfile,
      },
      {
        path: 'post',
        name: 'post',
        component: UserPost,
      },
    ],
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
  <button @click="handleClick">jump</button>
  <router-view />
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const userId = computed(() => route.params.id)

function handleClick() {
  // jump to parent root
  router.push({ name: 'user' })
}
</script>
```
