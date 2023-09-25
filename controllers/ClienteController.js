const ClienteModel = require("../models/ClienteModel"); 

class ClienteController{
    static async cadastrar(req, res){
        const novoCliente = new ClienteModel({
                id: req.body.id,
                nome: req.body.nome,
                idade: req.body.idade
            });
            await novoCliente.save();
            res.redirect("/");
    }
    static cadastrarGet(req, res){
        res.render("cliente/cadastrar");
    }
    static async listar(req, res){
        const salvo = req.query.s;
        const vetorCliente = await ClienteModel.find();
        res.render("cliente/relatorio", {vetorCliente, salvo});
    }
    static async detalhar(req, res){
        const id = req.params.id;
        const cliente = await ClienteModel.findOne({id:id});
        res.render("cliente/detalhar", {cliente});
    }
    
}

module.exports = ClienteController;