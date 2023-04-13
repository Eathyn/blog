---
date: 2021-02-14
category: network
tag: HTTP Response Status Codes
---

# HTTP Response Status Codes

## 分类

- 消息 (informational responses) : 100-199 (请求被接受，需要继续处理)
- 成功响应 (successful responses) : 200-299
- 重定向消息 (redirection messages) : 300-399
- 客户端错误响应 (client error responses) : 400-499
- 服务端错误响应 (server error responses) : 500-599

## 常见响应状态码

- 200 OK : 请求成功
- 201 Created : 请求成功且创建了一个新资源，一般用于处理 POST 和 PUT 请求
- 301 Moved Permanently : 永久重定向
- 302 Found : 临时重定向
- 304 Not Modified : 资源未被修改，用于缓存
- 404 Not Found : 资源未找到
- 401 Unauthorized : 需要证明身份才能获取资源
- 403 Forbidden : 无权限访问资源
- 500 Internal Server Error : 服务器遇到无法处理的情况
- 504 Gateway Timeout : 网关超时

## 注意

### 301 vs. 302

- 301 和 302 浏览器都可以在 `Location` 响应头可以找到新的 URL，然后根据新的 URL 自动进行重定向
- 301 : 浏览器重定向之后会记住新的 URL，以后不会访问旧的 URL
- 302 : 浏览器重定向之后不会记住新的 URL，以后依然访问旧的 URL 并进行重定向
 
### 401 vs. 403

- 401 unauthorized
  - 表示需要证明身份才能获取资源
  - 例子 : 账号不存在、密码错误、未登录去获取资源等
- 403 Forbidden
  - 服务器已经知道你的身份，但是该身份无权限获取数据
  - 例子 : 普通用户向获取管理员身份才能获取的资源

## Refs

- [HTTP response codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
- [401 vs. 403](https://stackoverflow.com/a/6937030/9863318)
