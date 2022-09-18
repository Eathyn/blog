# How to Config 404 Page

- Using `path: *` to match all undefined routes.
- Placing this route at the end of the route definitions.

```js
const routes = [
  // other routes
  // ...

  {
    path: '*',
    redirect: '/404',
  }
]
```
