const express = require("express");

const app = require("./app");

// Informa o express que iremos utilizar JSON
app.use(express.json());

app.listen(5432);
