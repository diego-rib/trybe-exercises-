USE sakila;
SELECT DISTINCT last_name FROM actor;
SELECT COUNT(DISTINCT last_name) FROM actor;
SELECT * FROM actor ORDER BY last_name ASC, first_name DESC;

SELECT * FROM language WHERE name != 'English' LIMIT 5;

SELECT * FROM film;
-- Crie uma query para encontrar os 20 primeiros filmes ,
-- incluindo o título , o ano de lançamento , a duração ,
-- a classificação indicativa e o custo de substituição .
-- Ordene os resultados pelos filmes com a maior duração e depois pelo menor custo de substituição
SELECT title AS 'Título',
 release_year AS 'Ano de lançamento',
 rental_duration AS 'Duração',
 rating AS 'Classificação',
 replacement_cost AS 'Custo de substituição'
 FROM film
 ORDER BY rental_duration DESC,
 replacement_cost ASC
 LIMIT 20;