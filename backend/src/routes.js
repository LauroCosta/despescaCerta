const express = require("express");

const routes = express.Router();

const NurseryController = require('./controllers/NurseryController');
const BiometryController = require('./controllers/BiometryController');



routes.post("/nurserys", NurseryController.store);
routes.get("/nurserys/:id", NurseryController.show);

routes.post("/biometrys", BiometryController.store);
routes.get("/biometrys/:id", BiometryController.show);
routes.put("/biometrys/:id", BiometryController.update);
routes.delete("/biometrys/:id", BiometryController.destroy);


module.exports = routes;