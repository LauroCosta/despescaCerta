const express = require("express");

//Permitindo que eu possa criar rotas
const routes = express.Router();

const NurseryController = require('./controllers/NurseryController');
const BiometryController = require('./controllers/BiometryController');


//Criação de caminhos de minhas requisições
//Rotas
routes.post("/nurserys", NurseryController.store);
routes.get("/nurserys/:id", NurseryController.show);


routes.post("/biometrys", BiometryController.store);
routes.get("/biometrys", BiometryController.index);
routes.get("/biometrys/:id", BiometryController.show);
routes.put("/biometrys/:id", BiometryController.update);
routes.delete("/biometrys/:id", BiometryController.destroy);

//Exportando minhas rotas para que possam sem chamdas pelo server
module.exports = routes;