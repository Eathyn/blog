# 程序结构

## 局部变量

- 自动存储期: 函数执行时分配内存存储值，函数执行完成后回收内存
- 静态存储期: 函数执行时分配内存存储值，函数执行完成后不回收内存

### 静态局部变量

- 变量类型前加 `static` 形成静态局部变量，具有静态存储期
- 函数执行结束后静态局部变量不会被垃圾回收

```c
#include <stdio.h>

void static_variable();

int main(void) {
  static_variable(); // 1
  static_variable(); // 2

  return 0;
}

void static_variable() {
  static int a = 1;
  printf("a = %d\n", a);
  a++;
}
```

### 形式参数

- 形式参数和局部变量一样，具有自动存储期和块作用域

## 外部变量

- 外部变量又称为局部变量，具有静态存储期和文件作用域