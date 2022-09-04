# Data Fetching

## Fetching After Navigation

- Performing the navigation first, and fetch data in the incoming component's lifecycle hook (like `created`).

```vue
<script setup>
import { reactive, ref } from 'vue'

const name = ref('')
let info = reactive({
  login: '',
  id: '',
})

async function fetchUserInfo() {
  if (name.value === '') {
    return
  }
  const res = await fetch(`https://api.github.com/users/${name.value}`)
  if (res.ok) {
    const { login, id } = await res.json()
    info.login = login
    info.id = id
  }
}

fetchUserInfo()
</script>
```

## Fetching Before Navigation

- Fetching data before navigation in the route enter guard, and perform the navigation after data has been fetched.
- We can perform the data fetching in the `beforeRouteEnter` guard in the incoming component, and only call `next` when the fetch is complete.

```vue
<script>
export default {
  async beforeRouteEnter(to, from, next) {
    try {
      next((vm) => {
        vm.fetchUserInfo()
      })
    } catch (e) {
      console.error(e)
    }
  },
  methods: {
    async fetchUserInfo() {
      this.info = null
      if (this.name === '') {
        return
      }
      const res = await fetch(`https://api.github.com/users/${this.name}`)
      if (res.ok) {
        this.info = await res.json()
      } else {
        throw new Error('fetch data fail')
      }
    },
  },
}
</script>
```

## Refs

- [Data Fetching](https://router.vuejs.org/guide/advanced/data-fetching.html)
