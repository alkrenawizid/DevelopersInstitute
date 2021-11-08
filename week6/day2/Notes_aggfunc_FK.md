# Aggregate functions

AVG() – return the average value.

COUNT() – return the number of values.

MAX() – return the maximum value.

MIN() – return the minimum value.

SUM() – return the sum of all or distinct values.

We often use the aggregate functions with the **GROUP BY** clause in the SELECT statement. 
In these cases, the GROUP BY clause divides the result set into groups of rows and the aggregate functions perform a calculation on each group e.g., 
maximum, minimum, average, etc.

---

# Group By

The GROUP BY statement groups rows that have the same values into summary rows,
The GROUP BY statement is often used with aggregate functions (COUNT(), MAX(), MIN(), SUM(), AVG()) 
to group the result-set by one or more columns.
The queries that contain the GROUP BY clause are called grouped 
queries and only return a single row for every grouped item.

https://learnsql.com/blog/examples-of-sql-group-by/

---

# Having

Restricting query results using the HAVING clause
It's not always that we will want to perform groupings on all 
the data in a given table. There will be times when we will want 
to restrict our results to a certain given criteria.  
In such cases , we can use the HAVING clause
SQL Having Clause is used to restrict the results returned by the GROUP BY clause.
The HAVING clause was added to SQL because the WHERE keyword cannot be used with aggregate functions.

```sql
SELECT column_name(s)
FROM table_name
WHERE condition
GROUP BY column_name(s)
HAVING condition
ORDER BY column_name(s);
```


---

# Foreign key

What Does Foreign Key Mean?
A foreign key is a column or group of columns in a relational database table that **provides a link between data in two tables**. It acts as a cross-reference between tables because it **references the primary key of another table**, thereby establishing a link between them.

While a primary key may exist on its own, a **foreign key must always reference to a primary key somewhere**. The original table containing the primary key is the parent table (also known as referenced table). This key can be referenced by multiple foreign keys from other tables, known as “child” tables.

![](NotesImages/foreign-key-2.png)

You want to make sure that no one can insert rows in the weather table that do not have a matching entry in the cities table.

---

# Inner join

![](NotesImages/sql-joins-venn-diagrams-inner-join.png)

The statement joins the first table with the second table by matching the values in the actor_id and actor_playing_id columns

The inner join examines each row in the first table (actors). It compares the value in the actor_id column with the value in the actor_playing_id column of each row in the second table (movies). If these values are equal, the inner join creates a new row that contains columns from both tables and adds this new row the result set.

Tutorial to read: https://www.postgresqltutorial.com/postgresql-joins/
