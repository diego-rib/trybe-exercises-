// Adicione a categoria "superhero" ao filme Batman

db.movies.updateOne(
  { title: "Batman" },
  { $push: { category: "superhero" } }
);
