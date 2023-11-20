const express = require("express");
const routes = express.Router();

const ClienteController = require("../controllers/ClienteController");
routes.post("/cliente", ClienteController.cadastrar);

routes.get("/cliente/cadastrar", ClienteController.cadastrarGet);

routes.get("/cliente/", ClienteController.listar);

routes.get("/cliente/:id", ClienteController.detalhar);

routes.get("/cliente/deletar/:id", ClienteController.deletar);

routes.get("/cliente/cadastrar/:id", ClienteController.atualizar);

module.exports = routes;