const e = require("express");
const UsuarioModel = require("../models/UsuarioModel");
const bcryptjs = require("bcryptjs");
class UsuarioController{
    static async cadastrar(req, res){
        console.log(req.body)
        if(req.body._id == ''){
            const usuario = await UsuarioModel.findOne({email: req.body.email });
            console.log(usuario);
            if(usuario != null){
                console.log("Email já existente!");
                res.redirect(`/usuario/cadastrar?s=4&nome=${req.body.nome}&email=${req.body.email}`);
            }else{
                const salt = bcryptjs.genSaltSync();
                const hash = bcryptjs.hashSync(req.body.senha, salt);
                const novoUsuario = new UsuarioModel({
                    senha: hash,
                    nome: req.body.nome,
                    email: req.body.email
                });
                await novoUsuario.save();
                res.redirect("/usuario?s=1");
            }
        }else{
            const user = await UsuarioModel.findOne({ email: req.body.email });
            const userAtual = await UsuarioModel.findOne({ _id: req.body._id });
            const salt = bcryptjs.genSaltSync();
            const hash = bcryptjs.hashSync(req.body.senha, salt);
            if(user == null || userAtual.email == req.body.email){
                const id = req.body._id;
                const usuarioUpdate = {
                    nome: req.body.nome,
                    email: req.body.email,
                    senha: hash
                }
                await UsuarioModel.findOneAndUpdate({_id:id}, usuarioUpdate);
                res.redirect("/usuario?s=3");
            }else{
                //email existe
                res.redirect(`usuarios/cadastrar?s=3&nome=${req.body.nome}&email=${req.body.email}`);
            }
        }
    }
    static cadastrarGet(req, res){
        const s = req.query.s;
        const usuarioUpdate = {
            nome: req.query.nome,
            email: req.query.email
        };
        if(req.session.usuario==null){
            res.render("usuario/cadastrar", {usuarioUpdate, s});
        }else{
            res.render("/");
        }
    }
    static async checkLogin(req, res){
        const user = await UsuarioModel.findOne({ email: req.body.email });
        if(user != null){
            if(bcryptjs.compareSync(req.body.senha, user.senha)){ //email e senha válidos
                req.session.usuario = user.email;
                res.redirect("/");
            }else{ //senha inválida
                res.redirect(`/usuario/login?s=6&email=${req.body.email}`)
            }
        }else{ //email inválido
            res.redirect(`/usuario/login?s=5&email=${req.body.email}`);
        }
    }
    static loginRender(req, res){
        const status = req.query.s;
        let usuarioLogado = {
            email: req.query.email
        };
        res.render("usuario/login", {usuarioLogado, status});
    }
    static async listar(req, res){
        const s = req.query.s;
        const vetorUsuario = await UsuarioModel.find();
        res.render("usuario/relatorio", {vetorUsuario, s});
    }
    static async detalhar(req, res){
        const id = req.params.id;
        const usuario = await UsuarioModel.findOne({_id:id});
        res.render("usuario/detalhar", {usuario});
    }
    static async deletar(req, res){
        const id = req.params.id;
        const usuario = await UsuarioModel.findOneAndDelete({_id:id});
        res.redirect("/usuario?s=2");
    }
    static async atualizar(req, res){
        const id = req.params.id;
        const usuarioUpdate = await UsuarioModel.findOne({_id:id});
        // console.log(clienteUpdate);
        // const cliente = await ClienteModel.findOneAndUpdate({id:id} , clienteUpdate);
        res.render("usuario/cadastrar", {usuarioUpdate});
    }
    
}

module.exports = UsuarioController;