import{_ as l,W as s,X as n,Y as e,Z as r,$ as a,a0 as o,C as t}from"./framework-c8ebc670.js";const d={},h=o('<h1 id="http-response-status-codes" tabindex="-1"><a class="header-anchor" href="#http-response-status-codes" aria-hidden="true">#</a> HTTP Response Status Codes</h1><h2 id="分类" tabindex="-1"><a class="header-anchor" href="#分类" aria-hidden="true">#</a> 分类</h2><ul><li>消息 (informational responses) : 100-199 (请求被接受，需要继续处理)</li><li>成功响应 (successful responses) : 200-299</li><li>重定向消息 (redirection messages) : 300-399</li><li>客户端错误响应 (client error responses) : 400-499</li><li>服务端错误响应 (server error responses) : 500-599</li></ul><h2 id="常见响应状态码" tabindex="-1"><a class="header-anchor" href="#常见响应状态码" aria-hidden="true">#</a> 常见响应状态码</h2><ul><li>200 OK : 请求成功</li><li>201 Created : 请求成功且创建了一个新资源，一般用于处理 POST 和 PUT 请求</li><li>301 Moved Permanently : 永久重定向</li><li>302 Found : 临时重定向</li><li>304 Not Modified : 资源未被修改，用于缓存</li><li>404 Not Found : 资源未找到</li><li>401 Unauthorized : 需要证明身份才能获取资源</li><li>403 Forbidden : 无权限访问资源</li><li>500 Internal Server Error : 服务器遇到无法处理的情况</li><li>504 Gateway Timeout : 网关超时</li></ul><h2 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h2><h3 id="_301-vs-302" tabindex="-1"><a class="header-anchor" href="#_301-vs-302" aria-hidden="true">#</a> 301 vs. 302</h3><ul><li>301 和 302 浏览器都可以在 <code>Location</code> 响应头可以找到新的 URL，然后根据新的 URL 自动进行重定向</li><li>301 : 浏览器重定向之后会记住新的 URL，以后不会访问旧的 URL</li><li>302 : 浏览器重定向之后不会记住新的 URL，以后依然访问旧的 URL 并进行重定向</li></ul><h3 id="_401-vs-403" tabindex="-1"><a class="header-anchor" href="#_401-vs-403" aria-hidden="true">#</a> 401 vs. 403</h3><ul><li>401 unauthorized <ul><li>表示需要证明身份才能获取资源</li><li>例子 : 账号不存在、密码错误、未登录去获取资源等</li></ul></li><li>403 Forbidden <ul><li>服务器已经知道你的身份，但是该身份无权限获取数据</li><li>例子 : 普通用户向获取管理员身份才能获取的资源</li></ul></li></ul><h2 id="refs" tabindex="-1"><a class="header-anchor" href="#refs" aria-hidden="true">#</a> Refs</h2>',11),c={href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status",target:"_blank",rel:"noopener noreferrer"},u={href:"https://stackoverflow.com/a/6937030/9863318",target:"_blank",rel:"noopener noreferrer"};function _(f,p){const i=t("ExternalLinkIcon");return s(),n("div",null,[h,e("ul",null,[e("li",null,[e("a",c,[r("HTTP response codes"),a(i)])]),e("li",null,[e("a",u,[r("401 vs. 403"),a(i)])])])])}const x=l(d,[["render",_],["__file","index.html.vue"]]);export{x as default};
