"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const PORT = 3001 || 3002;

app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log("request incoming");
  next();
});

app.get("/", (req, res) => {
  res.send({ message: "Welcome to the Express Server!" });
});

app.get("/about", (req, res) => {
  res.send({ message: "This is the about page." });
});

app.post("/data", (req, res) => {
  res.json(req.body);
});

app.listen(PORT, () => {
  console.log(`the serving is running on https://localhost:${PORT}`);
});
