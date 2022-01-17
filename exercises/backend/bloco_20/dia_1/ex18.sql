SELECT FIRST_NAME AS `nome`,
LAST_NAME AS `sobrenome`,
DATEDIFF(DATE(NOW()), DATE(HIRE_DATE)) AS `dias na empresa`
FROM hr.employees;