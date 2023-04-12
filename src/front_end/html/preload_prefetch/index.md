---
date: 2022-05-14
category: HTML
tag:
- preload
- prefetch
- DNS prefetch
- pre connect
---

# Preload / Prefetch / DNS-Prefetch / PreConnect

## Preload

- 资源在当前页面使用，会优先加载

```html
<link rel="preload" href="style.css" as="style">
```

## Prefetch

- 资源在未来页面使用，空闲时加载

```html
<link rel="prefetch" href="main.js" as="script">
```

## DNS-Prefetch

- DNS 预查询

```html
<link rel="dns-prefetch" href="https://example.com" >
```

## PreConnect

- DNS 预连接

```html
<link rel="preconnect" href="https://example.com">
```

## Refs

- [mock 562 : 6-13](https://coding.imooc.com/class/chapter/562.html#Anchor)
