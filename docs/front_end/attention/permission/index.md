# Permission

## Generate Routes

### Explanation

1. 创建路由时仅挂载无需权限的路由
2. 向后端获取用户的角色，然后根据用户角色过滤出这个角色可以访问的路由
3. 使用 `router.addRoute` 动态地添加路由

### Code

:::: code-group

::: code-group-item router/index.js

```js
// constantRoutes 中的路由都是无需权限的路由
const constantRoutes = [
  // routes...
]

const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  // 创建路由时仅挂载无需权限的路由
  routes: constantRoutes
})

const router = createRouter()
```

:::

::: code-group-item src/permission.js
```js
router.beforeEach(async(to, from, next) => {
  // 进度条开始
  NProgress.start()

  // 设置页面 title
  document.title = getPageTitle(to.meta.title)

  // 判断用户是否已登录，已登录就存在 token
  const hasToken = getToken()

  if (hasToken) {
    if (to.path === '/login') {
      // if is logged in, redirect to the home page
      next({ path: '/' })
      NProgress.done() // hack: https://github.com/PanJiaChen/vue-element-admin/pull/2939
    } else {
      // determine whether the user has obtained his permission roles through getInfo
      const hasRoles = store.getters.roles && store.getters.roles.length > 0
      if (hasRoles) {
        next()
      } else {
        try {
          // get user info
          // note: roles must be a object array! such as: ['admin'] or ,['developer','editor']
          const { roles } = await store.dispatch('user/getInfo')

          // generate accessible routes map based on roles
          const accessRoutes = await store.dispatch('permission/generateRoutes', roles)

          // dynamically add accessible routes
          router.addRoutes(accessRoutes)

          // hack method to ensure that addRoutes is complete
          // set the replace: true, so the navigation will not leave a history record
          next({ ...to, replace: true })
        } catch (error) {
          // remove token and go to login page to re-login
          await store.dispatch('user/resetToken')
          Message.error(error || 'Has Error')
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      }
    }
  } else {
    /* has no token*/

    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})
```
:::

::: code-group-item str/store/modules/user.js
```js
const actions = {
  // 获取用户信息
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token).then(response => {
        const { data } = response

        if (!data) {
          reject('Verification failed, please Login again.')
        }

        const { roles, name, avatar, introduction } = data

        // roles must be a non-empty array
        if (!roles || roles.length <= 0) {
          reject('getInfo: roles must be a non-null array!')
        }

        commit('SET_ROLES', roles)
        commit('SET_NAME', name)
        commit('SET_AVATAR', avatar)
        commit('SET_INTRODUCTION', introduction)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },
}
```
:::

::: code-group-item src/store/modules/permission.js
```js
// 过滤出属于某个角色的路由
export function filterAsyncRoutes(routes, roles) {
  const res = []

  routes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        // 递归遍历
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      res.push(tmp)
    }
  })

  return res
}

// 判断某个角色是否可以拥有某个路由
function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
}
```
:::

::::

## Custom Directive

- 封装 vue.js 自定义指令实现元素的权限管理

### Explanation

- 从 vuex 中获取用户的角色，然后与自定义指令中传入的角色进行对比，从而判断是否显示该元素

### Code

_src/directive/permission/permission.js_

```js
import store from '@/store'

function checkPermission(el, binding) {
  const { value } = binding
  // 获取用户角色
  const roles = store.getters && store.getters.roles

  if (value && value instanceof Array) {
    if (value.length > 0) {
      const permissionRoles = value

      // 判断用户角色是否属于自定义指令传入的值
      const hasPermission = roles.some(role => {
        return permissionRoles.includes(role)
      })

      // 如果没有权限则将该元素删除
      if (!hasPermission) {
        el.parentNode && el.parentNode.removeChild(el)
      }
    }
  } else {
    throw new Error(`need roles! Like v-permission="['admin','editor']"`)
  }
}

export default {
  // 当绑定自定义指令的元素插入到父元素时触发
  inserted(el, binding) {
    checkPermission(el, binding)
  },
  // 所在的组件的虚拟节点更新时触发
  update(el, binding) {
    checkPermission(el, binding)
  }
}
```

_src/directive/permission/index.js_

```js
import permission from './permission'

const install = function(Vue) {
  Vue.directive('permission', permission)
}

if (window.Vue) {
  window['permission'] = permission
  Vue.use(install); // eslint-disable-line
}

permission.install = install
export default permission
```

## Refs

- [Dynamic Generate Routes](https://juejin.cn/post/6844903478880370701#heading-3)
- [Vue Element Admin Code](https://github.com/PanJiaChen/vue-element-admin)
