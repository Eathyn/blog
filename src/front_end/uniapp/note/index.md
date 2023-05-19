---
date: 2023-05-16
category: uni-app
---

# Note

## 创建项目

- [HBuilderX](https://uniapp.dcloud.net.cn/quickstart-hx.html#%E5%88%9B%E5%BB%BAuni-app)
- [Vue CLI / Vite](https://uniapp.dcloud.net.cn/quickstart-cli.html#install-vue-cli)
- [区别](https://uniapp.dcloud.net.cn/quickstart-cli.html#clidiff)

## HBuilderX 运行项目

### 运行到 H5

### 运行到小程序

### 运行到安卓

- 将 HBuilderX 自带的 adb 配置到全局环境 `Path` 变量中。abd 的路径为 `G:/HBuilderX/plugins/launcher/tools/adbs`。

![adb environment variable](./_image/adb-env-variable.png)

- 下载安卓模拟器，adb 连接模拟器的端口（不同安卓模拟器的端口各不相同）。命令是 `adb connect <host>:<port>`

![adb connect](./_image/adb-connect.png)

- 安卓模拟器运行 uni-app 项目

![run project](./_image/run-project.png)
