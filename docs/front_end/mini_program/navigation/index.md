# 路由

## 页面栈

### 操作
- 初始化 / 新页面
  - 入栈
  - wx.navigateTo
  
- 页面返回
  - 出栈
  - wx.navigateBack

- 重定向
    - 当前页面出栈，新页面入栈
    - wx.redirectTo

- Tab 切换
  - 所有页面出栈，Tab 页面入栈
  - wx.switchTab

- 重加载
  - 所有页面出栈，新页面入栈
  - wx.reLaunch

### 注意
- 小程序中页面栈最多十层
