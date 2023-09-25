const Cliente = require("../Cliente");

const vetorCliente = [];

class ClienteController{
    static cadastrar(req, res){
        const cliente = req.body;
        vetorCliente.push(new Cliente(cliente.id, cliente.nome, cliente.idade));
        res.redirect("/cliente?s=1"); 
    }
    static cadastrarGet(req, res){
        res.render("cliente/cadastrar");
    }
    static listar(req, res){
        res.render("cliente/relatorio", {vetorCliente}); 
    }
    static detalhar(req, res){
        const id = req.params.id;
        let encontrou = false;
        for (const c of vetorCliente) {
            if(id ==  c.id){
                encontrou = true;
                res.render("cliente/detalhar", {c});
                break;
            }
        }
        if(encontrou == false){
            res.send("Nao encontrado");
        }
    }
}

module.exports = ClienteController;