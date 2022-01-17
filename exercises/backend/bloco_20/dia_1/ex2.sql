SELECT MAX(SALARY) AS maior_salario,
MIN(SALARY) AS menor_salario,
MAX(SALARY) - MIN(SALARY) AS diferenca
FROM hr.employees;