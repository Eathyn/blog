---
date: 2023-06-16
category: 微信小程序
tag:
  - 配置
  - app.json
---

# app.json

- 通过 `app.json` 进行全局配置。

## resolveAlias

> Reference: [resolveAlias](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html)

- 微信小程序的 `require` 只支持相对路径，如果嵌套得比较深，路径就会出现很多 `..`，强迫症实在受不了。可以在 `app.json` 中配置路径别名解决这个问题。

```json
{
  "resolveAlias": {
    "/*": "/*"
  }
}
```
