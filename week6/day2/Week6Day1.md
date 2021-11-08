# Database

**Database**: any collection of data, or information, that is specially organized for rapid search and retrieval by a computer.

The information is organized so that it can be easily accessed, managed and updated -> Store, manipulate and retrieve data 

Databases are structured to facilitate the storage, retrieval, modification, and deletion of data.

---

## A database management system (DBMS) 

DBMS : extracts information from the database in response to queries.

---

## History

<u>The 1970s – relational databases</u>
 
E. F. Codd released his paper “A Relational Model of Data for Large Shared Data Banks”. This paper coined the term ‘relational database’ at the start of the decade, and sparked development of this new way to store and access data.

A relational database is one that shows the relationship between different data records.

* more searchable

* more space-efficient, meaning reduced data storage costs.

<br>

<u>The 1980s – growth and standardisation of the relational database model</u>

Relational database model rose in use and popularity.

SQL became the standard language used for databases, which we still use today.

<br>

<u>The 1990s – the internet</u>

* Object oriented database systems grow more popular in the 90s.

* The creation of the World Wide Web : High investments in online businesses fuelled demand for client-server database systems. 

* The creation of MySQL in 1995, which was open source. This meant that it provided an alternative to the database systems offered by big companies like Oracle and Microsoft. 

<br>

<u>The 2000s – NoSQL</u>

In 1998, the term NoSQL (not only structured query language) was coined. It refers to databases that use query language other than SQL to store and retrieve data. NoSQL databases are useful for unstructured data.

* NoSQL allows faster processing of larger, more varied datasets. 

* NoSQL databases are more flexible than the traditional relational databases.

---

# Relational Database

**In a relational database, relationships between data items are expressed by means of tables**. Interdependencies among these tables are expressed by data values rather than by pointers. This allows a high degree of data independence.

A relational database is a collection of data items with predefined relationships between them. These items are organized into a set of:

* tables consisting of :
	* columns and 
	* rows. 

1. Tables : are used to list information about the objects that should be represented in the database. 

2. Each column in a table has a certain type of data, and each field indicates the actual value of an attribute. 

3. Rows in a table represent a set of related values of an object or entity. 

4. Each row in a table can be marked with a unique identifier, called a primary key, and rows in multiple tables can be associated using foreign keys.

---

# PostgreSQL: The World's Most Advanced Open Source Relational Database

PostgreSQL is a powerful, **open source object-relational database system** that uses and extends the **SQL language** combined with many features that safely store and scale the most complicated data workloads. 

The origins of PostgreSQL date back to 1986 as part of the POSTGRES project at the University of California at Berkeley and has more than 30 years of active development on the core platform.

**PostgreSQL allows us to work with relational databases**

It is a DBMS in which the database is organized and accessed according to the relationships between data items. 

---

# SQL

S.Q.L : Structured Query Language

It is the **standard language for relational database management systems**. SQL statements are used to perform tasks such as update data on a database, or retrieve data from a database.

