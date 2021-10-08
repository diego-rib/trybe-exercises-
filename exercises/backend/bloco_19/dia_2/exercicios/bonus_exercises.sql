USE PiecesProviders;

SELECT Piece, Price FROM Provides WHERE Provider = 'RBT';

SELECT CONCAT(Provider, ' - ', Piece) AS 'Maiores preços'
 FROM Provides
 ORDER BY Price DESC
 LIMIT 5;

SELECT CONCAT(Piece, ': ', Provider, ' _ ', Price)
 AS 'Quatro maiores preços'
 FROM Provides
 ORDER BY Price DESC
 LIMIT 4 OFFSET 3;

SELECT * FROM Provides
 WHERE Provider = 'HAL'
 ORDER BY Price DESC;

SELECT CONCAT('A peça 1 é fornecida por: ',
 COUNT(Provider),
 ' empresas.') FROM Provides
 WHERE Piece = 1;