const express = require("express");
const app = express();
const phones = require("./phones.json");
const port = 5000;

app.get("/", (req, res) => {
  res.send("iphoness Server Running on this time is Fire at Night");
});

app.get("/phones", (req, res) => {
  res.send(phones);
});

app.get("/phones/:id", (req, res) => {
  const id = parseInt(req.params.id);
  console.log("looking for data for id", id);
  const phone = phones.find((ph) => ph.id === id) || {};
  res.send(phone);
});

app.listen(port, () => {
  console.log(`iphoness server is running on port ${port}`);
});
