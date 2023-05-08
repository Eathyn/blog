---
date: 2021-10-18
category: solution
tag: 大文件上传
---

# 文件上传

## 源码

[文件上传](https://github.com/Eathyn/file-upload-solution)

## 检测文件类型

input 元素的 accept 属性可以限制用户上传文件的类型。

```html
<input type="file" accept="image/*, video/*">
```

开发者可能会通过文件后缀或者 `File` 对象来获取文件类型，但是这种检测方式并不可靠，因为用户可以通过修改文件后缀改变文件的类型。很多文件的类型是由起始的几个字节确定的，这些字节称为魔数（magic number）。例如：`JPEG` 的魔数为 `0xFF D8 FF`，PNG 的魔数为 `0x89 50 4E 47 0D 0A 1A 0A`。

可以使用 [file type](https://github.com/sindresorhus/file-type) 通过魔数识别文件类型。

## 文件切片

- 文件切片后可以利用 HTTP 的可并发性同时上传多个切片，这种方式相对于不切片直接上传一个大文件要快得多。

- 使用 `Blob.prototype.slice` 将文件切片。

```js
function createFileChunk(file, size = SIZE) {
  const fileChunkList = []
  let cur = 0
  while (cur < file.size) {
    // cur: 开始字节    cur + size: 结束字节
    fileChunkList.push({ file: file.slice(cur, cur + size) })
    cur += size
  }
  return fileChunkList
}
```

根据文件生成哈希值。因为生成哈希值的计算过程比较耗时，并且 JS 是单线程，所以需要使用 `Web Workers` 开启另一个线程计算哈希值，避免阻塞到主线程导致页面卡顿甚至白屏。

```js
function calculateHash(fileChunkList) {
  return new Promise((resolve) => {
    // 开启子线程
    this.container.worker = new Worker('/hash.js')
    this.container.worker.postMessage({ fileChunkList })
    this.container.worker.onmessage = (e) => {
      const { percentage, hash } = e.data
      this.hashPercentage = percentage
      if (hash) {
        resolve(hash)
      }
    }
  })
}
```

使用 `MD5` 算法根据文件生成哈希值。

```js
// 导入脚本
self.importScripts('/spark-md5.min.js')

// 生成文件 hash
self.onmessage = (e) => {
  const { fileChunkList } = e.data
  generateHashValue(fileChunkList)
}

function generateHashValue(fileChunkList) {
  // SparkMD5 is a fast md5 implementation of the MD5 algorithm.
  // 使用 MD5 算法根据文件生成哈希值
  const spark = new self.SparkMD5.ArrayBuffer()
  let percentage = 0
  let count = 0
  const loadNext = (index) => {
    const reader = new FileReader()
    reader.readAsArrayBuffer(fileChunkList[index].file)
    reader.onload = () => {
      count++
      // 每个切片都调用 `append` 可以使占用内存空间更小：
      // Incremental md5 performs a lot better for hashing large amounts of data, such as files.
      // Append each chunk for md5 hashing while keeping memory usage low.
      spark.append(reader.result)
      if (count === fileChunkList.length) {
        self.postMessage({
          percentage: 100,
          // Finishes the computation of the md5, returning the hex result.
          hash: spark.end(),
        })
        self.close()
      } else {
        percentage += 100 / fileChunkList.length
        self.postMessage({
          percentage,
        })
        loadNext(count)
      }
    }
  }
  loadNext(0)
}
```

每个切片的名称设置为文件的 `哈希值-切片索引`，断点续传时才可以知道哪些切片之前已经上传过。

```js
fileChunkList.map(({ file }, index) => ({
  fileHash: this.container.hash,
  index,
  hash: this.container.hash + '-' + index,
  chunk: file,
  size: file.size,
  percentage: uploadedList.includes(`${this.container.hash}-${index}`)
    ? 100
    : 0,
}))
```

## 文件上传

### 并发控制

并发上传文件切片时，需要控制并发量，避免一次性上传过多切片，导致服务端压力过大。

```js
const requestList = await asyncPool(3, dataList, (item) => {
  const { formData, index } = item
  return this.request({
    url: 'http://localhost:3000',
    data: formData,
    onProgress: this.createProgressHandler(this.data[index]),
    requestList: this.requestList,
  })
})

// 封装并发控制函数: asyncPool
async function asyncPool(poolLimit, iterable, iteratorFn) {
  const ret = []
  const executing = new Set()
  for (const item of iterable) {
    const p = Promise.resolve().then(() => iteratorFn(item, iterable))
    ret.push(p)
    executing.add(p)
    const clean = () => executing.delete(p)
    p.then(clean).catch(clean)
    if (executing.size >= poolLimit) {
      await Promise.race(executing)
    }
  }
  return Promise.all(ret)
}
```

### 断点续传

断点续传指的是上传过程中暂停上传，只上传了一部分文件切片，下一次上传同个文件时不需要上传之前已经上传过的文件切片，只需要上传未上传的文件切片。

断点续传的实现方式是，上传文件切片之前发送一个请求，从后端获取已上传的文件切片的名称列表，前端把已上传的文件切片过滤掉，只上传未上传的文件切片。

```js
// uploadedList: 一个包含已上传的切片的索引，格式为 `文件哈希-切片索引`
const { shouldUpload, uploadedList } = await this.verifyUpload(
  this.container.file.name,
  this.container.hash,
)

// 过滤
const dataList = this.data.filter(({ hash }) => !uploadedList.includes(hash))
```

前端把所有文件切片上传之后，发送一个合并切片的请求，通知后端合并切片。

### 上传进度

利用 `XMLHttpRequest` 实例 `xhr.upload.onprogress` 监听每一个文件切片的上传进度。通过事件中的 `loaded` 和 `total` 就可以知道计算出上传进度。

```js {24}
function request({ url, method = 'post', data, onProgress = (e) => e }) {
  return new Promise((resolv) => {
    const xhr = new XMLHttpRequest()
    // 监听每一个文件切片的上传进度
    xhr.upload.onprogress = onProgress
    // 省略无关代码...
  })
}

// 并发控制，每个文件切片会创建一次 HTTP 请求
const requestList = await asyncPool(3, dataList, (item) => {
  const { formData, index } = item
  return this.request({
    url: 'http://localhost:3000',
    data: formData,
    // 创建监听每一个文件切片的上传进度的函数
    onProgress: this.createProgressHandler(this.data[index]),
    requestList: this.requestList,
  })
})

function createProgressHandler(item) {
  return (e) => {
    item.percentage = parseInt(String((e.loaded / e.total) * 100))
  }
}
```

累加每个文件切片的上传进度就可以得到整个文件的上传进度。

```js
function uploadPercentage() {
  if (!this.container.file || !this.data.length) return 0
  const loaded = this.data
    .map((item) => item.size * item.percentage)
    .reduce((acc, cur) => acc + cur)
  return parseInt((loaded / this.container.file.size).toFixed(2))
}
```

## 扩展：其他文件上传的方式

To be continued...

> 参考: [其他文件上传的方式](https://juejin.cn/post/6980142557066067982)

## Refs

- [检测文件类型](https://juejin.cn/post/6971935704938971173)
- [文件上传解决方案](https://juejin.cn/post/6844904046436843527)
- [What is MD5](https://en.wikipedia.org/wiki/MD5)
- [What is hashing and hash value](https://computersciencewiki.org/index.php/Hashing)
- [FormData](https://javascript.info/formdata)
