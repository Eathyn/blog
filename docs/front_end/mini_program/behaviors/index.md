# behaviors

## 使用原因

- 在组件中复用代码

## 定义

- `behaviors` 包含数据、数据、生命周期函数和方法
- 组件引用 `behaviors` 时，`behaviors` 中的数据、数据、生命周期函数和方法会合并到组件中
- 组件可以引用多个 `behaviors`

## 基本使用

_my-component.js_

```js
import behaviorA from '../../behaviors/behaviorA'

Component({
  behaviors: [behaviorA],
  lifetimes: {
    created() {
      console.log(this.data.dataA)
      this.methodA()
    }
  }
})
```

_behaviorA.js_

```js
const behaviorA = Behavior({
  properties: {
    propA: 'prop: A',
  },
  data: {
    dataA: 'data: A',
  },
  methods: {
    methodA() {
      console.log('method: A')
    },
  },
  created() {
    console.log('created hook: A')
  },
})

export default behaviorA
```

## 同名字段的覆盖和组合规则

- [详细查看](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/behaviors.html#%E5%90%8C%E5%90%8D%E5%AD%97%E6%AE%B5%E7%9A%84%E8%A6%86%E7%9B%96%E5%92%8C%E7%BB%84%E5%90%88%E8%A7%84%E5%88%99)


## Refs

- [behaviors](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/behaviors.html)
