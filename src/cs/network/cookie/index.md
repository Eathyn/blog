---
date: 2023-09-21
---

# Cookie

## Definition

- cookie 是服务器发送给浏览器的键值对，存储在浏览器。

## Role

> Ref:
>   - [HTTP Cookie](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)
>   - [HTTP Cookie](https://http.dev/cookies#usage)

- 追踪（Tracking）：记录和分析用户行为。
- 会话管理（Session Management）：HTTP 是无状态的协议，cookie 可用于记录登录状态等。
- 个性化（Personalization）：记录用户喜好、主题和其他设置。

## Access

> Ref: [Access Cookie](https://javascript.info/cookie#reading-from-document-cookie)

- 获取 cookie：

```javascript
document.cookie
```

- 写入 cookie：

```javascript
const key = 'name'
const value = 'Eathyn'
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
```

- 每个 cookie 键值对的大小不可以超过 4KB。

## Options

### path

> Ref: 
> - [path Option](https://javascript.info/cookie#path)
> - [path Option](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#:~:text=mozilla.org.-,Path%20attribute,-The%20Path%20attribute)

- 如果当前路径不匹配 `path` 选项，那么该 cookie 无法保存到浏览器，也不会作为 Cookie 请求头发送给服务器。

- 如果 `path=/docs`，那么 `/docs`, `/docs/`, `/docs/web` 都匹配。

### domain

> Ref: [domain Option](https://javascript.info/cookie#domain)

- cookie 无法被其他二级域名获取。例如：`a.com` 中的 cookie 无法被 `b.com` 获取。

- 默认情况下，cookie 无法被子域获取。例如：`a.com` 中的 cookie 无法被 `test.a.com` 获取。

- 将 `domain` 选项设置为根域（root domain），那么 cookie 就可以被自域获取。例如：设置 `domain=a.com` 之后，`a.com` 中的 cookie 可以被 `test.a.com` 获取。

### expires, max-age

> Ref:
>   - [expires, max-age options](https://javascript.info/cookie#expires-max-age)
>   - [Chrome doesn't delete session cookies](https://stackoverflow.com/a/10772420)

- 没有设置 `expires` 和 `max-age` 的 cookie 称为 session cookie，特点是浏览器关闭后 cookie 就会被删除。

- 设置 `expires` 和 `max-age` 之后，关闭浏览器 cookie 在过期之前不会被删除。

- 如果将浏览器的启动时的选项设置为继续浏览上次打开的网页，那么关闭浏览器后 session cookie 不会自动删除。

- 将 `expires` 设置为过去的时间或者将 `max-age` 设置为零或负数，就可以删除 cookie。

### secure

> Ref:
>   - [secure option](https://javascript.info/cookie#secure)
>   - [secure option works on localhost](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#restrict_access_to_cookies:~:text=HTTP%20(except%20on-,localhost,-)%2C%20which%20means%20man)

- 将 `secure` 设置为 `true` 之后，cookie 只能在使用 `HTTPS` 协议的网站（除了 `localhost`）上保存和发送。

### samesite

> Ref: 
>   - [samesite option](https://javascript.info/cookie#samesite)
>   - [samesite option](https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie#:~:text=current%20document%20location.-,%3Bsamesite,-%3A%20SameSite%20prevents)

- `samesite` 选项可以避免跨站请求伪造（Cross-Site Request Forgery, CSRF）攻击。

- `samesite: 'none'` 表示 cookie 可以在同站（same-site）或跨站（cross-site）中传输。
- `samesite: 'lax'` 表示 cookie 可以在同站（same-site）或跨站（cross-site）中传输，跨站请求传输的要求是请求必须是安全的（例如：GET）并且执行的是顶级导航（top-level navigation）操作（即：在浏览器的地址栏中改变 URL）。
- `samesite: 'strict'` 表示 cookie 只能在同站（same-site）中传输。

### http-only

## Code

> Ref: 
> - [Cookie Practice](https://www.section.io/engineering-education/what-are-cookies-nodejs/)
> - [Repo](https://github.com/Eathyn/authentication/tree/cookie)
