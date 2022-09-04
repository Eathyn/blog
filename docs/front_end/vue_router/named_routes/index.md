# Named Routes

## Named Routes

- `<router-link :to="{ name: '...' }" />`
- `router.push({ name: '...' })`

```vue
<template>
  <h1>User ID: {{ userId }}</h1>
  <!-- method-1 -->
  <router-link :to="{ name: 'user', params: { userId: 1 } }"><button>user 1</button></router-link> |
  <button @click="NavUserTwo">user 2</button>
</template>

<!-- options api -->
<script>
export default {
  name: 'UserView',
  watch: {
    '$route.params'(params) {
      this.userId = params.userId
    },
  },
  data() {
    return {
      userId: this.$route.params.userId
    }
  },
  methods: {
    NavUserTwo() {
      // method-2
      this.$router.push({ name: 'user', params: { userId: 2 } })
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
const userId = ref(0)

watch(
  () => route.params,
  (params) => {
    userId.value = params.userId
  },
)

function NavUserTwo() {
  // method-2
  router.push({ name: 'user', params: { userId: 2 } })
}
</script>
```

## Refs

- [Named Routes](https://router.vuejs.org/guide/essentials/named-routes.html)
