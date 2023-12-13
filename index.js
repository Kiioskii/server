const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

// Middleware do obsługi danych w formacie JSON
app.use(bodyParser.json());

// Obsługa żądań POST na endpointcie "/"
app.post("/", (req, res) => {
  // Pobranie danych z ciała żądania
  const receivedData = req.body;

  console.log("Odebrano dane:", receivedData);

  // Wysłanie odpowiedzi do klienta
  res.status(200).send("Dane odebrane przez serwer Node.js");
});

// Uruchomienie serwera na określonym porcie
app.listen(port, () => {
  console.log(`Serwer nasłuchuje na http://localhost:${port}`);
});
