// imports
const express = require("express");
const OngController = require("./controllers/OngController");
const IncidentsController = require("./controllers/IncidentController.");

// Routes
const routes = express.Router();

routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.create);

routes.post("/incidents", IncidentsController.create);
routes.get("/incidents", IncidentsController.index);
module.exports = routes;
