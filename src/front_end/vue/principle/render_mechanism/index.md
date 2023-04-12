---
date: 2022-09-04
category: Vue
tag:
- principle
- vue render mechanism
---

# Render Mechanism

## Virtual DOM

- 挂载(mount) : 渲染器将虚拟 DOM 转化为真实 DOM 的过程
- 修补(patch) / 比较差异(diffing) / 协调(reconciliation) : 比较两个虚拟 DOM 的不同并在真实 DOM 上做出改变

## Render Pipeline

1. 编译器把模板编译成渲染函数
2. 渲染函数返回虚拟 DOM 树
3. 渲染器把虚拟 DOM 树渲染成真实 DOM 树
4. 当响应式数据改变的时候更新虚拟 DOM 树，重新执行第三步

## Refs

- [Render Mechanism](https://vuejs.org/guide/extras/rendering-mechanism.html)
