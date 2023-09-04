---
date: 2023-09-01
category: PostgreSQL
---

# Modify Data

## Insert Statement

> Reference: 
> - [INSERT](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-insert/)
> - [Insert Multiple Rows](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-insert-multiple-rows/)

- 插入一行的格式：

```plsql
INSERT INTO table_name(column_list)
VALUES (value1, value2, ...);
```

- `INSERT` 语句返回的信息：
  - 内容：`INSERT OID count`。
  - `OID（Object Identifier）`：PostgreSQL 使用 `OID` 作为系统表的主键。`OID` 一般是 0。
  - `count`：成功插入的语句。 

- `RETURNING` 子句与 `INSERT` 结合使用，返回插入的数据：

```plsql
INSERT INTO table_name(column_list)
VALUES (value1, value2, …)
RETURNING *;
```

- 插入多行的格式：

```plsql
INSERT INTO table_name (column_list)
VALUES
    (value_list_1),
    (value_list_2),
    ...
    (value_list_n);
```

## Update Statement

> Reference: [UPDATE](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-update/)

- 格式：

```plsql
UPDATE table_name
SET column1 = value1,
    column2 = value2,
    ...
WHERE condition
RETURNING * | output_expression AS output_name;
```

- 可以结合 `RETURNING` 使用。

## Update Join

> Reference: [UPDATE join](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-update-join/)

- 含义：根据 表2 更新 表1 的行数据。

- 格式：

```plsql
UPDATE t1
SET t1.c1 = new_value
FROM t2
WHERE t1.c2 = t2.c2;
```

- `FROM` 必须紧跟在 `SET` 之后。

## Delete Statement

> Reference: [Delete](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-delete/)

- 含义：删除一行或多行数据。

- 格式：

```plsql
DELETE FROM table_name
WHERE condition
RETURNING (select_list | *)
```

- `DELETE` 语句只会删除行，不会改变表的结构。`ALTER TABLE` 可以改变表的结构。

- 删除一行：

```plsql
DELETE FROM links
WHERE id = 7;
```

- 删除多行：

```plsql
DELETE FROM links
WHERE id IN (6,5);
```

- 删除所有行：

```plsql
DELETE FROM links;
```

## Delete Join

> Reference: [Delete Join](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-delete-join/)

- 含义：根据 表2 删除 表1 的行数据。

- 格式：

```plsql
DELETE FROM t1
USING t2
WHERE t1.id = t2.id
```

- PostgreSQL 不支持 `DELETE JOIN` 语句，但是结合 `DELETE` 和 `USING` 可以模拟 `DELETE JOIN`。

- 因为 `USING` 子句不是 `SQL` 的规范，所以可能在其他数据库中不存在。如果需要兼容其他数据库，则使用子查询模拟 `DELETE JOIN`：

```plsql
DELETE FROM contacts
WHERE phone IN (
	SELECT phone
	FROM blacklist
);
```

## Upsert

> Reference: [Upsert](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-upsert/)

- 含义：插入一行数据时，如果数据库中这一行已存在，则执行 `UPDATE` 语句；如果不存在，则执行 `INSERT` 语句。这种操作在关系型数据库中叫做 `upsert`。

- 格式：

```plsql
INSERT INTO table_name(column_list)
VALUES(value_list)
ON CONFLICT target action;
```

- target 可以是：
  - 列名
  - `ON CONSTRAINT constraint_name`
  - `WHERE` 子句

- action 可以是：
  - `DO NOTHING`
  - `DO UPDATE SET column_1 = value_1, .. WHERE condition`
