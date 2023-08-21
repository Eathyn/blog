---
date: 2023-08-21
category: PostgreSQL
---

# Set Operation

## Union

> Reference: [Union](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-union/)

- `UNION`：将多个 `SELECT` 语句的返回结果集合在一起。

![UNION](./_image/venn_union.png =x120)

```plsql {3}
SELECT select_list_1
FROM table_expresssion_1
UNION
SELECT select_list_2
FROM table_expression_2
```

- 限制
  - 所有 `SELECT` 语句的列名的数量和顺序必须相同。
  - 同一列的数据类型必须兼容。

- `UNION` 返回的结构不包含重复的行；`UNION ALL` 返回的结构包含重复的行。

- `ORDER BY` 必须放在最后一个 `SELECT` 语句之后，才能确保顺序正确。

```plsql {6}
SELECT select_list_1
FROM table_expresssion_1
UNION
SELECT select_list_2
FROM table_expression_2
ORDER BY sort_expression;
```

## Intersect

> Reference: [Intersect](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-intersect/)

- `INTERSECT`：将多个 `SELECT` 语句的返回结果中相同的行集合在一起。

![INTERSECT](./_image/venn_intersect.png =x120)

```plsql {3}
SELECT select_list
FROM A
INTERSECT
SELECT select_list
FROM B;
```

- 限制：与 `UNION` 的限制相同。

## Except

> Reference: [Except](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-except/)

- `EXCEPT`：返回第一次查询结果中不存在于第二次查询结果的行。

![EXCEPT 韦恩图](./_image/venn_except.png =x120)

```plsql {3}
SELECT select_list
FROM A
EXCEPT 
SELECT select_list
FROM B;
```

- 限制：与 `UNION` 的限制相同。

