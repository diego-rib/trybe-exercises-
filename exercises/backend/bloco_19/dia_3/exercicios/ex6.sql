USE PecasFornecedores;

SELECT 
    *
 FROM
    Fornecimentos
 WHERE
    `preco` BETWEEN 15 AND 40
 ORDER BY preco ASC;