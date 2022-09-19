const express = require("express");
const mysql = require("mysql");
const app = express();

const PORT = 5000;
const HOSTNAME = "127.0.0.1";

const dbConnection = mysql.createConnection({
  host: HOSTNAME,
  user: "root",
  password: "1234",
  database: "Products",
});

dbConnection.connect();

dbConnection.query("SELECT * FROM Products.Food AS res", (error, results) => {
  if (error) throw error;

  console.log(results);
});

app.get("/", (req, res) => {
  res.status(200).send("<h1> connected </h1>");
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>an error has occured</h1>");
});

app.listen(PORT, HOSTNAME, () => {
  console.log(`listening at ${HOSTNAME}:${PORT}...`);
});
