// Produza uma query que renomeie os campos de name para hero_name , e de true_name para full_name ; adicione o campo power com valor 100, em todos os documentos

db.xmen.updateMany(
  {},
  {
    $rename: {
      "name": "hero_name",
      "true_name": "full_name"
    },
    $set: { power: 100 },
    $currentDate: {
      "lastUpdated": { $type: "timestamp" }
    }
  }
);
