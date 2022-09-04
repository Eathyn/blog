# Component Communication Methods

## Parent -> Child

### properties

- 父组件为子组件设置属性
- 子组件通过 `properties` 接收

_tabOne.wxml_

```html
<custom-comp num="{{ 1 }}" />
```

_custom-comp.wxml_

```html
<view>number form parent: {{ num }}</view>
```

_custom-comp.js_

```js
Component({
  properties: {
    num: {
      type: Number,
      value: 0,
    },
  },
})
```

### selectComponent

- 父组件通过 `selectComponent` 获取子组件实例

_tabOne.wxml_

```html
<custom-comp class="child" />
<button bind:tap="getChildInstance">get child instance</button>
```

_tabOne.js_

```js
Page({
  getChildInstance() {
    const child = this.selectComponent('.child')
  },
})
```

## Child -> Parent

### triggerEvent

- 子组件通过 `triggerEvent` 向父组件发送事件和数据
- 父组件监听事件，从 `event.detail` 中获取数据

_tabOne.wxml_

```html
<custom-comp bind:send="handleSend" />
```

_tabOne.js_

```js
Page({
  handleSend(evt) {
    const { name } = evt.detail
    console.log('data from child: ', name)
  },
})
```

_custom-comp.wxml_

```html
<button bind:tap="handleTap">send data to parent</button>
```

_custom-comp.js_

```js
Component({
  methods: {
    handleTap() {
      this.triggerEvent('send', { name: 'eathyn' })
    },
  },
})
```

## Refs

- [组件通信](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/events.html)
