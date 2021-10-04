/* recipesRouter.js */ 
const express = require('express');
const router = express.Router();
const crypto = require('crypto');

const {
  validateUsername,
  validateCredentials,
} = require('./validations');

/* <---------------- Register ---------------------> */
// 1 - Crie uma rota POST /user/register que receba uma requisição que envie username , email e password no body da requisição, onde:

const validateRegisterData = (req, res, next) => {
  const { username, email, password } = req.body;

  // 1.4 - Para todos os casos não atendidos acima deve ser retornado o código de status e um JSON com uma mensagem de erro, ex: status 400 e { "message": "invalid data" }
  if (!(validateUsername(username) && validateCredentials(email, password))) {
    return res.status(400).json({ "message": "invalid data" });
  }

  req.user = { username, email, password };
  next();
}

router.post('/register', validateRegisterData, function (_req, res) {
  // 1.5 - Caso tenha sucesso deve ser retornado uma resposta com o código de status e um JSON com uma mensagem de sucesso, ex: status 201 e { "message": "user created" }
  res.status(201).json({ "message": "user created" });
});

/* <---------------- Login ---------------------> */
// 2- Crie uma rota POST /user/login que receba uma requisição que envie email / password no body da requisição e devolva um token como resposta, onde:
const validateLoginData = (req, res, next) => {
  const { email, password } = req.body;

  // 2.4 - Para todos os casos não atendidos acima deve ser retornado o código de status e um JSON com uma mensagem de erro, ex: status 400 e { "message": "email or password is incorrect" }
  if (!validateCredentials(email, password)) {
    return res.status(400).json({ "message": "email or password is incorrect" });
  }

  next();
};

router.post('/login', validateLoginData, function (_req, res) {
  // 2.1 - O formato desse token retornado deve ser uma string aleatória com 12 caracteres;
  const token = crypto.randomBytes(6).toString('hex');

  // 2.5 - Caso tenha sucesso deve ser retornado uma resposta com o código de status e um JSON com uma mensagem de sucesso, ex: status 200 e { "token": "86567349784e" } ;
  res.status(201).json({ token });
});

module.exports = router;
