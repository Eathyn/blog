---
date: 2023-08-14
category: PostgreSQL
---

# Join Tables

## Inner Join

> Reference
> - [Overview](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-joins/)
> - [Inner Join](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-inner-join/)

- `Inner Join`：两个表中相同的部分组成一个新表。

![结果](./_image/inner_join/result.png =x100)

- 韦恩图

![Inner Join](./_image/inner_join/venn_diagram.png =x150)

## Left Join

> Reference
> - [Overview](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-joins/)
> - [Left Join](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-left-join/)

- `Left Join`：新表包含左表的所有数据。如果值相同，则在对应行填充表的数据；如果值不相同，则在对应行填充 `NULL`。

![结果](./_image/left_join/result.png =x150)

- 韦恩图

![左表和右表有共同的数据](./_image/left_join/venn_common.png =x150)

![左表和右表没有共同的数据](./_image/left_join/venn_only.png =x150)

## Right Join

> Reference
> - [Overview](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-joins/)
> - [Right Join](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-right-join/)

- `Right Join`：新表包含右表的所有数据。如果值相同，则在对应行填充表的数据；如果值不相同，则在对应行填充 `NULL`。

![结果](./_image/right_join/result.png =x150)

- 韦恩图

![右表和左表有共同的数据](./_image/right_join/venn_common.png =x150)

![右表和左表没有共同的数据](./_image/right_join/venn_only.png =x150)

## Full Outer Join

> Reference: [Full Outer Join](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-full-outer-join/)

- `Full Outer Join`：新表包含左右表的所有数据。如果值相同，则在对应行填充表的数据；如果值不相同，则在对应行填充 `NULL`。

![result](./_image/full_outer_join/result.png =x200)

- 韦恩图

![Full Outer Join](./_image/full_outer_join/venn.png =x150)

## Cross Join

> Reference: [Cross Join](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-cross-join/)

- 形成笛卡尔积（Cartesian Product），即表 A 的每一行和表 B 的每一行形成新的行。

![笛卡尔积](./_image/cross_join/cartesian_product.png =x190)

- `cross join` 不需要 `ON` 子句。

```plsql
SELECT select_list
FROM T1
CROSS JOIN T2;
```

## Natural Join

> Reference: [Natural Join](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-natural-join/)

- `natural join` 指的是根据两个表中共同的列（common column）创建隐式的 `join` 语句。

```plsql
SELECT select_list
FROM T1
NATURAL JOIN T2;

-- 相当于：
SELECT select_list
FROM T1
INNER JOIN T2
USING(common_column_name)

-- 相当于：
SELECT select_list
FROM T1
INNER JOIN T2
  ON T1.common_column_name = T2.common_column_name
```

- 在 `NATURAL [INNER, LEFT, RIGHT] JOIN T2` 中，默认值为 `INNER`。

## Summary

![总结](./_image/summary.png =x400)
