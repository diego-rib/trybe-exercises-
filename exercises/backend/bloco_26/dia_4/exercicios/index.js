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

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
