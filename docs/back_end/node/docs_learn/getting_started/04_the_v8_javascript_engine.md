# The V8 JavaScript Engine

- V8 is the name of the JavaScript engine that powers Google Chrome. It's the thing that takes our JavaScript and executes it while browsing with Chrome.
- V8 is the JavaScript engine that parses and executes JavaScript code.

## Other JS engines

Other browsers have their own JavaScript engine: 
  - Firefox: SpiderMonkey
  - Safari: JavaScriptCore (also called Nitro)
  - Edge was originally based on Chakra but has more recently been rebuilt using Chromium and the V8 engine.

- All those engines implement the ECMA ES-262 standard

## The quest for performance

- V8 is written in C++.

## Compilation

- JavaScript is generally considered an interpreted language, but modern JavaScript engines no longer just interpret JavaScript, they compile it.
- JavaScript is internally compiled by V8 with just-in-time (JIT) compilation to speed up the execution.

## Refs

- [The V8 JavaScript Engine](https://nodejs.dev/en/learn/the-v8-javascript-engine/)
