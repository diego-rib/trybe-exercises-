const express = require('express');
const router = express.Router();
const axios = require('axios');

// 1 - Crie uma rota GET /btc/price que receba uma requisição com um token na chave Authorization do headers da requisição e verifique se ele está correto, onde:
const validateToken = (req, res, next) => {
  const { authorization } = req.headers;

  const token = authorization.toString('hex');

  // 1.1 - O token deve ser uma string de 12 caracteres contendo letras e/ou números.
  const validToken = /\b[\w]{12}\b/;

  // 1.2 - Para todos os casos não atendidos acima deve ser retornado o código de status e um JSON com uma mensagem de erro, ex: status 401 e { "message": "invalid token" } ;
  if (!validToken.test(token)) return res.status(401).json({ message: "invalid token" });

  next();
};

router.get('/price', validateToken, async function (req, res) {
  // 1.3 - Caso tenha sucesso deve ser feito um fetch em uma API externa de sua preferência e retorne os dados da API como resposta;
  const result = await axios.get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json');
  res.status(200).json(result.data);
});

module.exports = router;
