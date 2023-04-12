---
date: 2021-10-29
category: solution
tag: 瀑布流
---

# 瀑布流

## 源码

[瀑布流](https://github.com/Eathyn/waterfall-vue-solution)

## 思路

- 将新元素放到高度最小的列的下方。
- 首页元素采用并行渲染，让首屏渲染时间达到最小。非首屏元素采用串行渲染，确保元素的位置正确。

## 代码解析

[1] 使用 watch 监听父元素传递过来的瀑布流数据 `data`。[2] 如果数据发生改变，则调用 `waterfall` 函数。

```vue
<script>
let innerData = []

export default {
  props: {
    // 瀑布流数据
    data: {
      type: Array,
      default: () => [],
    },
  },
  // [1]
  watch: {
    data: {
      handler: function(v) {
        innerData = [...innerData, ...v]
        this.waterfall()
      }
    },
  },
  methods: {
    // [2]
    waterfall() {
      // ...
    },
  },
}
</script>
```

首屏的图片采用并行渲染，即同时发送多个 HTTP 请求加载图片。如果采用串行渲染，那么用户需要等待图片一张接着一张渲染，这样首屏所有图片完成渲染的时间就比较慢。另外，因为首屏采用并行渲染，所以无法保证图片的加载顺序，即后发送的 HTTP 请求可能因为图片体积比较小比其他图片更早加载。

```vue
<script>
let observerObj
// 最小列索引
let minCol = 0
// 瀑布流数据队列
let innerData = []
// 已经渲染的数量
let count = 0

export default {
  props: {
    // 首屏开启并行渲染，减少白屏时间
    firstPageCount: {
      type: Number,
      default: 6,
    },
  },
  data() {
    return {
      colData: [],
    }
  },
  methods: {
    waterfall() {
      this.updateMinCol()
      this.appendColData()
      // 首屏采用并行渲染，非首屏采用串行渲染
      if (++count < this.firstPageCount) {
        this.waterfall()
      } else {
        // ...
      }
    },

    // 更新瀑布流高度最小列
    updateMinCol() {
      // 并行渲染时，无法获取最小列，只能按列依次渲染
      if (count < this.firstPageCount) {
        minCol = count % (this.col)
        return
      }
      const heightList = this.$refs['cols'].map((item) => item.offsetHeight)
      const minHeight = Math.min(...heightList)
      minCol = heightList.indexOf(minHeight)
    },

    // 取出数据源中最靠前的一个并添加到瀑布流高度最小的那一列
    appendColData() {
      const colItem = innerData.shift()
      this.colData[minCol].push(colItem)
    },
  }
}
</script>
```

首屏图片渲染完成之后，使用 `IntersectionObserver` 对首屏的最后一个图片元素进行监听。这个元素渲染完成后调用 done 方法，done 方法会调用 waterfall 方法。waterfall 方法先调用 updateMinCol 方法，该方法通过对比每列的 offsetHeight 获取最小高度的列；然后 waterfall 调用 appendColData 方法，该方法会把数据存放到高度最小列中；最后 waterfall 通过 nextTick 调用 startObserver，该方法监听每个新增加的瀑布流元素。

## Refs

[交错式瀑布流的实现](https://juejin.cn/post/7086330043038695432)
