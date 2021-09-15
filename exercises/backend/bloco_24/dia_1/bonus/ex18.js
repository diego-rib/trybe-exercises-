// Decremente em 100 o poder dos mutantes que não possuem a propriedade class

db.xmen.updateMany(
  { class: { $exists: false } },
  {
    $inc: { power: -100 },
    $currentDate: {
      "lastUpdated": { $type: "timestamp" }
    }
  }
);
