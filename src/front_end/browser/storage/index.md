---
date: 2023-06-12
category: Browser
tag: storage
---

# LocalStorage vs SessionStorage

> Reference: [Modern JavaScript](https://javascript.info/localstorage#summary)

## 区别-1

- `localStorage`：数据在同源（origin）的所有标签页（tabs）和窗口（windows）共享。
- `sessionStorage`：数据只在一个标签页中可见。

## 区别-2

- `localStorage`：重新打开浏览器后数据依然存在。
- `sessionStorage`：刷新网页后数据依然存在，关闭标签业后数据消失。
