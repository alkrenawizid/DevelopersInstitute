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
-- SELECT event_datetime,city,sound FROM city_info ORDER BY sound ASC lIMIT 1;

-- 6. Show the dust index of San Francisco on the 26/03/2015 after 20:00.
-- SELECT event_datetime, city, dust FROM city_info WHERE city = 'San Francisco' AND event_datetime >= '2015-03-26 20:00';

-- 7. When (ie. days and hours) is the humidity index less that 40 or more than 60 in Geneva?
-- SELECT event_datetime, city, humidity FROM city_info WHERE city = 'Geneva' AND humidity <= 40 OR humidity >= 60;

-- 8. Where and when (Find the day (Sunday-Saturday)) is the light index the highest? - Use an alias for the day of the week.
-- SELECT to_char(event_datetime, 'Day') AS "Day Name",city,light FROM city_info ORDER BY light DESC lIMIT 10;

-- 9. Select only the info of the cities that start with an "S" (uppercase or lowercase). - Look at the DISTINCT constraint.
-- SELECT DISTINCT city FROM city_info WHERE city like 'S%';

-- 10. Add to the table, todays information in Israel - of this very hour. 
-- (timestamp,city,temperature,light,airquality_raw,sound,humidity,dust)
-- - Use the return statement to see what you just inserted: 
INSERT INTO city_info (event_datetime,city,temperature,light,airquality_raw,sound,humidity,dust)
VALUES (CURRENT_TIMESTAMP, 'Rahat', 21, 0, 20.1, 900, 0.29, 800)
RETURNING event_datetime,city,temperature,light,airquality_raw,sound,humidity,dust;




