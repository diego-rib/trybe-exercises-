const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

// 1 - Crie uma rota GET /ping
// 1.1 - Sua rota deve retornar o seguinte JSON: { message: 'pong' }
app.get('/ping', function(_req, res) {
  res.json({ message: 'pong' });
});

// 2 - Crie uma rota POST /hello
// 2.1 - Sua rota deve receber, no body da requisição, o seguinte JSON: { "name": "<nome do usuário>" }
// 2.2 - Sua rota deve retornar o seguinte JSON: { "message": "Hello, <nome do usuário>!" } 
app.post('/hello', function(req, res) {
  const { name } = req.body;
  res.json({ message: `Hello, ${name}` });
});

// 3 - Crie uma rota POST /greetings
// 3.1 - Sua rota deve receber o seguinte JSON: { "name": "<nome do usuário>", "age": <idade do usuário> } .
app.post('/greetings', function(req, res) {
  const { name, age } = req.body;

  // 3.2 - Caso a pessoa usuária tenha idade superior a 17 anos, devolva o JSON { "message": "Hello, <nome do usuário>!" } com o status code 200 - OK .
  if (Number(age) > 17) {
    return res.status(200).json({ message: `Hello, ${name}` });
  }

  // 3.3 - Caso a pessoa usuária tenha 17 anos ou menos, devolva o JSON { "message": "Unauthorized" } com o status code 401 - Unauthorized .
  res.status(401).json({ message: "Unauthorized" });
});

// 4 - Crie uma rota PUT /users/:name/:age .
// 4.1 - Sua rota deve retornar o seguinte JSON: { "message": "Seu nome é <name> e você tem <age> anos de idade" } .
app.put('/users/:name/:age', function(req, res) {
  const { name, age } = req.params;
  res.json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` })
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
