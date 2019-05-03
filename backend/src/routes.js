const express = require("express");

const routes = express.Router();

const NurseryController = require('./controllers/NurseryController');

routes.post("/nurserys", NurseryController.store);


module.exports = routes;