# JavaScript Asynchronous Programming and Callbacks

## Asynchronicity in Programming Languages

- In the current consumer computers, every program runs for a specific time slot and then it stops its execution to let another program continue their execution. This thing runs in a cycle so fast that it's impossible to notice. We think our computers run many programs simultaneously, but this is an illusion (except on multiprocessor machines).
- Programs internally use interrupts, a signal that's emitted to the processor to gain the attention of the system.
- C, Java, C#, PHP, Go, Ruby, Swift, and Python are all synchronous by default. Some of them handle async operations by using threads, spawning a new process.

## JavaScript

- JavaScript is synchronous by default and is single threaded. This means that code cannot create new threads and run in parallel.

## Callbacks

- A higher order function is a function that takes a function as an argument, or returns a function.
- Error-first callbacks: the first parameter of the callback is the error object.

## Refs

- [JavaScript Asynchronous Programming and Callbacks](https://nodejs.dev/en/learn/javascript-asynchronous-programming-and-callbacks/)
