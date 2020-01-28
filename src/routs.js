const { Router } = require("express");
const DevController = require("./controllers/devControllers");

const routes = Router();

routes.post("/devs", DevController.store);

module.exports = routes;
