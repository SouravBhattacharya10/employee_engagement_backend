import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import MySqlConnection from "./mySqlConnection";
import configData from "./config.json";

const app = express();
app.use(cors());

app.use(bodyParser.json());

let conn = new MySqlConnection(
    configData.serverName,
    configData.databaseName,
    configData.userName,
    configData.password
  );

app.post("/login", (req, res) => {
  //login employee
  conn.login(req, res);
});

app.get("/employees", (req, res) => {
    conn.getAll(req, res);
})

//   app.get("/employees/:id", (req, res) => {
//     //get employee by name
//     conn.getOne(req, res);
//   });

//   app.post("/employees", (req, res) => {
//     // create a new employee
//     // { "name" : "Potato", "price" : 30 }
//     conn.createOne(req, res);
//   });

//   app.put("/employees/:id", (req, res) => {
//     // update the employee with specified name
//     // { "name" : "Potato", "price" : 40 }
//     conn.updateOne(req, res);
//   });

//   app.delete("/employees/:id", (req, res) => {
//     // delete the employee with specified name
//     conn.deleteOne(req, res);
//   });

app.listen(8850, () => console.log("Example app listening on port 8850!"));
