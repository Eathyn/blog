# 指针和数组

## 指针的算数运算

### 指针加上整数

- 如果 `p` 指向 `arr[i]`，则 `p + j` 指向 `arr[i + j]`

```c
#include <stdio.h>

int main() {
  int arr[] = {1, 2, 3, 4, 5};
  int *p = &arr[0];

  printf("arr[0] = %d\n", *p); // 1
  printf("arr[2] = %d\n", *(p + 2)); // 3

  return 0;
}
```

### 指针减去整数

- 如果 `p` 指向 `arr[i]`，则 `p - j` 指向 `arr[i - j]`

```c
#include <stdio.h>

int main() {
  int arr[] = {1, 2, 3, 4, 5};
  int *p = &arr[2];

  printf("arr[2] = %d\n", *p); // 3
  printf("arr[0] = %d\n", *(p - 2)); // 1

  return 0;
}
```

### 两个指针相减

如果 `p` 指向 `i`，`q` 指向 `j`，则 `arr[i] - arr[j]` 等于 `i - j`

```c
#include <stdio.h>

int main() {
  int arr[] = {1, 2, 3, 4, 5};
  int *p = &arr[2];
  int *q = &arr[0];

  printf("%d\n", p - q); // 2

  return 0;
}
```

### 指针比较

- 可以使用 `<` / `<=` / `>` / `>=` 和 `==` / `!=` 对指针进行比较，但是只有这两个指针指向同一个数组时，指针比较才有意义

```c
#include <stdio.h>

int main() {
  int arr[] = {1, 2, 3, 4, 5};
  int *p = &arr[0];
  int *q = &arr[4];

  printf("p > q => %d\n", p > q); // 0
  printf("p < q => %d\n", p < q); // 1

  return 0;
}
```

### 指向复合字面量的指针

```c
#include <stdio.h>

int main() {
  int *p = (int[]) {1, 2, 3, 4, 5};
  printf("%d\n", *p); // 1

  return 0;
}
```

## 指针用于数组处理

- 通过指针自增和指针比较来处理 `for` 循环

```c
#include <stdio.h>

int main() {
  int arr[] = {1, 2, 3, 4, 5};
  int arrLen = sizeof arr / sizeof arr[0];

  int sum = 0;
  for (int *p = &arr[0]; p < &arr[arrLen]; p++) {
    sum += *p;
  }
  printf("sum = %d\n", sum);

  return 0;
}
```

### *运算符和++运算符的组合

- `*p++` / `*(p++)`

```c
#include <stdio.h>

int main() {
  int arr[] = {1, 2};
  int *p = &arr[0];
  *p++ = 100; // equal to *(p++) = 100;

  printf("arr[0] = %d\n", arr[0]); // 100
  printf("arr[1] = %d\n", arr[1]); // 2

  return 0;
}
```

- `(*p)++`

```c
#include <stdio.h>

int main() {
  int arr[] = {1, 2};
  int *p = &arr[0];
  (*p)++;

  printf("arr[0] = %d\n", arr[0]); // 2
  printf("arr[1] = %d\n", arr[1]); // 2

  return 0;
}
```

- `*++p` / `*(++p)`

```c
#include <stdio.h>

int main() {
  int arr[] = {1, 2};
  int *p = &arr[0];
  int value = *++p;

  printf("value = %d\n", value); // 2
  return 0;
}
```

- `++*p` / `++(*p)`

```c
#include <stdio.h>

int main() {
  int arr[] = {1, 2};
  int *p = &arr[0];
  ++*p;

  printf("%d", *p); // 2
  return 0;
}
```

## 用数组名作为指针

- 数组的名字相当于指向数组第一个元素的指针

```c
#include <stdio.h>

int main() {
  int arr[] = {1, 2, 3};
  printf("arr[0] = %d\n", *arr); // arr[0] = 1

  return 0;
}
```

### 数组型实际参数

- 数组名传递给函数时会被视为指针

```c
#include <stdio.h>

void fn(int arr[]);

int main() {
  int arr[] = {1, 2, 3};
  fn(arr);

  return 0;
}

void fn(int arr[]) {
  printf("%p\n", arr); // <address>
  printf("%d\n", arr[0]); // 1
}
```

- 如果想让数组中的元素不被修改，则增加 `const`

```c
#include <stdio.h>

void fn(const int arr[]);

int main() {
  int arr[] = {1, 2, 3};
  fn(arr);

  return 0;
}

void fn(const int arr[]) {
  // error: Read-only variable is not assignable
  arr[0] = 100;
}
```

- 可以把数组的参数类型声明为指针: `int *arr`

```c
#include <stdio.h>

void fn(int *arr);

int main() {
  int arr[] = {1, 2, 3};
  fn(arr);

  return 0;
}

void fn(int *arr) {
  printf("%d\n", arr[0]);
}
```

### 用指针作为数组名

- 指针可以用作数组名

```c
#include <stdio.h>

int main() {
  int arr[] = {1, 2, 3};
  int *p = arr;

  printf("%d\n", *p); // 1
  printf("%d\n", *(p + 1)); // 2

  return 0;
}
```

## 指针和多维数组

### 处理多维数组的元素

Q: demo not working

### 处理多维数组的列


