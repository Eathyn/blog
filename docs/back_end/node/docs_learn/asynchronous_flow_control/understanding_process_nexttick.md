# Understanding Process.nextTick()

- Every time the event loop takes a full trip, we call it a tick.
- When we pass a function to `process.nextTick()`, we instruct the engine to invoke this function at the end of the current operation, before the next event loop tick starts.
- It's the way we can tell the JS engine to process a function asynchronously (after the current function), but as soon as possible, not queue it.
- Calling `setTimeout(() => {}, 0)` will execute the function at the end of next tick, much later than when using `nextTick()` which prioritizes the call and executes it just before the beginning of the next tick.
- Use `nextTick()` when you want to make sure that in the next event loop iteration that code is already executed.

## Refs

- [Understanding Process.nextTick()](https://nodejs.dev/en/learn/understanding-processnexttick/)
