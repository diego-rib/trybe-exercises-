SELECT mvs.title, box.international_sales, box.domestic_sales
FROM Pixar.Movies AS mvs
INNER JOIN Pixar.BoxOffice AS box
ON box.movie_id = mvs.id;