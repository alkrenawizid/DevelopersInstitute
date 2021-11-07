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
SELECT * FROM customers WHERE first_name NOT LIKE 'Scott';

