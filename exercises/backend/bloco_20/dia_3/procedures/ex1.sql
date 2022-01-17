USE sakila;

DELIMITER $$

CREATE PROCEDURE exibe10AtoresMaisPopulares()
BEGIN

	SELECT CONCAT(first_name, ' ', last_name) AS `name`,
	(
		SELECT COUNT(*)
		FROM film_actor AS f
		WHERE a.actor_id = f.actor_id
		GROUP BY f.actor_id
	) as `numero de filmes`
	FROM actor AS a
	ORDER BY `numero de filmes` DESC
	LIMIT 10;

END $$

DELIMITER ;
