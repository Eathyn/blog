---
date: 2021-02-19
category: Browser
tag: scroll
---

# Scroll Skills

## 分页加载

```js
// 闭包，为了私有化 index 变量
function generateDataWrap() {
  let index = 0

  return function generateData() {
    const body = document.querySelector('body')
    for (let i = 0; i < 10; i++) {
      const div = document.createElement('div')
      div.innerText = `${index}`
      index++
      div.setAttribute('class', 'item')
      body.append(div)
    }
  }
}

const generateData = generateDataWrap()

window.addEventListener('scroll', () => {
  const html = document.documentElement // html 元素的高度，即可视化区的高度 + 非可视化区的高度
  const visibleHeight = window.innerHeight // 可视化区的高度

  // 画图理解
  if (html.getBoundingClientRect().bottom - 50 < visibleHeight) {
    generateData()
  }
})

generateData()
```

## Refs

- [分页加载](https://javascript.info/onscroll#endless-page)
