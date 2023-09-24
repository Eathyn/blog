---
date: 2023-09-16
category: PostgreSQL
---

# Constrain

## Primary Key

> Reference: [Primary Key](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-primary-key/)

- 主键（primary key）是一列或一组列，用来标识独一无二的行。

```plsql
CREATE TABLE TABLE (
	column_1 data_type PRIMARY KEY,
	column_2 data_type,
	…
);
```

- 主键限制是非空（NOT NULL）限制和唯一（UNIQUE）限制的组合。

- 一个表只能有一个主键。

- 添加主键限制：

```plsql
ALTER TABLE table_name
ADD PRIMARY KEY (column_1, column_2);
```

- 删除主键限制：

```plsql
ALTER TABLE table_name
DROP CONSTRAINT table_name_pkey;
```

## Foreign Key

> Reference: [Foreign Key](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-foreign-key/)

- 外键（foreign key）是一列或一组列，用来引用其他表的主键。

- 包含外键的表称为引用表（referencing table）或子表（child table）。被引用为外键的表称为被引用表（referenced table）或父表（parent table）。

- 设置外键。`ON DELETE` 和 `ON UPDATE` 表示父表的主键被删除或更新时要实行的操作：

```plsql
[CONSTRAINT foreign_key_name]
  FOREIGN KEY(foreign_key_columns)
    REFERENCES parent_table(parent_key_columns)
    [ON DELETE delete_action]
    [ON UPDATE update_action]
```

- `ON DELETE SET NULL`：父表的主键被删除时将子表对应的外键设置为 `NULL`：

```plsql
[CONSTRAINT foreign_key_name]
  FOREIGN KEY(foreign_key_columns)
    REFERENCES parent_table(parent_key_columns)
    ON DELETE SET NULL
```

- `ON DELETE CASCADE`：父表的主键被删除时将子表对应的行删除。这是最常用的方法：

```plsql
[CONSTRAINT foreign_key_name]
  FOREIGN KEY(foreign_key_columns)
    REFERENCES parent_table(parent_key_columns)
    ON DELETE CASCADE
```

- `ON DELETE SET DEFAULT`：父表的主键被删除时将子表对应的外键设置为默认值：

```plsql
[CONSTRAINT foreign_key_name]
  FOREIGN KEY(foreign_key_columns)
    REFERENCES parent_table(parent_key_columns)
    ON DELETE SET DEFAULT
```

- 为已有的表添加外键：

```plsql
ALTER TABLE child_table 
ADD CONSTRAINT constraint_name 
FOREIGN KEY (foreign_key_columns) 
REFERENCES parent_table (parent_key_columns)
[ON DELETE delete_action]
[ON UPDATE update_action]
```
