const ReservaModel = require("../models/ReservaModel");

class ReservaController{
    static async cadastrar(req, res){
        if(req.body._id == ''){ //cadastrar
            const reservaUpdate = '';
            const novaReserva = new ReservaModel ({
                id: req.body.id,
                titulo: req.body.titulo,
                prazo: req.body.prazo
            })
            await novaReserva.save();
            res.redirect("/reserva?s=1");
        }else{ //atualizar
            const id = req.body.id;
            const reservaUpdate = {
                titulo: req.body.titulo,
                prazo: req.body.prazo
            }
            await ReservaModel.findOneAndUpdate({id:id}, reservaUpdate);
            res.redirect("/reserva?s=3");
        }
    }
    static cadastrarGet(req, res){
        const s = req.query.s;
        const reservaUpdate = {
            titulo: req.query.titulo,
            prazo: req.query.prazo
        };
        if(req.session.usuario==null){
            res.render("reserva/cadastrar", {reservaUpdate, s});
        }else{
            res.render("/");
        }
    }
    static async listar(req, res){
        const s = req.query.s;
        const vetorReserva = await ReservaModel.find();
        res.render("reserva/relatorio", {vetorReserva, s});
    }
    static async detalhar(req, res){
        const id = req.params.id;
        const reserva = await ReservaModel.findOne({id:id});
        res.render("reserva/detalhar", {reserva});
    }
    static async deletar(req, res){
        const id = req.params.id;
        await ReservaModel.findOneAndDelete({id:id});
        res.redirect("/reserva?s=2");
    }
    static async atualizar(req, res){
        const id = req.params.id;
        const reservaUpdate = await ReservaModel.findOne({id:id});
        res.render("reserva/cadastrar", {reservaUpdate});
    }
    
}
module.exports = ReservaController;