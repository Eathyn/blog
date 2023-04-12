---
date: 2020-12-24
category: CSS
tag: 
- repaint
- reflow
---

# Repaint and Reflow

## Repaint 重绘

- 元素外观改变，如背景色、颜色
- 元素尺寸、定位不变，不会影响其他元素的位置

## Reflow 重排

- 元素尺寸和布局改变，可能会影响其他元素的位置

## 减少重排的方法

- 集中修改样式，或直接切换 css class
- 修改前先设置为 `display: none`，使其脱离文本流，修改完成后再设置 `display`
- 使用 BFC，不影响其他元素
- 使用 `createDocumentFragment` 批量操作 DOM
- 使用 CSS3 和 `requestAnimationFrame` 优化动画

## Ref

- [mock 562 : 6-20](https://coding.imooc.com/class/chapter/562.html#Anchor)
- [Repaint and Reflow](https://dev.to/gopal1996/understanding-reflow-and-repaint-in-the-browser-1jbg)
