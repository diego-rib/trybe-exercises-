SELECT JOB_ID AS cargo,
ROUND(AVG(SALARY), 2) AS media_salarial
FROM hr.employees
GROUP BY JOB_ID
ORDER BY media_salarial DESC;