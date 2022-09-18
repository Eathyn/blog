# 预处理器

- `#define` 和 `#include` 等指令是由预处理处理的
- 预处理器是一个小软件，它可以在编译前处理 C 程序

## 预处理器的工作原理

- 预处理器的行为是由预处理指令控制的，如: `#define` 和 `#include`
- `#define` 指令定义了宏
- `#include` 包含其他文件的内容

## 预处理指令

- 预处理器指令分为三类
  - 宏定义
  - 文件包含
  - 条件编译

- 在宏定义的后面加一个注释来解释宏的含义是一种比较好的习惯

## 宏定义

### 简单的宏

- 也称为对象式宏

```c
#define STR_LEN 10
```

### 带参数的宏

- 也成为函数式宏

- 参数要加括号，避免出错

```c
#include <stdio.h>

#define IS_EVEN_V1(n) (n % 2 == 0)
#define IS_EVEN_V2(n) ((n) % 2 == 0)

int main() {
  // 被替换为 1 + 1 % 2 == 0
  printf("%d\n", IS_EVEN_V1(1 + 1)); // 0

  // 被替换为 (1 + 1) % 2 == 0
  printf("%d\n", IS_EVEN_V2(1 + 1)); // 1

  return 0;
}
```

- 带参数的宏可以用来复用代码片段

```c
#include <stdio.h>

#define PRINT_INT(n) printf("%d\n", n)

int main() {
  int a = 1;
  PRINT_INT(a);

  return 0;
}
```

### # 运算符

- `#` 运算符将宏的一个参数转换为字面串

```c
#include <stdio.h>

// 编译器将 #n 转化为 n 的字面串
#define PRINT_INT(n) printf(#n " = %d\n", n)

int main() {
  int a = 1;

  PRINT_INT(a); // a = 1
  // 相当于: printf("a" " = %d\n", n)
  // C语言中相邻的字符串会被合并: printf("a = %d\n", n)

  return 0;
}
```

### ## 运算符

- `##` 运算符可以将两个记号粘合在一起，形成一个记号
- 如果 `##` 运算符其中的一个操作数是宏参数，则形式参数会被实际参数替代后再与其他记号粘合

```c
#define MK_ID(n) i##n

int main() {
  int MK_ID(1) = 100; // equivalent to: int i1 = 100;

  return 0;
}
```

### 宏的通用属性

- 宏列表中可以调用其他宏

```c
#include <stdio.h>

#define PI 3.14
#define TWO_PI (PI * 2)

int main() {
  printf("%f\n", TWO_PI); // 6.28

  return 0;
}
```

- 宏定义的作用范围通常到出现这个宏的文件末尾

- `#undef` 用于取消宏定义

```c
#include <stdio.h>

#define NUM 1
#undef NUM

int main() {
  // error: error: 'NUM' undeclared
  printf("%d\n", NUM);

  return 0;
}
```

### 宏定义中的圆括号

- 如果宏的替换列表中有运算符，那么需要将替换列表放在圆括号中

```c
#include <stdio.h>

#define NUM1 2 * 3
#define NUM2 (2 * 3)

int main() {
  printf("%d\n", 6 / NUM1); // 9
  printf("%d\n", 6 / NUM2); // 1

  return 0;
}
```

- 如果宏有参数，则每个参数都需要放在括号中

```c
#include <stdio.h>

#define SCALE1(x) (x * 10)
#define SCALE2(x) ((x) * 10)

int main() {
  printf("%d\n", SCALE1(1 + 2)); // 21
  printf("%d\n", SCALE2(1 + 2)); // 30

  return 0;
}
```

### 创建较长的宏

- 可以使用逗号运算符来使替换列表包含一系列表达式

```c
#include <stdio.h>

#define STR_LEN 10
#define ECHO(var) (gets(var), puts(var))

int main() {
  char str[STR_LEN + 1];
  ECHO(str);

  return 0;
}
```

### 预定义宏

- `__LINE__`: 当前宏所在行号
- `__FILE__`: 当前文件名

```c
#include <stdio.h>

int main() {
  printf("%d\n", __LINE__);
  printf("%s\n", __FILE__);
  printf("%s\n", __DATE__);
  printf("%s\n", __TIME__);
  printf("%d\n", __STDC__);

  return 0;
}
```

- 使用预定义宏来找到程序的错误位置

```c
#include <stdio.h>

#define CHECK_ZERO(divisor) \
  if (divisor == 0)         \
    printf("*** Attempt to divide by zero on line %d of file %s ***\n", __LINE__, __FILE__)

int main() {
  int divisor = 0;
  CHECK_ZERO(divisor);
  printf("%d\n", 2 / divisor);

  return 0;
}
```

- C语言提供 assert 宏用于检测错误

### C99 中新增的预定义宏

Skip

### 空的宏参数

- Skip: 编译器报错了

### 参数个数可变的宏

## 条件编译


