USE PecasFornecedores;

SELECT 
    *
FROM
    Fornecedores
WHERE
    `name` LIKE '%LTDA%'
ORDER BY `name` DESC;