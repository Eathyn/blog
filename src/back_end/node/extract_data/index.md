---
date: 2023-08-09
category: Node.js
---

# Extract Data

介绍几种在服务端获取客户端传递的数据的方式。

## Express

### Body

- 需要使用 `body-parser` 处理。
- 请求
  - 路径：`http://127.0.0.1:3000/find_user`
  - 参数：body -> x-www-form-urlencoded -> { id: 1 }

```javascript
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.post('/find_user', (req, res) => {
  const {id} = req.body
  res.send(`the user is found. id: ${id}`)
})
```

### Query String

- 请求路径：`http://127.0.0.1:3000/find_user?id=100`

```javascript
app.get('/find_user', (req, res) => {
  const {id} = req.query
  res.send(`the user is found. id: ${id}`)
})
```

### Route Parameter

- 请求路径：`http://127.0.0.1:3000/find_user/3`

```javascript
app.get('/find_user/:id', (req, res) => {
  const {id} = req.params
  res.send(`the user is found. id: ${id}`)
})
```
