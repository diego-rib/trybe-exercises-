USE BeeMovies;

DELIMITER $$

CREATE TRIGGER trigger_movie_update
BEFORE UPDATE ON movies
FOR EACH ROW
BEGIN

	IF NEW.ticket_price > OLD.ticket_price
		THEN SET NEW.ticket_price_estimation = 'Increasing';
    ELSE 
		SET NEW.ticket_price_estimation = 'Decreasing';
    END IF;

	INSERT INTO movies_logs(movie_id, executed_action, log_date)
		VALUES(NEW.movie_id, 'UPDATE', DATE(NOW()));

END $$

DELIMITER ;
