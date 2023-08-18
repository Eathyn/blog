---
date: 2023-08-18
category: PostgreSQL
---

# Group Data

## Group By

> Reference: [Group By](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-group-by/)

- `GROUP BY`：将某一列中相同值的行归为一组，可以对组执行聚合函数（Aggregate Functions）。

```plsql
SELECT 
   column_1, 
   column_2,
   ...,
   aggregate_function(column_3)
FROM 
   table_name
GROUP BY 
   column_1,
   column_2,
   ...;
```

- PostgreSQL 语句执行顺序：`FROM` -> `WHERE` -> `GROUP BY` -> `HAVING` -> `SELECT` -> `DISTINCT` -> `ORDER BY` -> `LIMIT`

## Having

> Reference: [Having](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-having/)

- `HAVING`：设置过滤组的条件。

```plsql
SELECT
	column1,
	aggregate_function (column2)
FROM
	table_name
GROUP BY
	column1
HAVING
	condition;
```

- PostgreSQL 语句执行顺序：`FROM` -> `WHERE` -> `GROUP BY` -> `HAVING` -> `SELECT` -> `DISTINCT` -> `ORDER BY` -> `LIMIT`

- 因为 `HAVING` 在 `SELECT` 之前，所以在 `HAVING` 中无法使用 `SELECT` 中定义的别名。

- `HAVING` 用于设置过滤组的条件；`WHERE` 用于设置过滤行的条件。
