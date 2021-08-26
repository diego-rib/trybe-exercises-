SELECT JOB_ID AS cargo,
ROUND(SUM(SALARY)) AS total_salario
FROM hr.employees
GROUP BY JOB_ID
ORDER BY total_salario DESC;