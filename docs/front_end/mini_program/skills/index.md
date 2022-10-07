# Skills

## Non-promise to Promise

### BackGround

- `success` and `fail` in API like `wx.request` or `wx.uploadFile` are callbacks so the readability and maintainability is poor.

```js
wx.request({
  url: 'test-url',
  method: 'GET',
  success: () => {},
  fail: () => {},
})
```

- It's better to return a promise so that we can use `await` keyword to deal with callback hell.

### Solution-1

- Encapsulating a function that returns a `promise`. In that `promise`, we can assign `resolve` and `reject` to `success` and `fail` respectively.

```js
function wxToPromise(method, options = {}) {
  return new Promsise ((resolve, reject) => {
    options.success = resolve
    options.reject = (error) => {
      reject(error)
    }
    wx[method](options)
  })
}
```

### Solution-2

- Using [miniprogram-api-promise](https://github.com/wechat-miniprogram/miniprogram-api-promise) package.
