SELECT t.*, m.title 
FROM Pixar.Theater AS t
LEFT JOIN Pixar.Movies AS m
ON m.theater_id = t.id
ORDER BY t.name;