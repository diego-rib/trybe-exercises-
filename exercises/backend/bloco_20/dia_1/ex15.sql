SELECT EMPLOYEE_ID AS `id`,
FIRST_NAME AS `nome`,
LAST_NAME AS `sobrenome`,
MONTHNAME(HIRE_DATE) AS `mês de contratação`
FROM hr.employees;