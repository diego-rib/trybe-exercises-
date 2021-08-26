SELECT department_id AS departamento,
ROUND(AVG(SALARY), 2) AS media_salarial,
COUNT(EMPLOYEE_ID) AS numero_funcionarios
FROM hr.employees
GROUP BY department_id
HAVING department_id >= 10;