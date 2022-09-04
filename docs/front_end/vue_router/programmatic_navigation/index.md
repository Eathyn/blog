# Programmatic Navigation

## Navigate to A Different Location

### Navigation Methods

- `router-link`
- `this.$router.push`

```vue
<template>
  <!-- router-link -->
  <router-link to="/user/2">router-link</router-link> |
  <a @click="push">router.push</a>
  <div>userId: {{ userId }}</div>
</template>

<!-- options api -->
<script>
export default {
  name: 'UserView',
  watch: {
    '$route.params'(currentParams) {
      this.userId = currentParams.userId
    },
  },
  data() {
    return {
      userId: this.$route.params.userId
    }
  },
  methods: {
    push() {
      // this.$router.push 
      this.$router.push('/user/2')
    },
  },
}
</script>

<!-- composition api -->
<script setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const userId = ref(route.params.userId)

watch(
  () => route.params,
  (currentParams) => {
    userId.value = currentParams.userId
  }
)

function push() {
  // router.push
  router.push('/user/2')
}
</script>
```

- Previous methods both push a new entry into the history stack.


### Argument of `router.push`

- The argument of `router.push` can be:
  - a string
  - an object

```js
// string
this.$router.push('/user/2')

// object with path
this.$router.push({ path: '/user/2' })

// object with named route and params
this.$router.push({ name: 'user', params: { userId: 2 } })

// object with path and query -> /user?greet=hi
this.$router.push({ name: 'user', query: { greet: 'hi' } })

// object with hash -> /user/#test
this.$router.push({ name: 'user', hash: '#test' })
```

- If possible use `name` and `params` to benefit from URL encoding.
- `params` cannot be used alongside `path`.
- When specifying params, make sure to either provide a string or number (or an array of these for repeatable params). Any other type  will be automatically stringified.

## Replace Current Location

- Navigating without pushing a new history entry.

### Methods to Replace

- `<router-link to="..." replace>`
- `this.$router.replace`
- `this.$router.push({ replace: true })`

```vue
<template>
  <h1>User ID: {{ userId }}</h1>
  <button @click="NavUserOne">user-1</button> |
  <router-link to="/user/2" replace><button>user-2</button></router-link> |
  <button @click="routerReplace">user-3</button>
</template>

<!-- options api -->
<script>
export default {
  name: 'UserView',
  watch: {
    '$route.params'(currentParams) {
      this.userId = currentParams.userId
    },
  },
  data() {
    return {
      userId: this.$route.params.userId,
    }
  },
  methods: {
    NavUserOne() {
      this.$router.push({ name: 'user', params: { userId: 1 } })
    },
    routerReplace() {
      this.$router.replace({ name: 'user', params: { userId: 3 } })
      this.$router.push({ name: 'user', params: { userId: 3 }, replace: true })
    },
  }
}
</script>

<!-- composition api -->
<script setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const userId = ref(route.params.userId)

watch(
  () => route.params,
  (params) => {
    userId.value = params.userId
  }
)

function NavUserOne() {
  router.push({ name: 'user', params: { userId: 1 }, replace: true })
}

function routerReplace() {
  router.replace({ name: 'user', params: { userId: 3 } })
  router.push({ name: 'user', params: { userId: 3 }, replace: true })
}
</script>
```

## Refs

- [Programmatic Navigation](https://router.vuejs.org/guide/essentials/navigation.html)
