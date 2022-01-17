// Utilizando o operador $text , busque por filmes que contenham os termos "monstrous" ou "criminal"

db.movies.find(
  {
    $text: { $search: "monstrous criminal" }
  },
  {
    _id: 0,
    title: 1,
    description: 1,
  }
);
