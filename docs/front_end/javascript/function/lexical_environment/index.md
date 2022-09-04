# Lexical Environment

## 基本概念

- 运行中的函数、代码块 (code block) 和脚本有一个叫做词法环境 (lexical environment) 的隐藏对象
- 词法环境由词法记录 (lexical record) 和指向外部词法环境的引用组成
- 词法环境中的本地变量 (local variables) 是词法记录的属性

![variables_are_properties_of_lexical_record](./images/variables_are_properties_of_lexical_record.png)

## 访问外部词法环境的变量

- 函数 `say` 产生了一个词法环境，最外层的脚本也产生了一个全局词法环境
- 例子：`say` 在执行时可以在它的词法环境中获取 `name`，但无法获取 `phrase`。因此通过指向外部词法环境的引用寻找 `phrase`，最终在全局词法环境中找到

![access_outer_variables_of_lexical_environment](./images/access_outer_variables_of_lexical_environment.png)

## 嵌套函数

- 函数调用时会通过 `[[Environment]]` 属性定位到定义该函数的地方
- 例子：当 `counter` 被调用时，会通过 [[Environment]] 属性定位到它的词法环境，然后执行里面的代码

![nested functions](./images/nested_functions.png)

## 闭包

- 定义 : 内层函数可以访问外层函数的变量，即内层函数通过指向外部词法环境的引用访问外部词法函数的变量
- 例子 : `inner` 可以访问 `outer` 的 `a` 变量

```javascript
function outer() {
  const a = 1

  return function inner() {
    console.log(a)
  }
}

const innerFn = outer()
innerFn()
```

## 垃圾回收

### 闭包阻止垃圾回收

- 由于 `inner` 指向外部词法环境的引用是 `outer` 函数词法环境，`outer` 的变量可能会被 `inner` 使用到，所以不会被垃圾回收。这样容易造成内存泄露
- 当设置 `inner = null` 时， `inner` 和 `outer` 都会被清理

```js
function outer() {
  const a = 1

  return function inner() {
    console.log(a)
  }
}

const innerFn = outer()
innerFn()

innerFn = null
```

### 浏览器优化闭包阻止垃圾回收

- 针对上述闭包导致内存泄露的问题，浏览器进行了优化，让所有词法环境占用的内存尽可能缩小。具体操作是如果外部词法环境的变量会被内部的词法环境所使用，那么该变量不会被垃圾回收；反之则会被垃圾回收
- 例子 : `inner` 只需要使用到 `outer` 的变量 `a`，因此变量 `a` 不会被垃圾回收，变量 `b` 会被垃圾回收。可以通过 debugger 验证

```js
function outer() {
  const a = 1
  const b = 2

  return function inner() {
    console.log(a)
    debugger
  }
}

const innerFn = outer()
innerFn()
```

![browser will optimize garbage collection](./images/browser_optimize_garbage_collection.png)

## Refs

- [Variable Scope and Closure](https://javascript.info/closure)
