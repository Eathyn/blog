---
date: 2023-08-13
category: PostgreSQL
---

# Filter Data

## Where

> Reference: [Where clause](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-where/)

- `WHERE`：过滤出满足查找条件的行。

- 语法：

```plsql
SELECT select_list
FROM table_name
WHERE condition
ORDER BY sort_expression
```

- 操作符：
  - 比较：`=`, `>`, `<`, `>=`, `<=,` `<>`
  - 逻辑：`AND`, `OR`
  - 其他：`IN`, `BETWEEN`, `LIKE`, `IS NULL`, `NOT`

## Limit

> Reference: [Limit clause](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-limit/)

- `LIMIT row_count`：只查找 `row_count` 行。
- `OFFSET row_count`：跳过 `row_count` 行再进行查找。

- 语法：

```plsql
SELECT select_list 
FROM table_name
ORDER BY sort_expression
LIMIT row_count OFFSET row_count
```

## Fetch

> Reference: [Fetch](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-fetch/)

- `Fetch` 和 `Limit` 的功能相同，区别是 `Fetch` 是标准的 SQL 而 `Limit` 不是。

- 语法：

```plsql
FETCH { FIRST | NEXT } [ row_count ] { ROW | ROWS } ONLY
```

- `FIRST` 和 `NEXT` 作用相同；`ROW` 和 `ROWS` 作用相同。

- `OFFSET` 和 `FETCH` 可以出现在任何位置，但是 `OFFSET` 必须在 `FETCH` 之前。

## IN

> Reference: [IN](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-in/)

- `IN` 搭配 `WHERE` 使用，`value IN (value1, value2, ...)` 表示 `value` 是否在后面的列表中。
- `NOT IN` 的作用与 `IN` 相反。

## Between

> Reference: [Between](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-between/)

- `BETWEEN` 搭配 `WHERE` 使用，用于检测值是否在某个范围之内。

- `NOT BETWEEN` 搭配 `WHERE` 使用，用于检测值是否不在某个范围之内。

## LIKE

> Reference: [Like](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-like/)

- `LIKE` 是模式匹配。

- `%`：匹配零个或多个任意字符。`Jar%` 匹配以 `Jar` 开头的字符串，后面有零个或多个字符。
- `_`：匹配一个任意字符。`Juli_` 匹配以 `Juli` 开头的字符串，后面有一个字符。

- `NOT LIKE` 是不匹配某个格式。

- `ILIKE`：在 `LIKE` 的基础上，忽略字母的大小写。
