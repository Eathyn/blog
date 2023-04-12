---
date: 2022-06-19
category: Vue
tag:
- basic
- custom directive
---

# Custom Directive

## 原因

自定义指令（custom directive）可以复用操作 DOM 的逻辑。

## 区别

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
