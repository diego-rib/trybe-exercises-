USE sakila;

DELIMITER $$

CREATE PROCEDURE nomeDaProcedure(IN categoria VARCHAR(50))
BEGIN

	SELECT 
		f.film_id AS `id do filme`, 
		f.title AS `titulo`, 
		f_category.category_id AS `id da categoria`,
		categoria AS `nome da categoria`
	FROM film AS f
	INNER JOIN film_category AS f_category
	ON f.film_id = f_category.film_id
	WHERE f_category.category_id IN (
		SELECT category_id
		FROM category
		WHERE `name` = `nome da categoria`
	);

END $$

DELIMITER ;
