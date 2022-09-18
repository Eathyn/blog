# Redirect and Alias

## Redirect

### Basis

_router/index.js_

```js
const routes = [
  {
    path: '/main/:id',
    
    redirect: '/user',

    redirect: { name: 'user' },

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

- Navigation guards are not applied on the route that redirects, only its target.

```js
const routes = [
  {
    path: '/main',
    redirect: { name: 'user' },
    // `beforeEnter` doesn't be trigger
    beforeEnter: (to, from) => {
      console.log('main to', to)
      console.log('main from', from)
    }
  },
  {
    path: '/user',
    name: 'user',
    component: User,
    beforeEnter: (to, from) => {
      console.log('user to', to)
      console.log('user from', from)
    }
  },
]
```

- The route can't redirect to another route when that has nested routes. In this case, we must set `component` for the route.

_router/index.js_

```js
const routes = [
  {
    path: '/main',
    
    // redirect not working
    redirect: '/user',
    
    // must set 'component' when has nested components
    component: () => import('@/views/MainView'),
    
    children: [
      {
        path: 'a',
        component: () => import('@/components/ComponentA'),
      },
      {
        path: 'b',
        component: () => import('@/components/ComponentB'),
      },
    ]
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('@/views/UserView'),
  },
]
```

### Relative Redirecting

Q: demo not working

_router/index.js_

```js
const routes = [
  {
    path: '/user/:id/post',
    name: 'userPost',

    // works
    redirect: { name: 'userProfile' },

    // not working
    redirect: () => {
      return 'profile'
    },
  },
  {
    path: '/user/:id/profile',
    name: 'userProfile',
    component: User,
  },
]
```

## Alias

Q: relative alias are not working

- We must pass params to alias routes when `path` has params.

_router/index.js_

```js
const routes = [
  {
    path: '/user',
    component: () => import('@/views/UserView'),
    alias: [
      '/people', // absolute path: /people
      'list', // relative path: /user/list -> not working
    ]
  },
  {
    path: '/person/:id',
    component: () => import('@/views/PersonView'),
    alias: [
      '/someone/:id', // with params
    ],
  }
]
```

## Redirect vs Alias

- `redirect`: access another route
- `alias`: access the same route, just route names are different

## Refs

- [Redirect and Alias](https://router.vuejs.org/guide/essentials/redirect-and-alias.html)

