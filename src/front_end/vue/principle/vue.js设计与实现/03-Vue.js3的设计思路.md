---
date: 2022-09-17
category:
- Vue
- Book - Vue.js 设计与实现
tag:
- principle
- Vue.js 3 的设计思路
---

# 第三章 Vue.js 3 的设计思路

## 3.1 声明式地描述 UI

- 可以使用模板或者 JavaScript 对象（即虚拟 DOM）来描述 UI

_模板描述 UI_

```vue
<template>
  <div>
    <h1>level 1</h1>
    <h2>level 2</h2>
  </div>
</template>
```

_虚拟 DOM 描述 UI_

```js
const titles = {
  tag: 'div',
  children: [
    {
      tag: 'h1',
      children: 'level 1',
    },
    {
      tag: 'h2',
      children: 'level 2',
    },
  ],
}
```

```vue
<script>
export default {
  name: 'Main',
  setup() {
    // h 函数返回虚拟 DOM 对象，其作用是让开发者编写虚拟 DOM 更加轻松
    return () => h('div', [
      h('h1', 'level 1'),
      h('h2', 'level 2'),
    ])
  }
}
</script>
```

## 3.2 初识渲染器

- 渲染器把虚拟 DOM 转化为真实 DOM
- 实现简单的渲染器：

```js
// 虚拟 DOM
const vnode = {
	tag: 'button',
	props: {
		class: 'my-button',
		onClick: () => alert('click me!'),
	},
	children: 'button',
}

// 渲染器：将虚拟 DOM 转化为真实 DOM
function renderer(vnode, container) {
	// 创建根元素
	const root = document.createElement(vnode.tag)

	// 将根元素的属性和方法挂载到根元素
	for (const prop in vnode.props) {
		if (/^on/.test(prop)) {
			const event = prop.substring(2).toLowerCase()
			const handler = vnode.props[prop]
			root.addEventListener(event, handler)
		} else {
			const name = prop
			const value = vnode.props[prop]
			root.setAttribute(name, value)
		}
	}

	// 递归遍历子元素
	if (Array.isArray(vnode.children)) {
		vnode.children.forEach((child) => renderer(child, root))
	} else {
		const textNode = document.createTextNode(vnode.children)
		root.appendChild(textNode)
	}

	// 将子元素挂载到根元素
	container.appendChild(root)
}
```

## 3.3 组件的本质

- 组件的本质就是返回一组虚拟 DOM 元素。在 Vue.js 中，组件是一个对象，调用对象的 render 函数就会返回虚拟 DOM。

```js
const MyComponent = {
	render() {
		return {
			tag: 'button',
			props: {
				class: 'my-button',
				onClick: () => alert('click me!'),
			},
			children: 'button',
		}
	}
}
```

- 优化渲染函数，让渲染函数的参数能够接受虚拟 DOM 和组件

```js
// 虚拟 DOM
const vnode = {
	tag: 'div',
	props: {
		class: 'wrap',
	},
	children: [
		{
			tag: 'h1',
			props: {},
			children: 'Hello World',
		},
		{
			tag: 'button',
			props: {
				onClick: () => alert('click me!'),
			},
			children: 'button',
		},
	],
}

// 组件
const MyComponent = {
	render() {
		return {
			tag: 'button',
			props: {
				class: 'my-button',
				onClick: () => alert('click me!'),
			},
			children: 'button',
		}
	}
}

function renderer(vnode, container) {
	if (typeof vnode.tag === 'string') {
		mountElement(vnode, container)
	} else {
		mountComponent(vnode, container)
	}
}

function mountComponent(vnode, container) {
	const subtree = vnode.render()
	renderer(subtree, container)
}

function mountElement(vnode, container) {
	// 创建根元素
	const root = document.createElement(vnode.tag)

	// 将根元素的属性和方法挂载到根元素
	for (const prop in vnode.props) {
		if (/^on/.test(prop)) {
			const event = prop.substring(2).toLowerCase()
			const handler = vnode.props[prop]
			root.addEventListener(event, handler)
		} else {
			const name = prop
			const value = vnode.props[prop]
			root.setAttribute(name, value)
		}
	}

	// 递归遍历子元素
	if (Array.isArray(vnode.children)) {
		vnode.children.forEach((child) => renderer(child, root))
	} else {
		const textNode = document.createTextNode(vnode.children)
		root.appendChild(textNode)
	}

	// 将子元素挂载到根元素
	container.appendChild(root)
}
```

## 3.4 模板的工作原理

- 虚拟 DOM 和模板都属于声明式地描述 UI。
- 编译器将模板转化为渲染函数，渲染函数返回虚拟 DOM。渲染器将虚拟 DOM 转化为真实 DOM。

_编译前_

```vue
<template>
  <button @click="handler">click me</button>
</template>

<script>
export default {
  name: 'MainView',
  methods: {
    handler() {
      alert('click me')
    },
  },
}
</script>
```

_编译后_

```vue
<script>
export default {
  name: 'MainView',
  methods: {
    handler() {
      alert('click me')
    },
  },
  render() {
    return h(
      'button',
      { onClick: this.handler },
      'click me',
    )
  }
}
</script>
```

## 3.5 Vue.js 是各个模块组成的有机整体

- 渲染器的工作内容之一是寻找并且只更新变化的内容。
- 编译器和渲染器之间通过虚拟 DOM 交流信息，这样是为了提升性能。

## 3.6 总结

- 虚拟 DOM 比模板灵活，模板比虚拟 DOM 直观。
- 渲染器的精髓在于后续的更新，它会通过 Diff 算法找出找出变更点，并且只更新需要更新的内容。
