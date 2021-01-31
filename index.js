"use strict";

const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;

app.get(`/`, (req, res) => {
  res.end(`<h1>Welcome to App!</h1>`);
});
app.get(`/about`, (req, res) => {
  res.end(`<h1>About to App!</h1>`);
});
app.listen(PORT, () => {
  console.log(`Successful`);
});