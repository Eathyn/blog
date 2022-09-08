# Login

## 表单校验

- 表单校验通过后跳转到主页

## 动态生成路由表

- 跳转到主页时会触发全局路由守卫 `beforeEach`

```js
router.beforeEach(async(to, from, next) => {
  // 存在 token 说明用户已经登录；反之未登录
  const hasToken = getToken()

  if (hasToken) {
    // 如果在已登录的状态下访问登录页面，则跳转到主页
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      const hasGetUserInfo = store.getters.name
      if (hasGetUserInfo) {
        next()
      } else {
        try {
          // 获取用户信息
          await store.dispatch('user/getInfo')
          next()
        } catch (error) {
          // 获取不到用户信息则删除 token 并重定向到登录页面
          await store.dispatch('user/resetToken')
          Message.error(error || 'Has Error')
          next(`/login`)
        }
      }
    }
  } else {
    // 如果没有 token 则判断访问的路径是否在白名单内
    // 如果在白名单内则允许跳转，反之则跳转到登录页面
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
    }
  }
})
```

## 保存 `token`

- 将 `token` 保存在 `vuex` 中
- 将 `token` 通过 `js-Cookie` 库保存在本地 `Cookie` 中，这样下次打开页面或者刷新页面的时候不需要重新登录

_store/modules/user.js_

```js
const actions = {
  login({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password }).then(response => {
        const { data } = response
        commit('SET_TOKEN', data.token)
        setToken(data.token)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
}
```

_utils/auth.js_

```js
import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}
```
