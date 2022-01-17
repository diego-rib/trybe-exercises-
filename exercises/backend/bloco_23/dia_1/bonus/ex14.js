// Remova o campo class dos documentos que possuem esse campo com o valor unknown

db.xmen.updateMany(
  { class: "unknown" },
  {
    $unset: { class: "" },
    $currentDate: {
      "lastUpdated": { $type: "timestamp" }
    }
  }
);
