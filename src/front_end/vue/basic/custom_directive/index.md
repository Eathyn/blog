---
date: 2022-06-19
category: Vue
tag:
- basic
- custom directive
---

# Custom Directive

## 对比

- component：复用一整个构建块。
- composable：复用有状态的逻辑。
- custom directive：复用操作 DOM 的逻辑。

## 本质

- 自定义指令本质上就是一个包含钩子函数的对象，当自定义指令所在的元素挂载（mount）、更新（update）或取消挂载（unmounted）时就会触发这些钩子函数：

```javascript
const myDirective = {
  created(el, binding, vnode, prevVnode) {},
  beforeMount(el, binding, vnode, prevVnode) {},
  mounted(el, binding, vnode, prevVnode) {},
  beforeUpdate(el, binding, vnode, prevVnode) {},
  updated(el, binding, vnode, prevVnode) {},
  beforeUnmount(el, binding, vnode, prevVnode) {},
  unmounted(el, binding, vnode, prevVnode) {},
}
```

## 在 Vue 不同版本的区别

- hooks 不同。[vue-2](https://v2.vuejs.org/v2/guide/custom-directive.html#Hook-Functions) | [vue-3](https://vuejs.org/guide/reusability/custom-directives.html#directive-hooks)
- vue-3 可以在 `setup` 和 `directives` 中定义，vue-2 只能在 `directives` 中定义。[vue-2](https://v2.vuejs.org/v2/guide/custom-directive.html#Intro) | [vue-3](https://vuejs.org/guide/reusability/custom-directives.html#introduction)

## 其他

- 在 Vue-2 中，如果只需要定义 `bind` 和 `update` 钩子函数，就可以使用简易的函数定义指令。[link](https://v2.vuejs.org/v2/guide/custom-directive.html#Function-Shorthand)
- 在 Vue-3 中，如果只需要定义 `mounted` 和 `updated` 钩子函数，就可以使用简易的函数定义指令。[link](https://vuejs.org/guide/reusability/custom-directives.html#function-shorthand)
- 自定义指令可以传递多个值。[vue-2](https://v2.vuejs.org/v2/guide/custom-directive.html#Object-Literals) | [vue-3](https://vuejs.org/guide/reusability/custom-directives.html#object-literals)
- 不建议在组件上使用自定义指令。[link](https://vuejs.org/guide/reusability/custom-directives.html#usage-on-components)
- 可以定义全局指令。[vue-2](https://v2.vuejs.org/v2/guide/custom-directive.html#Intro) | v[ue-3](https://vuejs.org/guide/reusability/custom-directives.html)

## Refs

- [Docs: Vue-2.x](https://v2.vuejs.org/v2/guide/custom-directive.html)
- [Docs: Vue-3.x](https://vuejs.org/guide/reusability/custom-directives.html)
- [Blog](https://blog.logrocket.com/deep-dive-custom-vue-directives/)
