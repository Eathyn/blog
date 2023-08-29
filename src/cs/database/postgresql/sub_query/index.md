---
date: 2023-08-28
category: PostgreSQL
---

# Sub Query

## Introduction

> Reference: [SubQuery Introduction](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-subquery/)

- 子查询（Sub Query）/ 内查询（Inner Query）：位于括号中的查询。
- 外查询（Outer Query）：包含子查询的查询。

- 例子：

```plsql {7-10}
SELECT
	film_id,
	rental_rate
FROM
	film
WHERE
	rental_rate > (
		SELECT AVG(rental_rate)
		FROM film
	)
ORDER BY rental_rate ASC
```

- `IN` 结合子查询：

```plsql {7-15}
SELECT
	film_id,
	title
FROM
	film
WHERE
	film_id IN (
		SELECT
			inventory.film_id
		FROM
			rental
		INNER JOIN inventory ON inventory.inventory_id = rental.inventory_id
		WHERE
			return_date BETWEEN '2005-05-29' AND '2005-05-30'
	);
```

## ANY Operator

> Reference: [ANY Operator](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-any/)

- 含义：
  - `x > ANY(subquery)`：`x` 比子查询中的**任意**一项大时返回 `true`。
  - `x < ANY(subquery)`：`x` 比子查询中的**任意**一项小时返回 `true`。
  - `x = ANY(subquery)`：`x` 与子查询中的任意一项相等时返回 `true`，相当于 `IN`。
  - `x <> ANY(subquery)`：`x` 与子查询中的任意一项不相等时返回 `true`。

- 格式：`expresion operator ANY(subquery)`。

- 规定：
  - 子查询只能返回一列。
  - `ANY` 需要与比较操作符一起使用。

- 例子：

```plsql {3}
SELECT title
FROM film
WHERE length >= ANY(
    SELECT MAX(length)
    FROM film
    INNER JOIN film_category USING(film_id)
    GROUP BY  category_id
);
```

## ALL Operator

> Reference: [ALL Operator](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-all/)

- 含义：
  - `A > ALL(subquery)`：`A` 比子查询中的**每一项**都大时返回 `true`。
  - `A < ALL(subquery)`：`A` 比子查询中的**每一项**都小时返回 `true`。
  - `A = ALL(subquery)`：`A` 与子查询中的任意一项相等时返回 `true`，相当于 `IN`。

## EXISTS Operator

> Reference: 
> - [EXISTS](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-exists/)
> - [The Meaning of `SELECT 1`](https://stackoverflow.com/a/7171072)

- 含义：如果子查询返回了至少一行，那么 `EXISTS (subquery)` 返回 `true`。

- 格式：`EXISTS (subquery)`。

- `EXISTS` 操作符只关心是否有返回行，不关心返回的内容，所以子查询中可以返回一列或多列。`ANY` 和 `ALL` 则只能返回一列。

- 如果子查询没有返回行，那么 `NOT EXISTS (subquery)` 返回 `true`。

- 如果子查询返回 `NULL`，那么 `EXISTS (subquery)` 返回 `true`。
