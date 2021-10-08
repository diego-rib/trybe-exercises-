USE PecasFornecedores;

SELECT 
    COUNT(code)
FROM
    Fornecedores
WHERE
    `code` LIKE '%f%';