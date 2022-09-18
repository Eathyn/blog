# Lazy Loading Routes

- When building apps with a bundler, the JavaScript bundle can become quite large, and thus affect the page load time.
- It would be more efficient if we can split each route's components into separate chunks, and only load them when the route is visited.
- Vue Router supports dynamic imports.
- The `component` and `components` option accepts a function that return a Promise of a component and Vue Router will only fetch it when entering the page for the first time, then use the cached version.

```js
const routes = [
  {
    path: '/',
    alias: '/main',
    name: 'main',
    component: () => import('@/views/MainView'),
  },
]
```

- We can use more complex functions as long as they return a Promise.

```js
const routes = [
  {
    path: '/',
    alias: '/main',
    name: 'main',
    component: () => new Promise((resolve) => {
      const MainView = import('@/views/MainView')
      return resolve(MainView)
    }),
  },
]
```

- Do not use Async components for routes. Async components can still be used inside route components but route component themselves are just dynamic imports.

### Grouping Components in the Same Chunk

- Sometimes we may want to group all the components nested under the same route into the same async chunk.

#### With webpack

- Using named chunks by providing a chunk name

```js
const routes = [
  {
    path: '/settings',
    name: 'settings',
    component: () => import('@/views/UserSettings'),
    children: [
      {
        path: 'emails',
        component: () => import('@/components/UserEmailsSubscriptions'),
      },
      {
        path: 'profile',
        components: {
          default: () => import(/* webpackChunkName: 'group-profile' */ '@/components/UserProfile'),
          preview: () => import(/* webpackChunkName: 'group-profile' */'@/components/UserProfilePreview'),
        },
      }
    ]
  }
]
```

#### With Vite

- Defining chunks under the `rollupOptions`

_vite.config.js_

```js
export default defineConfig({
  build: {
    rollupOptions: {
      // https://rollupjs.org/guide/en/#outputmanualchunks
      output: {
        manualChunks: {
          'group-profile': [
            '@/components/UserProfile',
            '@/components/UserProfilePreview',
          ],
        },
      },
    },
  },
})
```

## Refs

- [Lazy Loading Routes](https://router.vuejs.org/guide/advanced/lazy-loading.html)
