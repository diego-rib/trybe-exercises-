USE PecasFornecedores;

SELECT 
    peca,
    fornecedor,
    preco
FROM
    Fornecimentos
WHERE
    `fornecedor` LIKE '%n%';