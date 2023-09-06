---
date: 2023-09-05
category: PostgreSQL
---

# CSV File

## Import CSV File

> Reference: [Import CSV File](https://www.postgresqltutorial.com/postgresql-tutorial/import-csv-file-into-posgresql-table/)

```plsql
COPY table_name(column_list)

-- 指定文件路径
FROM 'path/to/csv/file'

DELIMITER ','

-- csv 文件有头部，不要将头部导入到数据库中
CSV HEADER;
```

- 还可以使用 `pgAdmin` 导入，参考上面的链接。

## Export to CSV File

> Reference: [Export to CSV File](https://www.postgresqltutorial.com/postgresql-tutorial/export-postgresql-table-to-csv-file/)

```plsql
COPY table_name (column_list)
TO 'path/to/csv/file'
DELIMITER ','
CSV HEADER;
```

- `CSV HEADER;`：导出头部。
