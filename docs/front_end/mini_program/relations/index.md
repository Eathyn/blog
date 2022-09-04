# Relations

## Example

_tabOne.wxml_

```html
<i-custom-ul>
  <i-custom-li>1</i-custom-li>
  <i-custom-li>2</i-custom-li>
  <i-custom-li>3</i-custom-li>
</i-custom-ul>
```

_custom-ul.wxml_

```html
<view>
  <slot></slot>
</view>
```

_custom-ul.js_

```js
Component({
  options: {
    multipleSlots: true
  },
  relations: {
    '../custom-li/custom-li': {
      type: 'child',
    },
  },
  methods: {
    getAllLi() {
      const nodes = this.getRelationNodes('../custom-li/custom-li')
      console.log(nodes)
    }
  },
  lifetimes: {
     ready() {
       this.getAllLi()
     }
  }
})
```

_custom-li.wxml_

```html
<view>
  <slot></slot>
</view>
```

_custom-li.js_

```js
Component({
  relations: {
    '../custom-ul/custom-ul': {
      type: 'parent',
    },
  },
})
```
