SELECT EMPLOYEE_ID AS `id`,
FIRST_NAME AS `nome`,
LAST_NAME AS `sobrenome`,
YEAR(HIRE_DATE) AS `ano de contratação`
FROM hr.employees;