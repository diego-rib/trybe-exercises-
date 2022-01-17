USE Pixar;

SELECT id FROM Movies
WHERE title = 'WALL-E';

DELETE FROM BoxOffice
WHERE movie_id = 11;

DELETE FROM Movies
WHERE title = 'WALL-E';