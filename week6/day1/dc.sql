-- 1
SELECT COUNT (actor_id) from actors;
-- 2
INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES ('','','', 4);
-- ERROR:  invalid input syntax for type date: ""

