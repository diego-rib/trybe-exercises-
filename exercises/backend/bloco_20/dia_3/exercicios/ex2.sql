USE PecasFornecedores;

SELECT 
    *
FROM
    Fornecimentos
WHERE
    `peca` = 2
ORDER BY fornecedor ASC;