USE Scientists;

SELECT 
    `Name`, Code
FROM
    Projects
WHERE
    NOT `Name` LIKE 'A%';