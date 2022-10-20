# Differences between Node.js and the Browser

- In the browser, most of the time what you are doing is interacting with the DOM, or other Web Platform APIs like Cookies. Those do not exist in Node.js, of course. You don't have the document, window and all the other objects that are provided by the browser.
- In the browser, we don't have all the nice APIs that Node.js provides through its modules, like the filesystem access functionality.
- In Node.js you control the environment. Compared to the browser environment, where you don't get the luxury to choose what browser your visitors will use.
- You can use Babel to transform your code to be ES5-compatible before shipping it to the browser, but in Node.js, you won't need that.
- Node.js supports both the CommonJS and ES module systems (since Node.js v12), while in the browser we are starting to see the ES Modules standard being implemented.

## Refs

- [Differences between Node.js and the Browser](https://nodejs.dev/en/learn/differences-between-nodejs-and-the-browser/)
