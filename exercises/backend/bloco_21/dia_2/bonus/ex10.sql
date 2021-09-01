SELECT m.*, b.rating
FROM Pixar.Movies AS m
INNER JOIN Pixar.BoxOffice AS b
ON m.id = b.movie_id
WHERE rating > 8
AND theater_id REGEXP '[0-9]+';