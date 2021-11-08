-- Database: Exercises_In_Class

-- DROP DATABASE IF EXISTS "Exercises_In_Class";

-- CREATE DATABASE "Exercises_In_Class"
--     WITH 
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'en_US.UTF-8'
--     LC_CTYPE = 'en_US.UTF-8'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1;


-- CREATE TABLE city_info (
--   event_datetime timestamp,
--   city VARCHAR(50),
--   temperature decimal,
--   light decimal,
--   airquality_raw decimal,
--   sound decimal,
--   humidity decimal,
--   dust decimal
-- )

-- select * from city_info;

-- COPY city_info(event_datetime, city, temperature, light, airquality_raw, sound, humidity, dust)
-- FROM '/Users/zid/Downloads/city_info.csv'
-- DELIMITER ','
-- CSV HEADER;

-- 1. Select everything from the table. (every row and columns) - How many records does the table have?
-- SELECT COUNT(*) FROM city_info;

-- 2. What was Bostons temperature on the 01/03/2015 at 11am ?
-- SELECT temperature FROM city_info WHERE city = 'Boston' AND event_datetime = '2015-03-01 11:00';

-- 3. When (ie. days and hours) was the temperature between 28 and 30 degrees in San Francisco ? 
-- SELECT event_datetime, city, temperature FROM city_info WHERE city = 'San Francisco' AND temperature <= 30 AND temperature >= 28;

-- 4. Which city was the most noisy (show the name of the city, the date and the noise index)? - Don't use the MAX function
-- SELECT event_datetime,city,sound FROM city_info ORDER BY sound DESC lIMIT 1;

-- 5. Which city was the least noisy (show the name of the city, the date and the noise index)? - Don't use the MIN function
-- SELECT event_datetime,city,sound FROM city_info ORDER BY sound ASC lIMIT 4;

