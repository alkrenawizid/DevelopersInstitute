-- Database: Hollywood

-- DROP DATABASE IF EXISTS "Hollywood";

-- CREATE DATABASE "Hollywood"
--     WITH 
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'en_US.UTF-8'
--     LC_CTYPE = 'en_US.UTF-8'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1;

-- CREATE TABLE actors(
--  actor_id SERIAL PRIMARY KEY,
--  first_name VARCHAR (50) NOT NULL,
--  last_name VARCHAR (100) NOT NULL,
--  age DATE NOT NULL,
--  number_oscars SMALLINT NOT NULL
-- )

-- select * from actors

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('Matt','Damon','08/10/1970', 5);

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('George','Clooney','06/05/1961', 2);

-- select first_name, last_name, number_oscars from actors where number_oscars > 2

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES ('James','Stewart','06/05/1971', 7),
-- ('Deborah','Kerr','06/05/1958', 4),
-- ('Kate','Winslet','06/05/1969', 3),
-- ('Maggie','Gyllenhaal','06/05/1961', 2),
-- ('Sigourney','Weaver','06/05/1961', 3);

-- SELECT * FROM actors where actor_id < 5;
SELECT * FROM actors WHERE actor_id < 5 ORDER BY last_name DESC;
-- SELECT * FROM actors where number_oscars > 4;
-- SELECT * FROM actors where first_name LIKE '%e%';
