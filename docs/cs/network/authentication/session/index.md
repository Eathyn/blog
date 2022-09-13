# Session

## What is Session

- Some unique data about that client to allow the server to keep track of the user’s state.

## Process

1. the server generates a session and store it in the server
2. the server sends a cookie which contain the session id to the browser
3. the browser stores the session id in the browser

## Differences with Cookie

- session is safer: sessions are stored in servers but cookies are stored in browsers
- session is more flexible: data types of session are various but that of cookie can only be string
- session has larger capacity: the size of a pair of cookies cannot exceed 4KB but session can

## Demo

_front end_

```js
async function handleLogin() {
  const res = await request({
    url: '/login',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify(account),
  })
  const { data } = res
  setSessionId(data.sessionId)
  await router.push({ name: 'main' })
}
```

_back end_

```js
const express = require('express')
const path = require('path')
const sessions = require('express-session')
const cookieParser = require('cookie-parser')
const accounts = require('./accounts.js')

const app = express()
const port = 8000

app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use(cookieParser())
// CORS
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Session-ID-Test')
  next()
})
// Session
app.use(sessions({
  secret: 'hello-world',
  saveUninitialized: true,
  cookie: { maxAge: 1000 * 60 * 60 * 24 },
  resave: false,
}))

function accountMatch(name, password) {
  let isMatch = false
  accounts.forEach((account) => {
    isMatch = account.name === name && account.password === password
  })
  return isMatch
}

app.post('/login', (req, res) => {
  const { name, password } = req.body
  const isMatch = accountMatch(name, password)
  if (isMatch) {
    res.status(200).send({ sessionId: req.session.id })
  } else {
    res.status(401).send('Account or password is wrong.')
  }
})

app.listen(port, () => console.log(`server running at port ${port}...`))
```

## Refs

- [History of Authentication](https://www.cnblogs.com/moyand/p/9047978.html)
- [Session](https://juejin.cn/post/6844904034181070861#heading-4)
- [Differences between Cookie and Session](https://www.javatpoint.com/session-vs-cookies)
- [Demo Repo](https://github.com/Eathyn/authentication/tree/session)
