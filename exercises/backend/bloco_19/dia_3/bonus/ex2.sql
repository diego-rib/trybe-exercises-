USE Scientists;

SELECT 
    Name
FROM
    Projects
WHERE
    `Name` LIKE BINARY '%A%'
ORDER BY `Name`;