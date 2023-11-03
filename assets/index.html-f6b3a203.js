import{_ as i,W as l,X as e,a0 as a}from"./framework-0d71bc9d.js";const r={},n=a('<h1 id="linked-list" tabindex="-1"><a class="header-anchor" href="#linked-list" aria-hidden="true">#</a> Linked List</h1><h2 id="链表相对于数组的优点" tabindex="-1"><a class="header-anchor" href="#链表相对于数组的优点" aria-hidden="true">#</a> 链表相对于数组的优点</h2><ul><li>内存不需要成块分配，可以分散在各个地方。</li><li>插入或删除非末尾的元素不需要移动其他元素的位置。</li><li>队列使用双向列表实现效率更高，因为双向链表的首位元素和末尾元素的插入或删除操作的时间复杂度都是 O(1)。</li></ul><h2 id="链表与数组的时间复杂度对比" tabindex="-1"><a class="header-anchor" href="#链表与数组的时间复杂度对比" aria-hidden="true">#</a> 链表与数组的时间复杂度对比</h2><h3 id="reading" tabindex="-1"><a class="header-anchor" href="#reading" aria-hidden="true">#</a> Reading</h3><ul><li>worst case <ul><li>array: O(1)</li><li>linked list: O(n) 链表末尾</li></ul></li><li>best case <ul><li>array: O(1)</li><li>linked list: O(1) 链表开头</li></ul></li></ul><h3 id="searching" tabindex="-1"><a class="header-anchor" href="#searching" aria-hidden="true">#</a> Searching</h3><ul><li>worst case <ul><li>array: O(n)</li><li>linked list: O(n)</li></ul></li><li>best case <ul><li>array: O(1)</li><li>linked list: O(1)</li></ul></li></ul><h3 id="insertion" tabindex="-1"><a class="header-anchor" href="#insertion" aria-hidden="true">#</a> Insertion</h3><ul><li>worst case <ul><li>array: O(n) 数组开头插入</li><li>linked list: O(n) 链表末尾插入</li></ul></li><li>best case <ul><li>array: O(1) 数组末尾插入</li><li>linked list: O(1) 链表开头插入</li></ul></li></ul><h3 id="deletion" tabindex="-1"><a class="header-anchor" href="#deletion" aria-hidden="true">#</a> Deletion</h3><ul><li>worst case <ul><li>array: O(n) 数组开头删除</li><li>linked list: O(n) 链表末尾删除</li></ul></li><li>best case <ul><li>array: O(1) 数组末尾删除</li><li>linked list: O(1) 链表开头删除</li></ul></li></ul><h2 id="应用" tabindex="-1"><a class="header-anchor" href="#应用" aria-hidden="true">#</a> 应用</h2><ul><li>反转链表（exercises-4）</li><li>删除中间元素（exercises-5）</li></ul><h2 id="refs" tabindex="-1"><a class="header-anchor" href="#refs" aria-hidden="true">#</a> Refs</h2><ul><li>A Common-Sense Guide to Data Structures and Algorithms: Chapter 14</li></ul>',16),s=[n];function d(t,h){return l(),e("div",null,s)}const u=i(r,[["render",d],["__file","index.html.vue"]]);export{u as default};