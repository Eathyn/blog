---
date: 2023-11-25
category: webpack
---

# Hash

> Ref
> - [hash comparison](https://juejin.cn/post/6844904018053955591)
> - [docs](https://webpack.js.org/configuration/output/#template-strings)

## Role

- 使用哈希值后可以利用浏览器的缓存功能获得更快的加载速度。

## full hash

- 项目级别的 hash。
- 所有输出文件的 hash 都相同。
- 改变其中一个文件的内容会导致其他所有文件的 hash 都改变。

![所有输出文件的 hash 都相同](./_images/fullhash.png =x150)

- 缺点：改变其中一个文件的内容会导致其他所有文件的 hash 都改变。导致浏览器缓存失效。

## chunk hash

- chunk 级别的 hash。
- 不同 chunk 的输出文件的 hash 不相同。
- 改变其中一个 chunk 的内容不会导致其他 chunk 文件的 hash 改变。

![改变其中一个 chunk 的内容不会导致其他 chunk 文件的 hash 改变](./_images/chunkhash.png =x220)

- 缺点：如果在 js 文件中引入 css 文件，并且使用 `mini-css-extract-plugin` 提取出 css 文件，那么当 js 文件的 hash 改变时，css 文件的 hash 也会改变。导致浏览器中 css 文件的缓存失效。

![chunk hash 的缺点](./_images/chunkhash_shortcoming.png =x220)

## content hash

- 内容级别的 hash。
- 不同内容的输出文件的 hash 不相同。
- 改变其中一个文件的内容不会导致其他文件的 hash 改变。
- 解决了 chunk hash 的缺点。

![content hash 解决了 chunk hash 的缺点](./_images/contenthash.png =x220)

## non-initial chunk affects initial chunk

- `non-initial chunk` 改变后会改变 `initial chunk` 的 hash。如下面代码所示，改变 `module_b` 的内容会导致 `entry_a` 的 hash 改变，但 `module_a` 的 hash 不会改变。

:::code-tabs
@tab entry_a.js
```js
import('./module_a')
```

@tab module_a.js
```js
import('./module_b')
```

@tab module_b.js
```js
console.log('module b')
```
:::

![改变 `module_b` 的内容会导致 `entry_a` 的 hash 改变](./_images/non-initial_chunk_affection.png =x250)
