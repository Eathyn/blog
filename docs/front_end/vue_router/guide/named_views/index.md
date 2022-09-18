# Named Views

## Basis

- The `router-view` component has the `name` property to name the view.
- The `name` property will be `default` when no setting.
- Using `components` instead of `component` in the router for rendering multiple views.

_router/index.js_

```js
const routes = [
  {
    path: '/main',
    name: 'main',
    component: Main,
    children: [
      {
        path: 'a',
        components: {
          default: ComponentA, // default
          b: ComponentB,
          c: ComponentC,
        },
      },
      {
        path: 'b',
        components: {
          default: ComponentA, // default
          b: ComponentC,
          c: ComponentB,
        },
      },
    ]
  }
]
```

_MainView.vue_

```vue
<template>
  <div>user</div>

  <!-- is equal to <router-view name="default" /> -->
  <router-view />

  <router-view name="b" />

  <router-view name="c" />
</template>
```

## Nested Named Views

_router/index.js_

```js
const routes = [
  {
    path: '/settings',
    name: 'settings',
    component: UserSettings,
    children: [
      {
        path: 'emails',
        component: UserEmailsSubscriptions,
      },
      {
        path: 'profile',
        components: {
          default: UserProfile,
          preview: UserProfilePreview,
        },
      }
    ]
  }
]
```

_UserSettings.vue_

```vue
<template>
  <div>user setting</div>
  <NavComponent />
  <router-view />
  <router-view name="preview" />
</template>

<script setup>
import NavComponent from '@/components/NavComponent'
</script>
```

## Refs

- [Named Views](https://router.vuejs.org/guide/essentials/named-views.html)
