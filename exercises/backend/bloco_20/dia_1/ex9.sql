SELECT JOB_ID AS cargo,
ROUND(AVG(SALARY)) AS media_salarial
FROM hr.employees
GROUP BY JOB_ID
HAVING JOB_ID != 'IT_PROG'
ORDER BY media_salarial DESC;