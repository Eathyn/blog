---
date: 2023-08-11
category: PostgreSQL
---

# Query Data

## SELECT

- `select_list`：列名。使用 `,` 隔开多个列名；使用 `*` 选择所有列。
- `table_name`：表名。

```plsql
SELECT select_list FROM table_name;
```

## AS

- 为列设置别名。

```plsql
SELECT column_name AS alias_name FROM table_name;
```

## ORDER BY

- `ORDER BY select_list`：根据 `select_list` 的数据进行升序或降序排序。
- `ASC`：升序；`DESC`：降序。
- `NULLS FIRST`：将数据中的 `NULL` 排在最前面；`NULLS LAST`：将数据中的 `NULL` 排在最后面。

```plsql
SELECT
	select_list
FROM
	table_name
ORDER BY
	sort_expression1 [ASC | DESC],
        ...
	sort_expressionN [ASC | DESC];
```

## DISTINCT

- `DISTINCT`：去除重复的行。

### one column

- 查找名为 `column1` 的列中不重复的数据。

```plsql
SELECT
   DISTINCT column1
FROM
   table_name;
```

### multiple columns

- 将 `bcolor` 和 `fcolor` 组成的数据行当作查找对象，查找不重复的数据。

```plsql
SELECT
   DISTINCT bcolor, fcolor
FROM
   table_name;
```

- 执行前：

|   | bcolor | fcolor |
|---|--------|--------|
| 1 | blue   | red    |
| 2 | green  | red    |
| 3 | blue   | red    |
| 4 | blue   | green  |

- 执行后：

|   | bcolor | fcolor |
|---|--------|--------|
| 1 | blue   | red    |
| 2 | green  | red    |
| 3 | blue   | green  |

### DISTINCT ON

- 将 `bcolor` 和 `fcolor` 组成的数据行当作查找对象，查找不重复的数据。然后过滤掉 `bcolor` 上重复的数据。

```plsql
SELECT
   DISTINCT ON (bcolor) bcolor, fcolor
FROM
   table_name;
```

- 执行前：

|   | bcolor | fcolor |
|---|--------|--------|
| 1 | blue   | red    |
| 2 | green  | red    |
| 3 | blue   | red    |
| 4 | blue   | green  |

- 执行后：

|   | bcolor | fcolor |
|---|--------|--------|
| 1 | blue   | red    |
| 2 | green  | red    |
