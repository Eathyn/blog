---
date: 2023-07-26
---

# Reset CSS

- 因为各个浏览器对某些元素设置了不同的样式，所以引入一个重置样式的文件将这些差异抹平。

## reset.css

> Reference:
> - [reset.css blog](https://meyerweb.com/eric/tools/css/reset/index.html)
> - [reset.css file](https://meyerweb.com/eric/tools/css/reset/reset.css)

- 主要是将 `margin`、`padding` 和 `border` 设置为 0。

## normalize.css

> Reference: [normalize.css](https://github.com/necolas/normalize.css)

- 只对各个浏览器样式不一致的元素进行样式更改，而不是像 `reset.css` 一样将 `margin`、`padding` 和 `border` 设置为 0。

## reset architecture

> Reference: [reset architecture](https://elad.medium.com/normalize-css-or-css-reset-9d75175c5d1e#:~:text=How%20to%20work%2C%20together%20in%20peace%2C%20with%20both%20Normalize%20CSS%20%26%20CSS%20Reset)

- `normalize.css`：对各个浏览器样式不一致的元素进行样式更改。
- `reset.local.css`：对 `normalize.css` 进行补充。
- `typography.css`：为字体设置样式。
