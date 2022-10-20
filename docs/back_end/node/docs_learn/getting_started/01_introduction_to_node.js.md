# Introduction to Node.js

- Node.js is an open-source and cross-platform JavaScript runtime environment.
- Node.js runs the V8 JavaScript engine, the core of Google Chrome, outside of the browser.
- A Node.js app runs in a single process, without creating a new thread for every request.
- Node.js provides a set of asynchronous I/O primitives in its standard library that prevent JavaScript code from blocking and generally, libraries in Node.js are written using non-blocking paradigms, making blocking behavior the exception rather than the norm.
- When Node.js performs an I/O operation, instead of blocking the thread and wasting CPU cycles waiting, Node.js will resume the operations when the response comes back. This allows Node.js to handle thousands of concurrent connections with a single server without introducing the burden of managing thread concurrency, which could be a significant source of bugs.
- In Node.js the new ECMAScript standards can be used without problems.

## An Example Node.js Application

```js
const http = require('http')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello Node.js\n')
})

server.listen(port, hostname, () => {
  console.log(`server running at ${hostname}:${port}...`)
})
```

## Refs

- [Introduction to Node.js](https://nodejs.dev/en/learn/)
