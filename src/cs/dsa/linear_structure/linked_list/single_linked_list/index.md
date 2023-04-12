---
date: 2023-03-04
category: DSA
tag:
- linked list
- single linked list
---

# Linked List

## 链表相对于数组的优点

- 内存不需要成块分配，可以分散在各个地方。
- 插入或删除非末尾的元素不需要移动其他元素的位置。
- 队列使用双向列表实现效率更高，因为双向链表的首位元素和末尾元素的插入或删除操作的时间复杂度都是 O(1)。

## 链表与数组的时间复杂度对比

### Reading

- worst case
  - array: O(1)
  - linked list: O(n) 链表末尾
- best case
  - array: O(1)
  - linked list: O(1) 链表开头

### Searching

- worst case
  - array: O(n)
  - linked list: O(n)
- best case
  - array: O(1)
  - linked list: O(1)

### Insertion

- worst case
  - array: O(n) 数组开头插入
  - linked list: O(n) 链表末尾插入
- best case
  - array: O(1) 数组末尾插入
  - linked list: O(1) 链表开头插入

### Deletion

- worst case
  - array: O(n) 数组开头删除
  - linked list: O(n) 链表末尾删除
- best case
  - array: O(1) 数组末尾删除
  - linked list: O(1) 链表开头删除

## 应用

- 反转链表（exercises-4）
- 删除中间元素（exercises-5）

## Refs

- A Common-Sense Guide to Data Structures and Algorithms: Chapter 14
