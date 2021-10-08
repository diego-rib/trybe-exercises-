const express = require('express');
const bodyParser = require('body-parser');
const { readSimpsons, newSimpson } = require('./helper');

const app = express();
app.use(bodyParser.json());

// 1 - Crie uma rota GET /ping
app.get('/ping', function(_req, res) {
  // 1.1 - Sua rota deve retornar o seguinte JSON: { message: 'pong' }
  res.json({ message: 'pong' });
});

// 2 - Crie uma rota POST /hello
app.post('/hello', function(req, res) {
  // 2.1 - Sua rota deve receber, no body da requisição, o seguinte JSON: { "name": "<nome do usuário>" }
  const { name } = req.body;

  // 2.2 - Sua rota deve retornar o seguinte JSON: { "message": "Hello, <nome do usuário>!" }
  res.json({ message: `Hello, ${name}` });
});

// 3 - Crie uma rota POST /greetings
app.post('/greetings', function(req, res) {
  // 3.1 - Sua rota deve receber o seguinte JSON: { "name": "<nome do usuário>", "age": <idade do usuário> }
  const { name, age } = req.body;

  // 3.2 - Caso a pessoa usuária tenha idade superior a 17 anos, devolva o JSON { "message": "Hello, <nome do usuário>!" } com o status code 200 - OK .
  if (Number(age) > 17) {
    return res.status(200).json({ message: `Hello, ${name}` });
  }

  // 3.3 - Caso a pessoa usuária tenha 17 anos ou menos, devolva o JSON { "message": "Unauthorized" } com o status code 401 - Unauthorized .
  res.status(401).json({ message: "Unauthorized" });
});

// 4 - Crie uma rota PUT /users/:name/:age .
app.put('/users/:name/:age', function (req, res) {
  const { name, age } = req.params;

  // 4.1 - Sua rota deve retornar o seguinte JSON: { "message": "Seu nome é <name> e você tem <age> anos de idade" }
  res.json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` })
});

// 5 - Crie uma API de dados das personagens de Simpsons
app
.route('/simpsons')
// 6 - Crie um endpoint GET /simpsons
  .get(async function (_req, res) {
    readSimpsons()
    // 6.1 - O endpoint deve retornar um array com todos os simpsons.
      .then((simpsons) => res.status(200).json(simpsons))
      .catch(() => res.status(500).end());
  })
  // 8 - Crie um endpoint POST /simpsons.
  // 8.1 - Este endpoint deve cadastrar novos personagens.
  .post(async function (req, res) {
    // 8.2 - O corpo da requisição deve receber o seguinte JSON: { id: <id-da-personagem>, name: '<nome-da-personagem>' }.
    const { id, name } = req.body;

    readSimpsons()
      .then((simpsons) => {
        // 8.3 - Caso já exista uma personagem com o id informado, devolva o JSON { message: 'id already exists' } com o status 409 - Conflict.
        const alreadyExist = simpsons.find((s) => Number(s.id) === Number(id))
        if (alreadyExist) return res.status(409).json({ message: 'id already exists' });

        // 8.4 - Caso a personagem ainda não exista, adicione-a ao arquivo simpsons.json e devolva um body vazio com o status 204 - No Content. Para encerrar a request sem enviar nenhum dado, você pode utilizar res.status(204).end();.
        newSimpson([...simpsons, { id, name }])
          .then(() => res.status(204).end())
          .catch(() => res.status(500).end());
      })
      .catch(() => res.status(500).end());
  });

// 7 - Crie um endpoint GET /simpsons/:id
app.get('/simpsons/:id', async function (req, res) {
  const { id } = req.params;
  readSimpsons()
    .then((simpsons) => {
      const simpson = simpsons.find((s) => Number(s.id) === Number(id));
      // 7.1 - O endpoint deve retornar o personagem com o id informado na URL da requisição.
      if (simpson) return res.status(200).json(simpson);

      // 7.2 - Caso não exista nenhum personagem com o id especificado, retorne o JSON { message: 'simpson not found' } com o status 404 - Not Found.
      return res.status(404).json({ message: "Simpson não encontrado" });
    })
    .catch(() => res.status(500).end());
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
