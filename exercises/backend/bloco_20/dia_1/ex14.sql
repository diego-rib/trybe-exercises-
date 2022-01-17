SELECT EMPLOYEE_ID AS `id`,
FIRST_NAME AS `nome`,
LAST_NAME AS `sobrenome`,
DAY(HIRE_DATE) AS `dia de contratação`
FROM hr.employees;