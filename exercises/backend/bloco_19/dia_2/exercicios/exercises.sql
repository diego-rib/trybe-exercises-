USE Scientists;

SELECT 'This is SQL Exercise, Practice and Solution';

SELECT '1' AS Primeiro,
 '2' AS Segundo,
 '3' AS Terceiro;

SELECT 10 + 15;

SELECT 2 * 8 + 20;

SELECT * FROM Scientists;

SELECT Name AS 'Nome do Projeto',
 Hours AS 'Tempo de Trabalho'
 FROM Projects;

SELECT CONCAT('O projeto ',
 Name, ' precisou de ',
 Hours, ' horas para ser concluído.') AS 'Tempo do projeto'
 FROM Projects;

SELECT Name AS 'Nome do Projeto',
 Hours AS 'Tempo de Trabalho'
 FROM Projects
 ORDER BY Hours DESC
 LIMIT 3;

SELECT COUNT(DISTINCT Project)
 FROM AssignedTo;

SELECT Name FROM Projects ORDER BY Hours DESC LIMIT 1;

SELECT Name FROM Projects ORDER BY Hours ASC LIMIT 1 OFFSET 1;

SELECT * FROM Projects ORDER BY Hours ASC LIMIT 5;

SELECT CONCAT('Existem ', COUNT(DISTINCT Name), ' cientistas na tabela Scientists.')
 FROM Scientists;