const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

// Crie uma rota GET /ping
// Sua rota deve retornar o seguinte JSON: { message: 'pong' }
app.get('/ping', function(_req, res) {
  res.json({ message: 'pong' });
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
