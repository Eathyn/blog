---
date: 2023-02-14
category: 小程序
tag: 监听器
---

# Observers

## Definition

- 数据被执行 `setData` 时可以触发监听操作
- `Component` 才有 `observers` 属性，`Page` 没有

## Examples

### Basic Usage

_custom-counter.wxml_

```html
<view>a: {{ a }}</view>
<view>b: {{ b }}</view>
<view>sum: {{ sum }}</view>
<button bind:tap="changeA">change a</button>
```

_custom-counter.js_

```js
Component({
  data: {
    a: 0,
    b: 0,
  },
  observers: {
    'a, b': function(a, b) {
      this.setData({
        sum: a + b
      })
    }
  },
  methods: {
    changeA() {
      this.setData({
        a: ++this.data.a
      })
    },
  },
  lifetimes: {
    attached() {
      console.log(`sum: ${this.data.sum}`)
    },
  },
})
```

### Observer Object Property

- 监听对象的属性

_custom-person.wxml_

```html
<view>name: {{ person.name }}</view>
<view>age: {{ person.age }}</view>

<button bind:tap="changeName">change name</button>
<button bind:tap="changePerson">change person</button>
```

_custom-person.js_

```js
Component({
  data: {
    person: {
      name: 'eathyn',
      age: 25,
    }
  },
  observers: {
    // 修改 person.name 和 person 都会触发
    'person.name': function(name) {
      console.log('name: ', name)
    }
  },
  methods: {
    changeName() {
      this.setData({
        'person.name': 'eaven',
      })
    },
    changePerson() {
      this.setData({
        person: {
          name: 'tom',
          age: 18,
        }
      })
    }
  },
})
```

### 通配符

- 使用通配符 `**` 可以监听对象的所有属性或 data 里的所有数据

_custom-person.wxml_

```html
<view>name: {{ person.name }}</view>
<view>age: {{ person.age }}</view>

<button bind:tap="changeName">change name</button>
<button bind:tap="changeAge">change age</button>
```

_custom-person.js_

```js
Component({
  data: {
    person: {
      name: 'eathyn',
      age: 25,
    },
  },
  observers: {
    'person.**': function(person) {
      console.log(person)
    },
  },
  methods: {
    changeName() {
      this.setData({
        'person.name': 'tom',
      })
    },
    changeAge() {
      this.setData({
        'person.age': 100,
      })
    },
  }
})
```
