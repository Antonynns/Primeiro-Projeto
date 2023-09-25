const express = require("express");
const routes = express.Router();

const ClienteController = require("../controllers/ClienteController");
routes.post("/cliente", ClienteController.cadastrar);

routes.get("/cliente/cadastrar", ClienteController.cadastrarGet);

routes.get("/cliente/", ClienteController.listar);

routes.get("/cliente/:id", ClienteController.detalhar);

module.exports = routes;