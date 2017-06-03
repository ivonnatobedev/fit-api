//var express = require("express");
//var app = express();
import express from "express";
import { initDb, User } from "./model/database";

const app = express();
initDb();


app.get('/', (req, res) => {
  User.findAll()
      .then(result => {
        res.send(result);
      });
});

app.listen(3001, () => {
  console.log("app start");
});