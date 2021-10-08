SELECT MAX(SALARY) AS maior_salario,
MIN(SALARY) AS menor_salario,
SUM(SALARY) AS total_salarios,
ROUND(AVG(SALARY), 2) AS media_salarial
FROM hr.employees;