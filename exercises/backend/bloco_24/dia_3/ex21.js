// Utilizando o operador $text , busque por filmes que contenham o termo "vacation"

db.movies.find(
  {
    $text: { $search: "vacation" }
  },
  {
    _id: 0,
    title: 1,
    description: 1,
  }
);
