# Route Meta Fields

## Basics

- We can attach arbitrary information (e.g. title, icon name, authority) through `meta` property.

```js
const routes = [
  {
    path: '/main',
    name: 'main',
    component: MainView,
    meta: {
      a: 1,
    },
    children: [
      {
        path: 'info',
        component: () => import('@/components/InfoComp'),
        meta: {
          b: 2,
        },
      },
      {
        path: 'profile',
        component: () => import('@/components/InfoComp'),
        meta: {
          c: 3,
        },
      },
    ],
  },
]
```

- First, each route object in the routes configuration is called a **route record**. Route records may be nested. Therefore, when a route is matched, it can potentially match more than one route record.

- All route records matched by a route are exposed on the `$route` object (and also route objects in navigation guards) as the `$route.matched` Array. We could loop through that array to check all meta fields, but Vue Router also provides you a `$route.meta` that is a non-recursive merge of all meta fields from parent to child.

```vue
<!-- options api -->
<script>
export default {
  name: 'MainView',
  beforeCreate() {
    console.log(this.$route.meta)
  }
}
</script>

<!-- composition api -->
<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
console.log(route.meta)
</script>
```

## TypeScript

Skip

## Refs

- [Route Meta Fields](https://router.vuejs.org/guide/advanced/meta.html)
