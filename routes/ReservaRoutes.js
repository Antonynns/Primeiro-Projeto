const express = require("express");
const routes = express.Router();

const ReservaController = require("../controllers/ReservaController");

routes.post("/reserva", ReservaController.cadastrar);

routes.get("/reserva/nova_reserva", ReservaController.cadastrarGet);

routes.get("/reserva/cadastrar/:id", ReservaController.atualizar);

routes.get("/reserva/deletar/:id", ReservaController.deletar);

routes.get("/reserva/", ReservaController.listar);

routes.get("/reserva/:id", ReservaController.detalhar);

module.exports = routes;