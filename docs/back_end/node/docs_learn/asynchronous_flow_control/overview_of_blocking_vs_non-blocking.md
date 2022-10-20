# Overview of Blocking vs Non-Blocking

- "I/O" refers primarily to interaction with the system's disk and network supported by libuv.

## Blocking

- All of the I/O methods in the Node.js standard library provide asynchronous versions, which are non-blocking
- Some methods also have blocking counterparts, which have names that end with `Sync`:
  - `fs.readFile`
  - `fs.readFileSync`

## Refs

- [Overview of Blocking vs Non-Blocking](https://nodejs.dev/en/learn/overview-of-blocking-vs-non-blocking/)
