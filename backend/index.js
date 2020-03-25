const express = require("express");

const server = express();

server.get("/", (req, res) => {
  return res.json({
    id: "1",
    name: "Jeremias"
  });
});

server.listen(8080);
