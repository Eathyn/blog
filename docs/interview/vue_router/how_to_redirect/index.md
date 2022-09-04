# How To Redirect

## Method 1: with Route Path

```js
const routes = [
  {
    path: '/main/:id',
    redirect: '/user',
  },
  {
    path: '/user',
    name: 'user',
    component: User,
  },
]
```

## Method 2: with Route Name

```js
const routes = [
  {
    path: '/main/:id',
    redirect: { name: 'user' },
  },
  {
    path: '/user',
    name: 'user',
    component: User,
  },
]
```

## Method 3: with a Function

```js
const routes = [
  {
    path: '/main/:id',
    redirect: (to) => {
      return {
        name: 'user',
        params: { id: to.params.id },
        query: { q: to.params.id }, // -> user?q=1
      }
    },
  },
  {
    path: '/user',
    name: 'user',
    component: User,
  },
]
```

## Refs

- [Document](https://router.vuejs.org/guide/essentials/redirect-and-alias.html)
- [Note](/front_end/vue_router/redirect_and_alias/index.md)
