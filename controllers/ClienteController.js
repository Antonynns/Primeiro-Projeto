const ClienteModel = require("../models/ClienteModel"); 

class ClienteController{
    static async cadastrar(req, res){
        console.log(req.body)
        if(req.body._id == ''){
            const novoCliente = new ClienteModel({
                    id: req.body.id,
                    nome: req.body.nome,
                    idade: req.body.idade
                });
                await novoCliente.save();
                res.redirect("/cliente?s=1");
        }else{
            const id = req.body.id;
            const clienteUpdate = ({
                // id: req.body.id,
                nome: req.body.nome,
                idade: req.body.idade
            })
            await ClienteModel.findOneAndUpdate({id:id}, clienteUpdate);
            res.redirect("/cliente?s=3");
        }
    }
    static cadastrarGet(req, res){
        const clienteUpdate = {};
        res.render("cliente/cadastrar", {clienteUpdate});
    }
    static async listar(req, res){
        const s = req.query.s;
        const vetorCliente = await ClienteModel.find();
        res.render("cliente/relatorio", {vetorCliente, s});
    }
    static async detalhar(req, res){
        const id = req.params.id;
        const cliente = await ClienteModel.findOne({id:id});
        res.render("cliente/detalhar", {cliente});
    }
    static async deletar(req, res){
        const id = req.params.id;
        const cliente = await ClienteModel.findOneAndDelete({id:id});
        res.redirect("/cliente?s=2");
    }
    static async atualizar(req, res){
        const id = req.params.id;
        const clienteUpdate = await ClienteModel.findOne({id:id});
        // console.log(clienteUpdate);
        // const cliente = await ClienteModel.findOneAndUpdate({id:id} , clienteUpdate);
        res.render("cliente/cadastrar", {clienteUpdate});
    }
    
}

module.exports = ClienteController;