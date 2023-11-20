const express = require("express");
const routes = express.Router();
const auth = require("../middleware/usuarioAuth");

const UsuarioController = require("../controllers/UsuarioController");
routes.post("/usuario", UsuarioController.cadastrar);

routes.get("/usuario/cadastrar", UsuarioController.cadastrarGet);

routes.get("/usuario/login", UsuarioController.loginRender);

routes.post("/usuario/login", UsuarioController.checkLogin);

routes.get("/usuario/", auth, UsuarioController.listar);

routes.get("/usuario/:id", auth, UsuarioController.detalhar);

routes.get("/usuario/deletar/:id", UsuarioController.deletar);

routes.get("/usuario/cadastrar/:id", auth, UsuarioController.atualizar);

module.exports = routes;