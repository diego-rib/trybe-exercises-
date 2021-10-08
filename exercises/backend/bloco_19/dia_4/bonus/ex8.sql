USE Pixar;

SELECT * FROM BoxOffice;

UPDATE BoxOffice
SET rating = 9.0
WHERE domestic_sales > 400000000;