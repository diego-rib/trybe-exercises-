// Crie um array de documentos chamado cast para o filme Home Alone com os dados indicados

const array = [
  { "actor": "Macaulay Culkin", "character": "Kevin" },
  { "actor": "Joe Pesci", "character": "Harry" },
  { "actor": "Daniel Stern" }
];

db.movies.updateOne(
  { title: "Home Alone" },
  { $set: { cast: array } }
);
