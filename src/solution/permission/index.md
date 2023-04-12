---
date: 2021-11-13
category: solution
tag: 权限管理
---

# 权限管理

## 路由

### 登录

登录获取用户角色 `roles`，具体参考[登录](../login/)文章

### 过滤路由

跳转到主页时会触发全局路由守卫 `beforeEach` 钩子函数，在钩子函数中调用 `generateRoutes` 函数。代码如下：

> [src/permission.js](https://github.com/PanJiaChen/vue-element-admin/blob/0caa975ee224074c77540107b1fe076081cdf306/src/permission.js)

```js
// generate accessible routes map based on roles
const accessRoutes = await store.dispatch('permission/generateRoutes', roles)
```

`generateRoutes` 函数根据后端发过来的用户权限过滤出该用户可以访问的路由。`asyncRoutes` 包含所有需要权限的路由，根据用户角色进行过滤。代码如下：

> [src/store/modules/permission.js](https://github.com/PanJiaChen/vue-element-admin/blob/0caa975ee224074c77540107b1fe076081cdf306/src/store/modules/permission.js)

```js {4-9}
function generateRoutes({ commit }, roles) {
  return new Promise(resolve => {
    let accessedRoutes
    if (roles.includes('admin')) {
      // asyncRoutes: the routes that need to be dynamically loaded based on user roles
      accessedRoutes = asyncRoutes || []
    } else {
      accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
    }
    commit('SET_ROUTES', accessedRoutes)
    resolve(accessedRoutes)
  })
}

// 虚拟数据
const asyncRoutes = [
  {
    name: 'a',
    meta: {
      roles: ['admin', 'editor']
    },
    children: [
      {
        name: 'a-1',
        meta: {
          roles: ['admin']
        },
      },
      {
        name: 'a-2',
        meta: {
          roles: ['editor']
        },
      },
    ]
  },
  {
    name: 'b',
    meta: {
      role: ['admin'],
    },
  }
]
```

`filterAsyncRoutes` 函数递归地过滤所有符合该用户权限的路由，采用深度优先遍历，递归的结束条件是路由没有 `children` 属性。

> [src/store/modules/permission.js](https://github.com/PanJiaChen/vue-element-admin/blob/0caa975ee224074c77540107b1fe076081cdf306/src/store/modules/permission.js)

```js
function filterAsyncRoutes(routes, roles) {
  const res = []
  routes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      res.push(tmp)
    }
  })
  return res
}
```

`hasPermission` 根据路由中的 meta 属性和后端返回的用户角色判断该用户是否可以拥有该路由。代码如下：

> [src/store/modules/permission.js](https://github.com/PanJiaChen/vue-element-admin/blob/0caa975ee224074c77540107b1fe076081cdf306/src/store/modules/permission.js)

```js
function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
}
```

### 挂载路由

获取符合用户角色的路由后，通过 `route.addRoutes()` 挂载路由。代码如下：

> [src/permission.js](https://github.com/PanJiaChen/vue-element-admin/blob/0caa975ee224074c77540107b1fe076081cdf306/src/permission.js)

```js {3-4}
// generate accessible routes map based on roles
const accessRoutes = await store.dispatch('permission/generateRoutes', roles)
// dynamically add accessible routes
router.addRoutes(accessRoutes)
```

## HTML 标签

### 编写指令

- 从 Vuex 中获取用户的角色，与指令的值对比，判断该用户是否拥有这个元素的权限。如果没有权限，则通过该标签的父元素删除这个标签。
- 指令需要使用到 `inserted` 和 `update`（在 Vue-3 中是 `mounted` 和 `updated`）。

> [src/directive/permission/permission.js](https://github.com/PanJiaChen/vue-element-admin/blob/0caa975ee224074c77540107b1fe076081cdf306/src/directive/permission/permission.js)

```js
import store from '@/store'

function checkPermission(el, binding) {
  const { value } = binding
  // 从 vuex 中获取用户角色（后端返回的）
  const roles = store.getters && store.getters.roles

  if (value && value instanceof Array) {
    if (value.length > 0) {
      const permissionRoles = value

      // 判断是否拥有权限
      const hasPermission = roles.some(role => {
        return permissionRoles.includes(role)
      })

      // 如果没有权限则删除该元素
      if (!hasPermission) {
        el.parentNode && el.parentNode.removeChild(el)
      }
    }
  } else {
    throw new Error(`need roles! Like v-permission="['admin','editor']"`)
  }
}

export default {
  // called when the bound element has been inserted into its parent node
  inserted(el, binding) {
    checkPermission(el, binding)
  },
  // called after the containing component’s VNode has updated, but possibly before its children have updated.
  update(el, binding) {
    checkPermission(el, binding)
  }
}
```

### 使用指令

`install` 方法是一个插件，在该方法中定义了全局指令 `v-permission`。调用 `Vue.use(install)` 会使用这个插件。

> [src/directive/permission/index.js](https://github.com/PanJiaChen/vue-element-admin/blob/0caa975ee224074c77540107b1fe076081cdf306/src/directive/permission/index.js)

```js
import permission from './permission'

// plugin
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

### 基本使用

以 `v-permission` 的形式就可以使用自定义指令。

> [src/views/permission/directive.vue](https://github.com/PanJiaChen/vue-element-admin/blob/0caa975ee224074c77540107b1fe076081cdf306/src/views/permission/directive.vue)

```js
<span v-permission="['admin']" class="permission-alert">Only</span>
```

### 注意

不推荐在组件上使用自定义指令[link](https://vuejs.org/guide/reusability/custom-directives.html#introduction)。组件可以使用 `v-if` 进行权限管理。逻辑和 `v-permission` 差不多。

> [src/views/permission/directive.vue](https://github.com/PanJiaChen/vue-element-admin/blob/0caa975ee224074c77540107b1fe076081cdf306/src/views/permission/directive.vue)

```js
<el-tab-pane v-if="checkPermission(['admin','editor'])" label="Admin-OR-Editor">
  Both admin or editor can see this
</el-tab-pane>
```

> [src/utils/permission.js](https://github.com/PanJiaChen/vue-element-admin/blob/0caa975ee224074c77540107b1fe076081cdf306/src/utils/permission.js)

```js
import store from '@/store'

/**
 * @param {Array} value
 * @returns {Boolean}
 * @example see @/views/permission/directive.vue
 */
export default function checkPermission(value) {
  if (value && value instanceof Array && value.length > 0) {
    const roles = store.getters && store.getters.roles
    const permissionRoles = value

    const hasPermission = roles.some(role => {
      return permissionRoles.includes(role)
    })
    return hasPermission
  } else {
    console.error(`need roles! Like v-permission="['admin','editor']"`)
    return false
  }
}
```

## Refs

- [Dynamic Generate Routes](https://juejin.cn/post/6844903478880370701#heading-3)
- [权限验证](https://panjiachen.gitee.io/vue-element-admin-site/zh/guide/essentials/permission.html)
- [Vue Element Admin Code](https://github.com/PanJiaChen/vue-element-admin)
