---
date: 2022-04-20
category: Browser
tag: event loop
---

# Event Loop

## Concept

- macrotask / task:
  - script
  - timer: setTimeout / setInterval / setImmediate
  - requestAnimationFrame
  - I/O
  - UI Rendering

- microtask / job:
  - promise
  - await
  - process.nextTick
  - MutationObserver
  - queueMicrotask

- task queue: a queue to store macrotask/task
- job queue: a queue to store microtask/job

## Event Loop Process

1. Run a macrotask. Enqueue macrotasks to task queue. Enqueue microtasks to job queue.
2. Run all microtasks in job queue if JS stack is idle.
3. Rerender UI
4. Queue a macrotask and run a macrotask. (go to step 1)

## Other

- UI 渲染和执行任务不会同时进行
- 倒计时结束后 setTimeout 的回调函数才会进入 macrotask queue。同样的，Promise 的状态从 pending 转变为 fulfilled 或 rejected 后，then 或 catch 的回调函数才会进入 microtask queue。代码如下：
- microtasks can enqueue new microtasks and those new microtasks will execute before the next task begins to run, and before the end of the current event loop iteration.

```js
// 打印结果：start, microtask-1, microtask-2, macrotask, microtask-3, microtask-4
// 注意：microtask-3, microtask-4 在 macrotask 之后

console.log('start')

Promise.resolve().then(function f1() {
  console.log('microtask-1')
}).then(function f2() {
  console.log('microtask-2')
  // 2000ms 后返回响应
  return fetch('http://localhost:3001/')
}).then(function f3(response) {
  console.log('microtask-3')
  return response.json()
}).then(function f4(data) {
  console.log('microtask-4')
})

setTimeout(function f5() {
  console.log('macrotask')
}, 0)
```

## Refs

- [Modern JavaScript: Event Loop and Macrotask](https://javascript.info/event-loop)
- [Modern JavaScript: Microtask](https://javascript.info/microtask-queue)
- [Event Loop and Microtasks](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)
- [Event Loop](https://medium.com/front-end-weekly/javascript-event-loop-explained-4cd26af121d4)
- [Event Loop: Stack, Heap and Message Queue](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)
- [Microtask Guide](https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API/Microtask_guide)
