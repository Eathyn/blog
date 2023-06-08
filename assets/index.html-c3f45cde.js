import{_ as t,W as h,X as o,$ as a,Y as e,Z as r,a0 as l,C as d}from"./framework-c8ebc670.js";const c={},s=l('<h1 id="binary-tree" tabindex="-1"><a class="header-anchor" href="#binary-tree" aria-hidden="true">#</a> Binary Tree</h1><h2 id="binary-tree-1" tabindex="-1"><a class="header-anchor" href="#binary-tree-1" aria-hidden="true">#</a> Binary Tree</h2><h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h3><p>二叉树（binary tree）：每个节点最多有两个子节点，即每个节点可以有 0 / 1 / 2 个子节点。</p><h3 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子</h3>',5),u=l('<h2 id="full-binary-tree" tabindex="-1"><a class="header-anchor" href="#full-binary-tree" aria-hidden="true">#</a> Full Binary Tree</h2><blockquote><p>[wiki](https://en.wikipedia.org/wiki/Binary_tree#:~:text=A-,full%20binary%20tree,-(sometimes%20referred%20to)</p></blockquote><h3 id="概念-1" tabindex="-1"><a class="header-anchor" href="#概念-1" aria-hidden="true">#</a> 概念</h3><ul><li>满二叉树（full binary tree）：每个节点都有零个或两个子节点。</li><li>full binary tree 又称作 proper / plane / strict binary tree。</li></ul><h3 id="例子-1" tabindex="-1"><a class="header-anchor" href="#例子-1" aria-hidden="true">#</a> 例子</h3><ul><li>tree-1 是满二叉树，因为每个节点都有零个或两个子节点。</li></ul>',6),p=e("ul",null,[e("li",null,"tree-2 不是满二叉树，因为节点 C 只有一个子节点。")],-1),m=e("h2",{id:"perfect-binary-tree",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#perfect-binary-tree","aria-hidden":"true"},"#"),r(" Perfect Binary Tree")],-1),y={href:"https://www.programiz.com/dsa/perfect-binary-tree",target:"_blank",rel:"noopener noreferrer"},k=e("h3",{id:"概念-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#概念-2","aria-hidden":"true"},"#"),r(" 概念")],-1),b=e("p",null,"完美二叉树（perfect binary tree）：所有内部节点（即有子节点的节点）都有两个子节点且所有叶子节点都在同一层。",-1),_=e("h3",{id:"例子-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#例子-2","aria-hidden":"true"},"#"),r(" 例子")],-1),g=e("ul",null,[e("li",null,"单个节点也属于完美二叉树，如 tree-1：")],-1),S=e("ul",null,[e("li",null,"tree-2 属于完美二叉树，因为所有内部节点（A）都有两个子节点且所有叶子节点（B/C）都在同一层。")],-1),f=e("ul",null,[e("li",null,"tree-3 属于完美二叉树，因为所有内部节点（A/B/C）都有两个子节点且所有叶子节点（D/E/F/G）都在同一层。")],-1),E=e("h2",{id:"complete-binary-tree",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#complete-binary-tree","aria-hidden":"true"},"#"),r(" Complete Binary Tree")],-1),B={href:"https://www.interviewcake.com/concept/java/complete-binary-tree",target:"_blank",rel:"noopener noreferrer"},K={href:"https://www.programiz.com/dsa/complete-binary-tree",target:"_blank",rel:"noopener noreferrer"},J=l('<h3 id="概念-3" tabindex="-1"><a class="header-anchor" href="#概念-3" aria-hidden="true">#</a> 概念</h3><p>完全二叉树（complete binary tree）需要满足两个条件：</p><ol><li>除了最后一层，其他层的节点都是满的，没有空余的位置。</li><li>最后一层的节点必须尽量的向左靠拢，节点的左边不能存在空余的位置。</li></ol><div class="hint-container tip"><p class="hint-container-title">提示</p><p>满二叉树一定是完全二叉树，但完全二叉树不一定是满二叉树。</p></div><h3 id="例子-3" tabindex="-1"><a class="header-anchor" href="#例子-3" aria-hidden="true">#</a> 例子</h3><ul><li>tree-1 是完全二叉树，满足了完全二叉树的两个条件。</li></ul>',6),O=e("ul",null,[e("li",null,"tree-2 不是完全二叉树，没有满足完全二叉树的第一个条件。")],-1),T=e("ul",null,[e("li",null,"tree-3 不是完全二叉树，没有满足完全二叉树的第二个条件。")],-1),A=l('<h2 id="balanced-binary-tree" tabindex="-1"><a class="header-anchor" href="#balanced-binary-tree" aria-hidden="true">#</a> Balanced Binary Tree</h2><h3 id="概念-4" tabindex="-1"><a class="header-anchor" href="#概念-4" aria-hidden="true">#</a> 概念</h3><p>平衡二叉树（balanced binary tree）又称为高度平衡二叉树（height-balanced binary tree），指的是每个内部节点的左子树和右子树的高度差不超过 1。</p><h3 id="例子-4" tabindex="-1"><a class="header-anchor" href="#例子-4" aria-hidden="true">#</a> 例子</h3><ul><li>tree-1 是平衡二叉树： <ul><li>A 的左右子树的高度差为 |2 - 2| = 0</li><li>B 的左右子树的高度差为 |1 - 1| = 0</li><li>C 的左右子树的高度差为 |1 - 1| = 0</li></ul></li></ul>',5),C=e("ul",null,[e("li",null,[r("tree-2 是平衡二叉树： "),e("ul",null,[e("li",null,"A 的左右子树的高度差为 |1 - 0| = 1"),e("li",null,"B 的左右子树的高度差为 |1 - 1| = 0")])])],-1),x=e("ul",null,[e("li",null,[r("tree-3 不是平衡二叉树： "),e("ul",null,[e("li",null,"A 的左右子树的高度差为 |2 - 0| = 2"),e("li",null,"B 的左右子树的高度差为 |2 - 1| = 1")])])],-1),Q=l('<h2 id="degenerate-tree" tabindex="-1"><a class="header-anchor" href="#degenerate-tree" aria-hidden="true">#</a> Degenerate Tree</h2><h3 id="概念-5" tabindex="-1"><a class="header-anchor" href="#概念-5" aria-hidden="true">#</a> 概念</h3><ul><li>退化树（degenerate tree）指的是每个内部节点只有一个子节点，形成类似单链表的结构。</li><li>退化树又称为 pathological tree。</li></ul><h3 id="例子-5" tabindex="-1"><a class="header-anchor" href="#例子-5" aria-hidden="true">#</a> 例子</h3>',4);function Y(W,U){const i=d("Mermaid"),n=d("ExternalLinkIcon");return h(),o("div",null,[s,a(i,{id:"mermaid-15",code:"eJzT1dXlKsksyUm1UigpSk3VNeQCiaTl5JcnZyQWlSiEOHEpKDhyAQDfqwrM"}),a(i,{id:"mermaid-16",code:"eJzT1dXlKsksyUm1UigpSk3VNeICiaTl5JcnZyQWlSiEOHEpKDgq6OraKThxAQAlDgvn"}),a(i,{id:"mermaid-17",code:"eJzT1dXlKsksyUm1UigpSk3VNeYCiaTl5JcnZyQWlSiEOHEpKDgq6OraKSBYzlwApVoNjg=="}),u,a(i,{id:"mermaid-51",code:"eJzT1dXlKsksyUm1UigpSk3VNeQCiaTl5JcnZyQWlSiEOHEpKDgq6OraKSBYzkCWE5jlAme5AlmuYJYbnOXOBQBLnxQ4"}),p,a(i,{id:"mermaid-59",code:"eJxFyDsKgDAMANC9p8ioYBZHB8Hv6OQFRFMsBgs1It7etkPdHg8RlRhhqkAcEZYqjGb7rPviBOZWATSAWMOvzquN6pMGry5qTJrsRtl5M+e+LnmZYoE2zJWjrfDp7EHB6gMAGiM2"}),m,e("blockquote",null,[e("p",null,[e("a",y,[r("Blog"),a(n)])])]),k,b,_,g,a(i,{id:"mermaid-84",code:"eJzT1dXlKsksyUm1UigpSk3VNeQCiaTl5JcnZyQWlSiEOHEpKDhyAQDfqwrM"}),S,a(i,{id:"mermaid-92",code:"eJzT1dXlKsksyUm1UigpSk3VNeICiaTl5JcnZyQWlSiEOHEpKDgq6OraKSBYzlwApTMNjQ=="}),f,a(i,{id:"mermaid-100",code:"eJzT1dXlKsksyUm1UigpSk3VNeYCiaTl5JcnZyQWlSiEOHEpKDgq6OraKSBYzkCWE5jlAme5AlnOYJYbnOXOBQBMCRQ2"}),E,e("blockquote",null,[e("ul",null,[e("li",null,[e("a",B,[r("blog-1"),a(n)])]),e("li",null,[e("a",K,[r("blog-2"),a(n)])])])]),J,a(i,{id:"mermaid-151",code:"eJzT1dXlKsksyUm1UigpSk3VNeQCiaTl5JcnZyQWlSiEOHEpKDgq6OraKSBYzkCWE5jlAme5auSV5uRoAvnOYL4bGt8dygcAFlwaWA=="}),O,a(i,{id:"mermaid-159",code:"eJzT1dXlKsksyUm1UigpSk3VNeICiaTl5JcnZyQWlSiEOHEpKDgq6OraKSBYzhp5pTk5mkC+E5jvAme5wmWKSypzUhWcFdIyc3KsilJTdIAiRfnZqSA2FwADGx9p"}),T,a(i,{id:"mermaid-167",code:"eJzT1dXlKsksyUm1UigpSk3VNeYCiaTl5JcnZyQWlSiEOHEpKDgq6OraKSBYzkCWE5jll5+SqmuokVeak6MJF3QBspwR0kZwaSRBY7ggEBWXVOakQs1SSMvMybEqSk3RAQoX5WengthwNS7YpQGLRjYJ"}),A,a(i,{id:"mermaid-204",code:"eJzT1dXlKsksyUm1UigpSk3VNeQCiaTl5JcnZyQWlSiEOHEpKDgq6OraKSBYzkCWE5jlAme5AlnOYJYbnOXOBQBLaxQ0"}),C,a(i,{id:"mermaid-224",code:"eJzT1dXlKsksyUm1UigpSk3VNeICiaTl5JcnZyQWlSiEOHEpKDgq6OraKSBYzkCWE5jlAme5AlnOYJZffkqqrqFGXmlOjiaqoBFUEAB2dxuJ"}),x,a(i,{id:"mermaid-244",code:"eJzT1dXlKsksyUm1UigpSk3VNeYCiaTl5JcnZyQWlSiEOHEpKDgq6OraKSBYzkCWE5jlAme5AlkuYJYbnJVXmpPDBQCNYBWs"}),Q,a(i,{id:"mermaid-266",code:"eJxLy8kvT85ILCpRCHHiUlBwVNDVtVPwy09J1TXUyCvNydGEC4KknRDSRnBpiKAzkOWMkDaGS0MEXYCs4pLKnFSgacn5OflFVgrlGZklqToKaZk5OVZJOaVAZnFJUX52KpgDV+5EmnJn0pS7EKccADYdWkk="})])}const z=t(c,[["render",Y],["__file","index.html.vue"]]);export{z as default};