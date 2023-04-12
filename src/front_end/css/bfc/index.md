---
date: 2020-11-12
category: CSS
tag: BFC
---

# BFC

## Definition

- Block Format Context 块级格式化上下文
- 内部元素无论如何改动，都不会影响其他元素的位置

## Trigger BFC

- html 元素
- flot: left / right
- overflow: auto / scroll / hidden
- position: absolute / fixed
- display: flex / grid 的直接子元素
- display: inline-block / table / table-row / table-cell
