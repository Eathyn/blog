---
date: 2021-11-23
category: solution
tag: 登出
---

# 登出

## Process

1. Call logout API from backend.
2. Remove token.
3. Remove rules.
4. Reset router.
5. Reset state.

## Code

::: code-tabs

@tab Navbar.vue
```vue
<script>
export default {
  methods: {
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>
```

@tab user.js
```js
const actions = {
  logout({ commit, state, dispatch }) {
    return new Promise((resolve, reject) => {
      // Call logout API from backend
      logout(state.token).then(() => {
        // remove token in vuex
        commit('SET_TOKEN', '')
        // remove rules in vuex
        commit('SET_ROLES', [])
        // remove token
        removeToken()
        // remove router
        resetRouter()
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  }
}
```

:::
