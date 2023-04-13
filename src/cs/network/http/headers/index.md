---
date: 2021-02-15
category: network
tag:
- http
- origin
---

# HTTP Headers

## 原因

- 让浏览器和服务器传递额外的信息

## 常见 Header

### request headers

- Accept : 浏览器可接受数据格式
- Accept-Encoding : 浏览器可授受的压缩算法
- Accept-Language : 浏览器可授受的语言
- Connection : keep-alive | close -> 当前事务完成后连接是否断开
- Cookie : 服务器通过 `Set-Cookie` 发送过来的字符串
- Host : 请求要发送的服务器的主机和端口号
- User-Agent : 浏览器/操作系统/应用信息
- Content-Type : 发送数据的格式

### response headers

- Content-Type : 发送数据的格式
- Content-Length : 发送数据的大小，单位为字节
- Content-Encoding : 发送数据的压缩算法
- Skip...
