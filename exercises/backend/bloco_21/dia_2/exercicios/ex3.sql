SELECT mvs.title, box.rating
FROM Pixar.Movies AS mvs
INNER JOIN Pixar.BoxOffice AS box
ON box.movie_id = mvs.id 
ORDER BY box.rating DESC;