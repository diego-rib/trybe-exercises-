// Altere budget para 1 no filme Godzilla

db.movies.updateOne(
  { title: "Godzilla" },
  { $set: { budget: 1 } }
);
