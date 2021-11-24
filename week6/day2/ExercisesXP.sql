-- Database: public

-- DROP DATABASE IF EXISTS public;

-- CREATE DATABASE public
--     WITH 
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'en_US.UTF-8'
--     LC_CTYPE = 'en_US.UTF-8'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1;

-- CREATE TABLE items(
--  item_id SERIAL PRIMARY KEY,
--  item_name VARCHAR (50) NOT NULL,
--  item_price BIGINT NOT NULL
-- )

-- INSERT INTO items (item_name, item_price)
-- VALUES ('Small Desk', 100),
-- ('Large Desk', 300),
-- ('Fan', 80);

-- CREATE TABLE customers(
--  customer_id SERIAL PRIMARY KEY,
--  first_name VARCHAR (50) NOT NULL,
--  last_name VARCHAR (100) NOT NULL
-- );

-- INSERT INTO customers (first_name, last_name)
-- VALUES ('Greg','Jones'),
-- ('Sandra','Jones'),
-- ('Scott','Scott'),
-- ('Trevor','Green'),
-- ('Melanie','Johnson');

-- 1. All the items.
-- SELECT * FROM items;

-- 2. All the items with a price above 80 (80 not included).
-- SELECT * FROM items WHERE item_price > 80;

-- 3. All the items with a price below 300. (300 included)
-- SELECT * FROM items WHERE item_price >= 300;

-- 4. All customers whose last name is ‘Smith’ (What will be your outcome?). // emtpy 
-- SELECT * FROM customers WHERE last_name LIKE 'Smith';

-- 5. All customers whose last name is ‘Jones’.
-- SELECT * FROM customers WHERE last_name LIKE 'Jones';

-- 6. All customers whose firstname is not ‘Scott’.
-- SELECT * FROM customers WHERE first_name NOT LIKE 'Scott';

-- Exercises XP

-- 1. All items, ordered by price (lowest to highest).
-- SELECT * FROM items ORDER BY item_price ASC;

-- 2. Items with a price above 80 (80 included), ordered by price (highest to lowest).
-- SELECT * FROM items WHERE item_price >= 80 ORDER BY item_price DESC;

-- 3. The first 3 customers in alphabetical order (A-Z) – exclude ‘id’ from the results.
-- SELECT first_name,last_name FROM customers ORDER BY first_name DESC LIMIT 3;

-- 4. All last names (no other columns!), in reverse alphabetical order (Z-A)
-- SELECT last_name FROM customers ORDER BY first_name ASC;


-- Create a table named purchases. It should have 2 columns : customer_id and item_id. 
-- These columns are references from the tables customers and items. Edit the data of the purchases table:


-- CREATE TABLE purchases(
--    customer_id INT GENERATED ALWAYS AS IDENTITY,
--    item_id INT NOT NULL,
--    PRIMARY KEY(customer_id, item_id),
--    FOREIGN KEY (customer_id) REFERENCES customers (customer_id),
--    FOREIGN KEY (item_id) REFERENCES items (item_id)
-- );


-- 1. Add a row which references a customer by ID, but does not reference an item by ID (leave it blank). 
-- Does this work? Why/why not?
-- syntax error
-- INSERT INTO purchases (customer_id,item_id)
-- VALUES (1,);

-- 2. Add 5 rows which reference existing customers and items.

-- INSERT INTO purchases (customer_id,item_id)
-- OVERRIDING SYSTEM VALUE
-- VALUES (1,1),
-- (2,2),
-- (3,3);
-- select * from purchases;


