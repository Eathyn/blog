---
date: 2023-08-29
category: PostgreSQL
---

# Common Table Expressions

## Introduction

> Reference: [CTE Introduction](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-cte/)

- 公用表表达式（Common Table Expressions）作用是简化查询语句。

- 例子：

```plsql {1-14,20-21}
WITH cte_film AS (
    SELECT
        film_id,
        title,
        (CASE
            WHEN length < 30
                THEN 'Short'
            WHEN length >= 30 AND length < 90
                THEN 'Medium'
            ELSE 'Long'
        END) length
    FROM
        film
)

SELECT
    film_id,
    title,
    length
FROM
    cte_film
WHERE
    length = 'Long'
ORDER BY
    title;
```

## Recursive Query

> Reference: [Recursive Query](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-recursive-query/)


