USE sakila;
SELECT * from film;
SELECT title AS 'Titulo',
release_year AS 'Ano de lançamento',
rating AS 'Classificação' FROM film;
SELECT COUNT(DISTINCT title) FROM film;