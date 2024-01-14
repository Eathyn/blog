---
date: 2024-01-13
category: npm
---

# Configuration

## 国内镜像

> Reference
>   - [阿里巴巴 NPM 镜像](https://npmmirror.com/)

- 因为 NPM 官方的源（https://registry.npmjs.org/） 在国外，虽然通过代理可以访问，但是速度还是有点慢。所以我们需要配置国内镜像加快 NPM 包的下载速度。

- 如果长期使用阿里巴巴 NPM 镜像，则需要如下配置：

```bash
npm config set registry https://registry.npmmirror.com
```

- 如果单次使用阿里巴巴 NPM 镜像，则在下载包时增加 `registry` 参数：

```bash
npm install <package_name> --registry=https://registry.npmmirror.com
```

## 代理

> Reference
> - [设置 NPM 代理](https://freesilo.com/?p=1228)
> - [设置 NPM 代理](https://medium.com/@ogbemudiatimothy/using-npm-install-behind-a-corporate-proxy-server-db150c128899)

- 因为 NPM 官方的源（https://registry.npmjs.org/） 在国外，所以需要通过代理才能访问。

- 以 Windows 10 为例，在搜索栏输入 proxy 或 代理，找到地址和端口：

![寻找端口和地址](./_image/find_address_and_port.png =x350)

- 配置 NPM 代理：

```bash
npm config set proxy "http://127.0.0.1:10809"
npm config set https-proxy "http://127.0.0.1:10809"
```
