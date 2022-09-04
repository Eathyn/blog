# Scroll Behavior

- This feature only works if the browser supports `history.pushState`.
- The third argument, `savedPosition`, is only available if this is a popstate navigation (triggered by the browser's back/forward buttons).

```js
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, next) {
    // return desired position
  },
})
```

- always scroll to top

```js
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return {
      top: 0,
    }
  },
})
```

- You can also pass a CSS selector or a DOM element via `el`. In that scenario, top and left will be treated as relative offsets to that element.

```js
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return {
      el: '#main',
      top: -10,
    }
  }
})
```

- Returning the `savedPosition` will result in a native-like behavior when navigating with back/forward buttons.

```js
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})
```

## Delaying the scroll

```js
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          top: 0,
          left: 0,
        })
      }, 500)
    })
  }
})
```

## Refs

- [Scroll Behavior](https://router.vuejs.org/guide/advanced/scroll-behavior.html)
