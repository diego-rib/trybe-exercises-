SELECT rating
FROM Pixar.BoxOffice
WHERE movie_id IN (
	SELECT id
    FROM Pixar.Movies
    WHERE `year` > 2009
);

SELECT box.rating
FROM Pixar.Movies
INNER JOIN Pixar.BoxOffice AS box
ON id = box.movie_id
WHERE `year` > 2009;