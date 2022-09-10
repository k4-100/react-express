const express = require("express");
const app = express();

const PORT = 5000;
const HOSTNAME = "127.0.0.1";

app.get("/", (req, res) => {
  res.status(200).send("<h1> connected </h1>");
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>an error has occured</h1>");
});

app.listen(PORT, HOSTNAME, () => {
  console.log(`listening at ${HOSTNAME}:${PORT}...`);
});
