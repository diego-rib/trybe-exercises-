// Crie um array de documentos chamado cast para o filme Batman com os seguintes dados

const batmanCast = [
  { "character": "Batman" },
  { "character": "Alfred" },
  { "character": "Coringa" }
];

db.movies.updateOne(
  { title: "Batman" },
  { $set: { cast: batmanCast } }
);
