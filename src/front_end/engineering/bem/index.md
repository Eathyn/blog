---
date: 2023-08-03
---

# BEM

> Reference
> - [Docs](https://getbem.com/introduction/)
> - [Article](https://www.zhihu.com/question/21935157/answer/20116700)
> - [Article](https://www.smashingmagazine.com/2014/07/bem-methodology-for-small-projects/)

## Introduction

- `Block`：本身含有意义的独立实体。
- `Element`：Block 的一部分，本身没有意义，需要依附 Block。
- `Modifier`：Block 或 Element 的状态。

## Usage

- 官方的连接符格式是 `block--element-modifier`。但是连接符可以自定义，我更喜欢 `block__element--modifier` 格式。

- BEM 只有三级，不可以出现 `block--element--element-modifier` 的格式。
