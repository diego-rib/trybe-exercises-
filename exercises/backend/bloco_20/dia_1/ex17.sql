SELECT LAST_NAME AS `sobrenome`,
DATE(HIRE_DATE) AS `data de contratação`
FROM hr.employees
WHERE HIRE_DATE LIKE '%1987-07%';