# CORS

- CORS: Cross-Origin Resource Sharing

## 使用原因

- 如果前端项目运行的域和后端的域不相同，则前端无法访问后端数据
- 服务器通过跨域机制设置允许哪些域可以访问自己的数据

## 配置

- 服务器设置 HTTP 头部
    - `Access-Control-Allow-Origin`
    - `Access-Control-Allow-Methods`
    - `Access-Control-Allow-Headers`

## 简单请求 (simple request)

### 定义

- 不需要触发跨域预检的请求

### 需要满足下列所有条件

- HTTP 方法
  - GET
  - HEAD
  - POST
- HTTP 头部
  - 浏览器自动添加的头部，例如: Connection, User-Agent 等
  - Accept-Language
  - Content-Language
  - Content-Type
  - Range
- Content-Type 的值为
  - application/x-www-form-urlencoded
  - multipart/form-data
  - text/plain

## 预检请求 (preflighted request)

### 定义

- 先发送 `OPTIONS` 方法的请求验证服务器是否允许实际的请求，然后再发送实际的请求

## Refs

- [MDN : cors](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
