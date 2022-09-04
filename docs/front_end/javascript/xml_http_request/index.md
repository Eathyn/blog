# XMLHttpRequest

## 定义

- 可以发送 HTTP 请求的浏览器内置对象

## 过程

1. 创建 XMLHttpRequest 实例
2. 初始化实例
3. 发起请求

## 使用

```js
const baseURL = 'http://localhost:4000'
// 1. 创建 XMLHttpRequest 实例
const xhr = new XMLHttpRequest()
// 2. 初始化实例
xhr.open('GET', `${baseURL}/test1`)
// 3. 发起请求
xhr.send()

// 请求已完成且响应数据已下载完成
xhr.onload = function() {
  console.log('loaded: ', xhr)
}
// 请求遇到错误 (如: 无网络/URL错误)
xhr.onerror = function() {
  console.log('network error')
}
// 响应式数据正在下载
xhr.onprogress = function(evt) {
  console.log('progress: ', evt)
}
```

## 封装

```js
function ajax(options = {}) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    const { type = 'GET', baseURL, url, params, data } = options
    options.type = type.toUpperCase()
    options.url = new URL(url, baseURL)
    const hasParams = params && Object.keys(params).length !== 0

    if (options.type === 'GET') {
      let paramsStr = []
      for (const key in params) {
        paramsStr.push(`${key}=${params[key]}`)
      }
      paramsStr = paramsStr.join('&')
      const actualURL = hasParams ? `${options.url}?${paramsStr}` : `${options.url}`
      xhr.open('GET', actualURL)
      xhr.send()
      xhr.onload = () => resolve(xhr)
      xhr.onerror = () => reject(xhr)
      return
    }

    if (options.type === 'POST') {
      xhr.open('POST', options.url)
      xhr.send(JSON.stringify(data))
      xhr.onload = () => resolve(xhr)
      xhr.onerror = () => reject(xhr)
      return
    }

    reject(new Error('don\'t support other HTTP methods'))
  })
}
```
