import{_ as l,r as e,o as i,c as k,d as a,w as t,b as n,a as c,e as s}from"./app.0a43b3c6.js";const r={},d=c('<h1 id="permission" tabindex="-1"><a class="header-anchor" href="#permission" aria-hidden="true">#</a> Permission</h1><h2 id="generate-routes" tabindex="-1"><a class="header-anchor" href="#generate-routes" aria-hidden="true">#</a> Generate Routes</h2><h3 id="explanation" tabindex="-1"><a class="header-anchor" href="#explanation" aria-hidden="true">#</a> Explanation</h3><ol><li>\u521B\u5EFA\u8DEF\u7531\u65F6\u4EC5\u6302\u8F7D\u65E0\u9700\u6743\u9650\u7684\u8DEF\u7531</li><li>\u5411\u540E\u7AEF\u83B7\u53D6\u7528\u6237\u7684\u89D2\u8272\uFF0C\u7136\u540E\u6839\u636E\u7528\u6237\u89D2\u8272\u8FC7\u6EE4\u51FA\u8FD9\u4E2A\u89D2\u8272\u53EF\u4EE5\u8BBF\u95EE\u7684\u8DEF\u7531</li><li>\u4F7F\u7528 <code>router.addRoute</code> \u52A8\u6001\u5730\u6DFB\u52A0\u8DEF\u7531</li></ol><h3 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h3>',5),m=n("div",{class:"language-javascript ext-js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// constantRoutes \u4E2D\u7684\u8DEF\u7531\u90FD\u662F\u65E0\u9700\u6743\u9650\u7684\u8DEF\u7531"),s(`
`),n("span",{class:"token keyword"},"const"),s(" constantRoutes "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
  `),n("span",{class:"token comment"},"// routes..."),s(`
`),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"createRouter"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Router"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function-variable function"},"scrollBehavior"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"y"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token comment"},"// \u521B\u5EFA\u8DEF\u7531\u65F6\u4EC5\u6302\u8F7D\u65E0\u9700\u6743\u9650\u7684\u8DEF\u7531"),s(`
  `),n("span",{class:"token literal-property property"},"routes"),n("span",{class:"token operator"},":"),s(` constantRoutes
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"const"),s(" router "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"createRouter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`)])])],-1),h=n("div",{class:"language-javascript ext-js"},[n("pre",{class:"language-javascript"},[n("code",null,[s("router"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"beforeEach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"async"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("to"),n("span",{class:"token punctuation"},","),s(" from"),n("span",{class:"token punctuation"},","),s(" next")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// \u8FDB\u5EA6\u6761\u5F00\u59CB"),s(`
  NProgress`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"start"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token comment"},"// \u8BBE\u7F6E\u9875\u9762 title"),s(`
  document`),n("span",{class:"token punctuation"},"."),s("title "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"getPageTitle"),n("span",{class:"token punctuation"},"("),s("to"),n("span",{class:"token punctuation"},"."),s("meta"),n("span",{class:"token punctuation"},"."),s("title"),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token comment"},"// \u5224\u65AD\u7528\u6237\u662F\u5426\u5DF2\u767B\u5F55\uFF0C\u5DF2\u767B\u5F55\u5C31\u5B58\u5728 token"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" hasToken "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"getToken"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("hasToken"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("to"),n("span",{class:"token punctuation"},"."),s("path "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},"'/login'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// if is logged in, redirect to the home page"),s(`
      `),n("span",{class:"token function"},"next"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"path"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'/'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
      NProgress`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"done"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// hack: https://github.com/PanJiaChen/vue-element-admin/pull/2939"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// determine whether the user has obtained his permission roles through getInfo"),s(`
      `),n("span",{class:"token keyword"},"const"),s(" hasRoles "),n("span",{class:"token operator"},"="),s(" store"),n("span",{class:"token punctuation"},"."),s("getters"),n("span",{class:"token punctuation"},"."),s("roles "),n("span",{class:"token operator"},"&&"),s(" store"),n("span",{class:"token punctuation"},"."),s("getters"),n("span",{class:"token punctuation"},"."),s("roles"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},">"),s(),n("span",{class:"token number"},"0"),s(`
      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("hasRoles"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"next"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token comment"},"// get user info"),s(`
          `),n("span",{class:"token comment"},"// note: roles must be a object array! such as: ['admin'] or ,['developer','editor']"),s(`
          `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" roles "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(" store"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"dispatch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'user/getInfo'"),n("span",{class:"token punctuation"},")"),s(`

          `),n("span",{class:"token comment"},"// generate accessible routes map based on roles"),s(`
          `),n("span",{class:"token keyword"},"const"),s(" accessRoutes "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(" store"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"dispatch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'permission/generateRoutes'"),n("span",{class:"token punctuation"},","),s(" roles"),n("span",{class:"token punctuation"},")"),s(`

          `),n("span",{class:"token comment"},"// dynamically add accessible routes"),s(`
          router`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"addRoutes"),n("span",{class:"token punctuation"},"("),s("accessRoutes"),n("span",{class:"token punctuation"},")"),s(`

          `),n("span",{class:"token comment"},"// hack method to ensure that addRoutes is complete"),s(`
          `),n("span",{class:"token comment"},"// set the replace: true, so the navigation will not leave a history record"),s(`
          `),n("span",{class:"token function"},"next"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token operator"},"..."),s("to"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"replace"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"("),s("error"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token comment"},"// remove token and go to login page to re-login"),s(`
          `),n("span",{class:"token keyword"},"await"),s(" store"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"dispatch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'user/resetToken'"),n("span",{class:"token punctuation"},")"),s(`
          Message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"error"),n("span",{class:"token punctuation"},"("),s("error "),n("span",{class:"token operator"},"||"),s(),n("span",{class:"token string"},"'Has Error'"),n("span",{class:"token punctuation"},")"),s(`
          `),n("span",{class:"token function"},"next"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"/login?redirect="),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("to"),n("span",{class:"token punctuation"},"."),s("path"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),s(`
          NProgress`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"done"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"/* has no token*/"),s(`

    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("whiteList"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"indexOf"),n("span",{class:"token punctuation"},"("),s("to"),n("span",{class:"token punctuation"},"."),s("path"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"!=="),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// in the free login whitelist, go directly"),s(`
      `),n("span",{class:"token function"},"next"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// other pages that do not have permission to access are redirected to the login page."),s(`
      `),n("span",{class:"token function"},"next"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"/login?redirect="),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("to"),n("span",{class:"token punctuation"},"."),s("path"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),s(`
      NProgress`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"done"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])])],-1),f=n("div",{class:"language-javascript ext-js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" actions "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// \u83B7\u53D6\u7528\u6237\u4FE1\u606F"),s(`
  `),n("span",{class:"token function"},"getInfo"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" commit"),n("span",{class:"token punctuation"},","),s(" state "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Promise"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("resolve"),n("span",{class:"token punctuation"},","),s(" reject")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token function"},"getInfo"),n("span",{class:"token punctuation"},"("),s("state"),n("span",{class:"token punctuation"},"."),s("token"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"response"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" data "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(` response

        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("data"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token function"},"reject"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Verification failed, please Login again.'"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

        `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" roles"),n("span",{class:"token punctuation"},","),s(" name"),n("span",{class:"token punctuation"},","),s(" avatar"),n("span",{class:"token punctuation"},","),s(" introduction "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(` data

        `),n("span",{class:"token comment"},"// roles must be a non-empty array"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("roles "),n("span",{class:"token operator"},"||"),s(" roles"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"<="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token function"},"reject"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'getInfo: roles must be a non-null array!'"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

        `),n("span",{class:"token function"},"commit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'SET_ROLES'"),n("span",{class:"token punctuation"},","),s(" roles"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token function"},"commit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'SET_NAME'"),n("span",{class:"token punctuation"},","),s(" name"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token function"},"commit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'SET_AVATAR'"),n("span",{class:"token punctuation"},","),s(" avatar"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token function"},"commit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'SET_INTRODUCTION'"),n("span",{class:"token punctuation"},","),s(" introduction"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),s("data"),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"catch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"error"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"reject"),n("span",{class:"token punctuation"},"("),s("error"),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),g=n("div",{class:"language-javascript ext-js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// \u8FC7\u6EE4\u51FA\u5C5E\u4E8E\u67D0\u4E2A\u89D2\u8272\u7684\u8DEF\u7531"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"filterAsyncRoutes"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("routes"),n("span",{class:"token punctuation"},","),s(" roles")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" res "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(`

  routes`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"forEach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"route"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" tmp "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token operator"},"..."),s("route "),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"hasPermission"),n("span",{class:"token punctuation"},"("),s("roles"),n("span",{class:"token punctuation"},","),s(" tmp"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("tmp"),n("span",{class:"token punctuation"},"."),s("children"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// \u9012\u5F52\u904D\u5386"),s(`
        tmp`),n("span",{class:"token punctuation"},"."),s("children "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"filterAsyncRoutes"),n("span",{class:"token punctuation"},"("),s("tmp"),n("span",{class:"token punctuation"},"."),s("children"),n("span",{class:"token punctuation"},","),s(" roles"),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
      res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("tmp"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token keyword"},"return"),s(` res
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// \u5224\u65AD\u67D0\u4E2A\u89D2\u8272\u662F\u5426\u53EF\u4EE5\u62E5\u6709\u67D0\u4E2A\u8DEF\u7531"),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"hasPermission"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("roles"),n("span",{class:"token punctuation"},","),s(" route")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("route"),n("span",{class:"token punctuation"},"."),s("meta "),n("span",{class:"token operator"},"&&"),s(" route"),n("span",{class:"token punctuation"},"."),s("meta"),n("span",{class:"token punctuation"},"."),s("roles"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" roles"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"some"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"role"),s(),n("span",{class:"token operator"},"=>"),s(" route"),n("span",{class:"token punctuation"},"."),s("meta"),n("span",{class:"token punctuation"},"."),s("roles"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"includes"),n("span",{class:"token punctuation"},"("),s("role"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),y=c(`<h2 id="custom-directive" tabindex="-1"><a class="header-anchor" href="#custom-directive" aria-hidden="true">#</a> Custom Directive</h2><ul><li>\u5C01\u88C5 vue.js \u81EA\u5B9A\u4E49\u6307\u4EE4\u5B9E\u73B0\u5143\u7D20\u7684\u6743\u9650\u7BA1\u7406</li></ul><h3 id="explanation-1" tabindex="-1"><a class="header-anchor" href="#explanation-1" aria-hidden="true">#</a> Explanation</h3><ul><li>\u4ECE vuex \u4E2D\u83B7\u53D6\u7528\u6237\u7684\u89D2\u8272\uFF0C\u7136\u540E\u4E0E\u81EA\u5B9A\u4E49\u6307\u4EE4\u4E2D\u4F20\u5165\u7684\u89D2\u8272\u8FDB\u884C\u5BF9\u6BD4\uFF0C\u4ECE\u800C\u5224\u65AD\u662F\u5426\u663E\u793A\u8BE5\u5143\u7D20</li></ul><h3 id="code-1" tabindex="-1"><a class="header-anchor" href="#code-1" aria-hidden="true">#</a> Code</h3><p><em>src/directive/permission/permission.js</em></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">&#39;@/store&#39;</span>

<span class="token keyword">function</span> <span class="token function">checkPermission</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> binding</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> value <span class="token punctuation">}</span> <span class="token operator">=</span> binding
  <span class="token comment">// \u83B7\u53D6\u7528\u6237\u89D2\u8272</span>
  <span class="token keyword">const</span> roles <span class="token operator">=</span> store<span class="token punctuation">.</span>getters <span class="token operator">&amp;&amp;</span> store<span class="token punctuation">.</span>getters<span class="token punctuation">.</span>roles

  <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">&amp;&amp;</span> value <span class="token keyword">instanceof</span> <span class="token class-name">Array</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>value<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> permissionRoles <span class="token operator">=</span> value

      <span class="token comment">// \u5224\u65AD\u7528\u6237\u89D2\u8272\u662F\u5426\u5C5E\u4E8E\u81EA\u5B9A\u4E49\u6307\u4EE4\u4F20\u5165\u7684\u503C</span>
      <span class="token keyword">const</span> hasPermission <span class="token operator">=</span> roles<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span><span class="token parameter">role</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> permissionRoles<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>role<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>

      <span class="token comment">// \u5982\u679C\u6CA1\u6709\u6743\u9650\u5219\u5C06\u8BE5\u5143\u7D20\u5220\u9664</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>hasPermission<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        el<span class="token punctuation">.</span>parentNode <span class="token operator">&amp;&amp;</span> el<span class="token punctuation">.</span>parentNode<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">need roles! Like v-permission=&quot;[&#39;admin&#39;,&#39;editor&#39;]&quot;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5F53\u7ED1\u5B9A\u81EA\u5B9A\u4E49\u6307\u4EE4\u7684\u5143\u7D20\u63D2\u5165\u5230\u7236\u5143\u7D20\u65F6\u89E6\u53D1</span>
  <span class="token function">inserted</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> binding</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">checkPermission</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> binding<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u6240\u5728\u7684\u7EC4\u4EF6\u7684\u865A\u62DF\u8282\u70B9\u66F4\u65B0\u65F6\u89E6\u53D1</span>
  <span class="token function">update</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> binding</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">checkPermission</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> binding<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p><em>src/directive/permission/index.js</em></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> permission <span class="token keyword">from</span> <span class="token string">&#39;./permission&#39;</span>

<span class="token keyword">const</span> <span class="token function-variable function">install</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">Vue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  Vue<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span><span class="token string">&#39;permission&#39;</span><span class="token punctuation">,</span> permission<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>Vue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  window<span class="token punctuation">[</span><span class="token string">&#39;permission&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> permission
  Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>install<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// eslint-disable-line</span>
<span class="token punctuation">}</span>

permission<span class="token punctuation">.</span>install <span class="token operator">=</span> install
<span class="token keyword">export</span> <span class="token keyword">default</span> permission
</code></pre></div><h2 id="refs" tabindex="-1"><a class="header-anchor" href="#refs" aria-hidden="true">#</a> Refs</h2>`,10),w={href:"https://juejin.cn/post/6844903478880370701#heading-3",target:"_blank",rel:"noopener noreferrer"},v=s("Dynamic Generate Routes"),_={href:"https://github.com/PanJiaChen/vue-element-admin",target:"_blank",rel:"noopener noreferrer"},x=s("Vue Element Admin Code");function b(j,R){const o=e("CodeGroupItem"),u=e("CodeGroup"),p=e("ExternalLinkIcon");return i(),k("div",null,[d,a(u,null,{default:t(()=>[a(o,{title:"router/index.js"},{default:t(()=>[m]),_:1}),a(o,{title:"src/permission.js"},{default:t(()=>[h]),_:1}),a(o,{title:"str/store/modules/user.js"},{default:t(()=>[f]),_:1}),a(o,{title:"src/store/modules/permission.js"},{default:t(()=>[g]),_:1})]),_:1}),y,n("ul",null,[n("li",null,[n("a",w,[v,a(p)])]),n("li",null,[n("a",_,[x,a(p)])])])])}const P=l(r,[["render",b],["__file","index.html.vue"]]);export{P as default};
