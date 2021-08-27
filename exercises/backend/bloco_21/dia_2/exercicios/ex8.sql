SELECT id, name, location
FROM Pixar.Theater AS t
WHERE EXISTS (
	SELECT theater_id
    FROM Pixar.Movies
    WHERE t.id = theater_id
);