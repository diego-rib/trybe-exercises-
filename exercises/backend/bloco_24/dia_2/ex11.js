// Crie um array de documentos chamado cast para o filme Batman com os seguintes dados

db.movies.updateOne(
  { title: "Batman", "cast.character": "Batman" },
  { $set: { "cast.$.actor": ["Christian Bale"] } }
);

db.movies.updateOne(
  { title: "Batman", "cast.character": "Alfred" },
  { $set: { "cast.$.actor": ["Michael Caine"] } }
);

db.movies.updateOne(
  { title: "Batman", "cast.character": "Coringa" },
  { $set: { "cast.$.actor": ["Heath Ledger"] } }
);
