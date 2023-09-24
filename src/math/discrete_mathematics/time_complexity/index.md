---
date: 2023-07-22
---

# Time Complexity

## Role

- 因为执行一个算法所花费的时间受到机器硬件的影响，例如超级计算机的速度可能比个人电脑的速度快几百万倍，所以无法使用一个算法的执行时间作为算法的时间复杂度。

- 假设输入的数据量为 $x$，执行算法所花费的基本运算为 $f(x)$。结合函数的增长速率和上下界，作为算法的时间复杂度。

## Big-O Notation

> Refs: _Discrete Mathematics and Its Application_: p205

- 如果存在常数 $C$ 和 $k$，使得当 $x > k$ 时，有 $|f(x)| < C|g(x)|$，则我们说 $f(x)$ 是 $O(g(x))$ 的。

- $f(x)$ is $O(g(x))$ 表示 $f(x)$ 的增长小于 $Cg(x)$ 的增长。

- 常数 $C$ 和 $k$ 称为凭证（witnesses）。只要找到一对满足条件的 $C$ 和 $k$，那么就存在无数对满足条件的 $C$ 和 $k$。因为当 $x > k' > k$ 时，$|f(x)| \leq C|g(x)| < C'|g(x)|$

- 如果 $f(x)$ is $O(g(x))$ 且 $g(x)$ is $O(f(x))$，则 $f$ 和 $g$ 是同阶（same order）的。

- $f(x)$ is $O(g(x))$ 可以写成 $f(x) = O(g(x))$，但是 $=$ 不代表等于的意思。

- 证明当 $f(x) = a_nx^n + a_{n-1}x^{n-1} + ... + a_1x + a_0$，且 $a_0, a_1, ... a_{n-1}, a_{n}$ 为实数时，$f(x) = O(x^n)$：

当 $x > 1$ 时，

$$
\begin{align}
  |f(x)| &= |a_nx^n + a_{n-1}x^{n-1} + ... + a_1x + a_0| \\
         &\leq |a_n|x^n + |a_{n-1}|x^{n-1} + ... + |a_1|x + |a_0| \\
         &= |a_n|x^n + |a_{n-1}| \frac{x^n}{x} + ... + |a_1| \frac{x^n}{x^{n-1}} + |a_0| \frac{x^n}{x^n} \\
         &= x^n (|a_n| + \frac{|a_{n-1}|}{x} + ... + \frac{|a_1|}{x^{n-1}} + \frac{|a_0|}{x^n}) \\
         &\leq x^n (|a_n| + |a_{n-1}| + ... + |a_1| + |a_0|)
\end{align}
$$

::: tip Remark
- 把 $(|a_n| + |a_{n-1}| + ... + |a_1| + |a_0|)$ 当作常数 $C$，即 $|f(x)| \leq Cx^n$，所以 $f(x) = O(x^n)$
:::

## The Growth of Combination of Functions

### Sum

> Reference: Discrete Mathematics and Its Application: p212 - 213

证明：当 $f_1(x) = O(g_1(x))$，$f_2(x) = O(g_2(x))$ 时，$(f_1+f_2)(x) = O(max(|g_1(x)|, |g_2(x)|))$

$$
\begin{align}
  |(f_1 + f_2)(x)| &= |f_1(x) + f_2(x)| \\
                   &= |f_1(x)| + |f_2(x)| \\
                   &\leq C_1|g_1(x)| + C_2|g_2(x)| \\
                   &= C_1|g(x)| + C_2|g(x)| \\
                   &= (C_1 + C_2)|g(x)| \\
                   &= C|g(x)|
\end{align}
$$

::: tip Remark
- step 8-9 : $g(x) = max(|g_1(x)|, |g_2(x)|)$
- step 10-11 : $C = C_1 + C_2$
:::

### Product

> Reference: Discrete Mathematics and Its Application: p213 - 214

证明：当 $f_1(x) = O(g_1(x))$，$f_2(x) = O(g_2(x))$ 时，$(f_1f_2)(x) = O(g_1(x)g_2(x))$

$$
\begin{align}
  |(f_1f_2)(x)| &= |f_1(x)f_2(x)| \\
                &\leq |f_1(x)||f_2(x)| \\
                &\leq C_1|g_1(x)| C_2|g_2(x)| \\
                &= C_1 C_2 |(g_1g_2)(x)| \\
                &= C |(g_1g_2)(x)|
\end{align}
$$

::: tip Remark
- step 15-16 : $C = C1 \times C2$
:::
