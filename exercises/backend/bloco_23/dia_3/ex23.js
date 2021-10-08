// Utilizando o operador $text , busque por filmes que contenham a frase "when he is accidentally"

db.movies.find(
  {
    $text: { $search: "\"when he is accidentally\"" }
  },
  {
    _id: 0,
    title: 1,
    description: 1,
  }
);
