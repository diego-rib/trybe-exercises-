// Produza três querys para o filme Batman

// Adicione o campo actor , que deve ser um array com o valor Christian Bale , ao array de cast em que o campo character seja igual a Batman
db.movies.updateOne(
  { title: "Batman", "cast.character": "Batman" },
  { $set: { "cast.$.actor": ["Christian Bale"] } }
);

// Adicione o campo actor , que deve ser um array com o valor Michael Caine , ao array de cast em que o campo character seja igual a Alfred
db.movies.updateOne(
  { title: "Batman", "cast.character": "Alfred" },
  { $set: { "cast.$.actor": ["Michael Caine"] } }
);

// Adicione o campo actor , que deve ser um array com o valor Heath Ledger , ao array de cast em que o campo character seja igual a Coringa
db.movies.updateOne(
  { title: "Batman", "cast.character": "Coringa" },
  { $set: { "cast.$.actor": ["Heath Ledger"] } }
);
