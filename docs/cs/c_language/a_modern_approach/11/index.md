# 指针

## 指针变量

- 计算机将内存分割为字节
- 每个字节可以存储 8 位信息
- 每个字节都有唯一的地址
- 变量占有的第一个字节的地址为该变量的地址
- 指针就是内存地址，指针变量就是存储内存地址的变量

### 指针变量的声明

- 指针变量前需要加 `*` 符号
- `int *p` : 指针变量指向的对象的类型是 `int` (用术语对象来代替变量，是因
  为 p 可以指向不属于变量的内存区域)
- 指针变量可以指向另一个指针变量，称为指针的指针

## 取地址运算符和间接寻址运算符

- `&x` : 变量 `x` 的内存地址
- `*p` : 地址 `p` 指向的对象的内容

```c
int main() {
  int x = 1;
  int *p = &x;
  int y = *p;

  return 0;
}
```

### 取地址运算符



### 间接寻址运算符

- 如果 `p` 指向 `i`，则 `*p` 是 `i` 的别名；改变 `*p` 的值会影响到 `i`

```c
#include <stdio.h>

int main() {
  int x = 1;
  int *p = &x;

  *p = 2;
  printf("%d\n", x); // 2

  return 0;
}
```

- 在没有赋值的指针变量上使用间接寻址运算符会导致警告

```c
#include <stdio.h>

int main() {
  int *p;
  printf("%p\n", p); // wrong

  return 0;
}
```

- 声明指针变量和间接寻址运算符都使用了 `*` 符号，注意别混淆

```c
int main() {
  int x = 1;
  int *p = &x; // 指针变量的声明
  int y = *p; // 间接寻址运算符

  return 0;
}
```

```c
#include <stdio.h>

int main() {
  int p = 1;
  int q = 2;
  int *pointer_p = &p;
  int *pointer_q = &q;

  // *pointer_p : 变量 p 的别名
  // *pointer_q 中的 * : 间接取值运算符
  *pointer_p = *pointer_q;

  printf("p = %d\n", p); // 2
  printf("q = %d\n", q); // 2

  return 0;
}
```

## 指针赋值

- 如果指针变量的类型相同，则可以互相赋值

```c
int main() {
  int x = 1;
  int *pointer_x = &x;
  // 两个指针变量保存着相同的内存地址，因此指向相同的对象
  int *pointer_y = pointer_x;

  return 0;
}
```

## 指针作为参数

- 使用指针解决函数无法修改实参变量的问题

```c
#include <stdio.h>

void exchange_value(int *n1, int *n2);

int main() {
  int n1 = 1;
  int n2 = 2;

  exchange_value(&n1, &n2);

  printf("n1 = %d\n", n1); // 2
  printf("n2 = %d\n", n2); // 1
  
  return 0;
}

void exchange_value(int *n1, int *n2) {
  int temp = *n1;
  *n1 = *n2;
  *n2 = temp;
}
```

### 用 const 保护参数

- 使用 `const` 表示指针变量指向的对象的内容不会被改变

```c
void const_arg(const int *p) {
  // error: Read-only variable is not assignable
  *p = 1;
}
```

## 指针作为返回值

- function can return a pointer

```c
#include <stdio.h>

int *max(int *n1, int *n2);

int main() {
  int a = 1;
  int b = 2;
  
  int *max_pointer = max(&a, &b);
  printf("max = %d\n", *max_pointer);

  return 0;
}

int *max(int *n1, int *n2) {
  return *n1 > *n2 ? n1 : n2;
}
```

- Function can return static value.

```c
#include <stdio.h>

int *return_pointer();

int main() {
  int *p = return_pointer();
  printf("a = %d\n", *p);

  return 0;
}

int *return_pointer() {
  static int a = 1;
  return &a;
}
```

- `&arr[i]` : 数组 arr 的 i 个元素的地址

```c
#include <stdio.h>

int main() {
  int arr[] = {1, 2, 3};

  printf("address: %p\n", &arr[2]);
  printf("value: %d\n", *&arr[2]);

  return 0;
}
```
