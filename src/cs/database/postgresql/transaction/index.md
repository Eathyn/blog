---
date: 2023-09-04
category: PostgreSQL
---

# Transaction

> Reference: [Transaction](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-transaction/)

- transaction（事务）：a single unit of work that consists of one or more operations.

- 事务的特性：
  - Atomicity（原子性）
  - Consistency（一致性）
  - Isolation（隔离性）
  - Durability（持久性）

- 事务的语句：
  - `BEGIN`：开始事务。
  - `ROLLBACK`：将**未**提交到数据库的数据进行回滚。
  - `COMMIT`：将数据提交到数据库。执行 `COMMIT` 之前在其他会话中无法查询到修改的数据。执行 `COMMIT` 之后无法用 `ROLLBACK` 进行回滚。
