const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
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

// dbConnection.query("SELECT * FROM Products.Food AS res", (error, results) => {
//   if (error) throw error;

//   console.log(results);
// });

app.use(cors());

app.get("/food/:id", async (req, res) => {
  const id = Number(req.params.id);
  let msg = {
    success: false,
    data: null,
  };

  if (isNaN(id)) {
    msg.data = "id is NaN";
    return res.status(404).json(msg);
  }
  const p = new Promise((resolve, reject) => {
    dbConnection.query(
      `SELECT * FROM Products.Food WHERE foodID=${id}`,
      (error, results) => {
        if (error) msg.data = "failed to fetch data";
        else
          msg = {
            success: true,
            data: results[0],
          };

        resolve(msg);
      }
    );
  })
    .then((dt) => res.status(200).json(dt))
    .catch((err) => {
      msg.data = "failed because of an error in promise";
      return res.status(404).json(msg);
    });

  return await p;
});

app.get("/food", async (req, res) => {
  let msg = {
    success: false,
    data: null,
  };

  const p = new Promise((resolve, reject) => {
    dbConnection.query(`SELECT * FROM Products.Food`, (error, results) => {
      if (error) msg.data = "failed to fetch data";
      else
        msg = {
          success: true,
          data: results,
        };

      resolve(msg);
    });
  })
    .then((dt) => res.status(200).json(dt))
    .catch((err) => {
      msg.data = "failed because of an error in promise";
      return res.status(404).json(msg);
    });

  return await p;
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