The standard SQL commands such as "Select", "Insert", "Update", "Delete", "Create", and "Drop" (CRUD - "create", "read", update", "delete") can be used to accomplish almost everything that one needs to do with a database.


communicate with relational databases through SQL.


---

# Vocabulary

## Transactions

**A database transaction is one or more SQL statements executed as a sequence of operations.**

Transactions provide an “all or nothing” proposition: which means that:

* the entire transaction must be performed as a single unit and be written to the database, otherwise none of its individual components will be submitted. 

* Each transaction is processed consistently and reliably, independent of other transactions.

**ACID compliance**

All database transactions must exhibit **ACID properties (that is, atomicity, consistency, isolation, and durability)** to ensure data integrity.

1. Atomicity 

The atomicity requires that any transaction as a whole is executed successfully. If any part of the transaction fails, the entire transaction will be invalidated. 

2. Consistency

The consistency requires that the data written to the database as part of a transaction comply with all rules and restrictions set including constraints.

3. Isolation

The isolation is essential to control competition and ensure that each transaction is independent. 


4. Durability

The durability requires that all changes made to the database are permanent once the transaction is completed successfully.

---

# PGADMIN, a PostgreSQL management tool.

**pgadmin**: tool used to interact with the Postgres database sessions.
You can use PGAdmin to perform any sort of database administration required for a Postgres database

## What is difference between pgAdmin and PostgreSQL

* **The PostgreSQL is a database engine implementing SQL standards**. It usually listen as a server on a network TCP port to provide its abilities. 

* The pgAdmin is a sort of client. You are able to manipulate schema and data on an instance or multiple instances of PostgreSQL engines.

---

# Architecture

In database jargon, PostgreSQL uses a client/server model. 
A **client-server database** is one where the database resides on a server, and client applications are written to access the database. 

A PostgreSQL session consists of the following cooperating processes
(programs):

1. The user's client (frontend) application that wants to perform database operations.

2. A server process, which manages the database files, accepts connections to the database from client applications, and performs database actions on behalf of the clients. 

3. The database server program is called postgres.

**Recall that a server listens for requests for its services and the client makes requests. These requests will include selecting, inserting, updating, and deleting data.**

---

## Three-Tier architecture

A 3 Tier Architecture in DBMS is the most popular client server architecture in DBMS in which the development and maintenance of functional processes, logic, data access, data storage, and user interface is done independently as separate modules. Three Tier architecture contains a presentation layer, an application layer, and a database server.

The chief benefit of three-tier architecture is that because each tier runs on its own infrastructure, each tier can be developed simultaneously by a separate development team, and can be updated or scaled as needed without impacting the other tiers.

A web server is not sophisticated storage software. Complicated operations on data, done by commercial sites and anyone else presenting lots of dynamic data, should be handled by a **separate database**. 

This leads to a more complex architecture with three-tiers: 

1. the browser is still the client tier, 

2. the web server becomes the middle tier, 

3. and the database is the third or database tier. 

---

### Three-Tier Architecture - More Explanation

1. At the base of an application is the **database tier**, consisting of the database management system that manages the data users create, delete, modify, and query. 
It's where the information processed by the application is stored and managed. This can be a relational database management system such as PostgreSQL, MySQL, MariaDB, Oracle, DB2, Informix or Microsoft SQL Server, or in a NoSQL Database server such as Cassandra, CouchDB or MongoDB. -> **The database server**

A database server runs a database management system and provides database services to clients. The server manages data access and retrieval and completes clients’ requests.

2. Built on top of the database tier is the **middle tier** , which contains most of the application logic that you develop. It also communicates data between the other tiers. 
The application server house the business logic used to process user inputs.

3. On top is the **client tier** , usually web browser software that interacts with the application. The presentation tier provides the user interface. This is usually a web page or web site. The content can be static or dynamic, and is usually developed using HTML, CSS and Javascript .

**In a three-tier application, all communication goes through the application tier. The presentation tier and the data tier cannot communicate directly with one another**


---

# Steps with PostgreSQL

## 1. Create a database -

Right click -> Create -> Database
Look at the SQL part

---

## 2. Create a table

```SQL
CREATE TABLE actors(
 actor_id SERIAL PRIMARY KEY,
 first_name VARCHAR (20) NOT NULL,
 last_name VARCHAR (25) NOT NULL,
 age DATE NOT NULL,
 number_oscars SMALLINT NOT NULL
)
```

---

## 3. Note on Primary Key

### What Does Primary Key Mean?

A primary key is a special relational database table column (or combination of columns) designated to **uniquely identify each table record.**

A primary key is used as a unique identifier to quickly parse data within the table. A table cannot have more than one primary key.

A primary key’s main features are:

* It must contain a **unique value** for each row of data.

* It **cannot contain null values**.

* Every row must have a primary key value.

---

## 4. Select

An SQL SELECT statement is used to do this. The statement is divided into:

* a select list (the part that lists the columns to be returned), 

* a table list (the part that lists the tables from which to retrieve the data), 

* and an optional qualification (the part that specifies any restrictions)

---

### Date, time

Remember that any date or time literal input **needs to be enclosed in single quotes**, like text strings

Documentation on DATE/TIME datatype:https://www.postgresql.org/docs/current/datatype-datetime.html

Documentation on DATE/TIME functions: https://www.postgresql.org/docs/current/functions-datetime.html

---

### String

Documentation on STRING functions : https://www.postgresql.org/docs/current/functions-string.html

Documentation on STRING OPERATORS: https://www.postgresql.org/docs/6.3/c09.htm

---

### Integer

Documentation on INTEGER functions : https://www.postgresql.org/docs/current/functions-math.html

Documentation on COMPARAISON : https://www.postgresql.org/docs/current/functions-comparison.html

---

### Insert

To insert multiple rows into a table using a single INSERT statement, you use the following syntax:

```SQL
INSERT INTO table_name (column_list)
VALUES
    (value_list_1),
    (value_list_2),
    ...
    (value_list_n);
```

---

### Update

Update several data: https://www.postgresql.org/docs/current/sql-update.html

---

### Delete

Change sequence ID : https://brianchildress.co/reset-auto-increment-in-postgres/

---

## Order by
with multiple
https://www.postgresqltutorial.com/postgresql-order-by/
