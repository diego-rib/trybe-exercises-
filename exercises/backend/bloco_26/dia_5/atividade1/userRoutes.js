/* recipesRouter.js */ 
const express = require('express');
const router = express.Router();

const validateData = (req, res, next) => {
  const { username, email, password } = req.body;
  
  // 1.2 - email deve ter o formato email@mail.com
  const validEmail = /^[A-Za-z0-9._]+@([A-Za-z]+\.)[A-Za-z]{2,3}(\.[A-Za-z]{2})?$/;
  
  // 1.3 - password deve conter no mínimo 4 caracteres e no máximo 8 (todos números)
  const validPassword = /\b[\d]{4,8}\b/;
  
  const paramsExist = username && email && password;

  // 1.1 - username deve ter mais de 3 caracteres
  if (!paramsExist || !(username.length > 3 && validEmail.test(email) && validPassword.test(password))) {
    // 1.4 - Para todos os casos não atendidos acima deve ser retornado o código de status e um JSON com uma mensagem de erro, ex: status 400 e { "message": "invalid data" }
    return res.status(400).json({ "message": "invalid data" });
  }
  
  req.user = { username, email, password };

  next();
}

// 1 - Crie uma rota POST /user/register que receba uma requisição que envie username , email e password no body da requisição, onde:
router.post('/register', validateData, function (req, res) {
  const { user } = req;
  // 1.5 - Caso tenha sucesso deve ser retornado uma resposta com o código de status e um JSON com uma mensagem de sucesso, ex: status 201 e { "message": "user created" }
  res.status(201).json({ "message": "user created" });
});

module.exports = router;
