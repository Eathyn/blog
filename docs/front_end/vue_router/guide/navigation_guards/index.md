# Navigation Guards

- Navigation guards includes route redirection or cancellation.

## Global Before Guards

- api: `beforeEach`
- argument: `(to, from, next) => {}`
- returns
  - `false`: cancel navigation
  - `true` / `undefined`: execute navigation (equal to `next()`)

_router / index.js_

```js
router.beforeEach((to) => {
  const isAuthenticated = false
  if (!isAuthenticated && to.name !== 'login') {
    return { name: 'login' }
  } else {
    return true // return undefined
  }
})
```

- Using `router.onError` to catch navigation error.

```js
router.beforeEach(() => {
  throw Error('custom error')
})

router.onError((error, to, from) => {
  console.error(error)
  console.log(to)
  console.log(from)
})
```

### Optional Third Argument `next`

```js
const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginView'),
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/MainView'),
  },
]

router.beforeEach((to, from, next) => {
  const isAuthenticated = false
  if (!isAuthenticated && to.name !== 'login') {
    next({ name: 'login' })
  } else {
    next()
  }
})
```

## Global Resole Guards

Skip: Difficult

## Global After Hooks

- Global after hooks don't have `next` function, so it cannot affect the navigation.
- Global after hooks are usually used to:
  - analytics
  - change the title of the page
- The third argument is navigation failures

```js
router.afterEach((to, from, failure) => {
  console.log(to)
  console.log(from)
  console.log(failure)
})
```

## Pre-Route Guard

- We can define `beforeEner` route guard in route configuration object.

```js
const routes = [
  {
    name: 'user',
    path: '/user',
    component: () => import('@/views/UserView'),
    // pre-route guard
    beforeEnter: (to, from, next) => {
      console.log('to: ', to)
      console.log('from: ', from)
      const isVerified = true
      if (!isVerified) {
        next({ name: 'main' })
      } else {
        next()
      }
    },
  },
]
```

- `beforeEnter` guards only trigger when entering the route, they don't trigger when the `params`, `query` or `hash` change.

- We can also pass an array to `beforeEnter` for reusing guard routes.

```js
const routes = [
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/LoginView'),
    beforeEnter: [f1, f2], // reuse guards
  },
  {
    name: 'logout',
    path: '/logout',
    component: () => import('@/views/LogoutView'),
    beforeEnter: [f1], // reuse guards
  },
]

function f1() {
  console.log('f1')
}

function f2() {
  console.log('f2')
}
```

## In-Component Guards

### Using the Options API

#### `beforeRouteEnter`

- called before the route is confirmed

```vue
<script>
export default {
  beforeRouteEnter(to, from, next) {
    console.log('to: ', to)
    console.log('from: ', from)
    // don't render the component without calling `next`
    next()
  },
}
</script>
```

- We cannot access `this` directly but can call `next` in `beforeRouteEnter` to access `this`

```vue
<script>
export default {
  beforeRouteEnter(to, from, next) {
    console.log('this: ', this) // undefined
    
    next((vm) => {
      console.log('this: ', vm) // Vue Instance
    })

    next()
  },
}
</script>
```

#### `beforeRouteUpdate`

- called when the route that render this component has changed, but this component is reused in the new route.
- change `/main/1` to `/main/2` will trigger `beforeRouteUpdate` guard.
- change `/main/<id>` to `/user` will not trigger `beforeRouteUpdate` guard in `MainView` because these two routes use different components.

```js
const routes = [
  {
    path: '/main/:id',
    name: 'main',
    component: () => import('@/views/MainView'),
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('@/views/UserView'),
  },
]
```

- We can access `this` directly in `beforeRouteUpdate`.

#### `beforeRouteLeave`

- Called when the route that renders this component is about to be navigated away from.
- The `beforeRouteLeave` guard is usually used to prevent the user from accidentally leaving the route with unsaved edits. The navigation can be canceled by returning `false`.

```vue
<script>
export default {
  beforeRouteLeave() {
    const answer = window.confirm('Do you really want to leave?')
    if (!answer) {
      return false
    }
  },
}
</script>
```

### Using the Composition API

- `onBeforeRouteUpdate` and `onBeforeRouteLeave`

```vue
<script setup>
import { onBeforeRouteUpdate, onBeforeRouteLeave } from 'vue-router'

onBeforeRouteUpdate((to, from) => {
  console.log('to: ', to)
  console.log('from: ', from)
})

onBeforeRouteLeave(() => {
  const answer = window.confirm('Do you want to leave?')
  if (!answer) {
    return false
  }
})
</script>
```

## The Full Navigation Resolution Flow

1. Navigation triggered.
2. Call `beforeRouteLeave` guards in deactivated components.
3. Call global `beforeEach` guards.
4. Call `beforeRouteUpdate` guards in reused components.
5. Call `beforeEnter` in route configs.
6. Resolve async route components.
7. Call `beforeRouteEnter` in activated components.
8. Call global `beforeResolve` guards.
9. Navigation is confirmed.
10. Call global `afterEach` hooks.
11. DOM updates triggered.
12. Call callbacks passed to `next` in `beforeRouteEnter` guards with instantiated instances.

## Refs

- [Navigation Guards](https://router.vuejs.org/guide/advanced/navigation-guards.html)
