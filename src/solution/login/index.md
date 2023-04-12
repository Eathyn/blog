---
date: 2021-11-18
category: solution
tag: 登录
---

# 登录

## 步骤

1. 前端格式校验
2. 发起请求，后端账号密码校验
3. 前端存储后端发送过来的用户 token 和用户角色
4. 跳转到主页

## 前端校验

前端对数据进行格式校验，不满足格式则不发起请求。

## 后端校验

后端对账号和密码进行校验，返回 `token` 等数据。

## 前端存储 token

前端将 `token` 存储在 `vuex` 和 `Cookie` 中。`token` 存储在 `vuex` 中方便在其他地方直接获取；存储在 `Cookie` 中方便下次直接登录。代码如下：

> [src/store/modules/user.js](https://github.com/PanJiaChen/vue-element-admin/blob/0caa975ee224074c77540107b1fe076081cdf306/src/store/modules/user.js#L33)

```js {6-7}
function login({ commit }, userInfo) {
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
}
```

> [src/utils/auth.js](https://github.com/PanJiaChen/vue-element-admin/blob/0caa975ee224074c77540107b1fe076081cdf306/src/utils/auth.js)

```js {7-9}
import Cookies from 'js-cookie'
const TokenKey = 'Admin-Token'

export function getToken() {
  return Cookies.get(TokenKey)
}
export function setToken(token) {
  return Cookies.set(TokenKey, token)
}
export function removeToken() {
  return Cookies.remove(TokenKey)
}
```

## Refs

- [源码](https://github.com/PanJiaChen/vue-element-admin)
