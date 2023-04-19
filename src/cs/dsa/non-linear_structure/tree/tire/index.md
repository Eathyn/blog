# Tire

## 介绍

- tire 可用于文本的自动完成和自动修正。
- tire 属于树的一种。
- tire 来源于单词 retrieval。
- tire 的发音理论上是 tree，但这与 tree 混淆了，所以很多人把 tire 发音为 try。
- tire 的其他名字为 prefix tree（前缀树）或 digital tree（字典树）。

## 数据结构

- 前缀树节点可以拥有多个子节点。
- 前缀树节点是一个哈希表，键是字母，值是另一个前缀树节点。

![前缀树节点的数据结构](./_image/tire-node-ds.png)

## 存储方式

单词的最后一个字母的值是一个哈希表，这个哈希表的键是星号（*），值是空值（null）。

![单词结尾的存储方式](./_image/store-1.png)

单词可能是另一个单词的一部分。

![单词衍生](./_image/store-2.png)

## 搜索

### 方式

> Book: A Common-Sense Guide to DSA: p311

- 搜索单词是否在字典树中
- 搜索单词是否为某个单词的前缀（以下算法和代码根据这种搜索）

### 算法

> Book: A Common-Sense Guide to DSA: p311

1. 声明 currentNode 变量，该变量指向字典树的根节点。
2. 遍历单词的字母
   - 如果当前节点的哈希表中无法找到该字母，则说明单词不在字典树中。
   - 如果找到该字母，则 currentNode 向下移动一位，开始遍历单词的下一个字母。

### 实现
