const express = require("express");

const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

const session = require("express-session");
app.use(session({
    secret: 'ifpe',
    saveUninitialized: false,
    resave: false
    }));
const ClienteRoutes = require("./routes/ClienteRoutes");
app.use(ClienteRoutes);

const UsuarioRoutes = require("./routes/UsuarioRoutes");
app.use(UsuarioRoutes);

const ReservaRoutes = require("./routes/ReservaRoutes");
app.use(ReservaRoutes);

require("dotenv/config");
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI);
const ClienteModel = require("./models/ClienteModel");

// senha banco de dados: kPmc5VXZ1gwwPcHJ
// mongodb+srv://ansf:kPmc5VXZ1gwwPcHJ@cluster0.toxaigc.mongodb.net/?retryWrites=true&w=majority


app.get("/", function(req, res){
    // if(!req.isAuthenticated()){
    //     res.redirect("login");
    // }
    res.render("index");
});
app.get("/logout", function(req, res){
    req.session.usuario = null;
    res.redirect("/usuario/login")
})
app.get("/login", function(req, res){
    res.render("login");
});

app.post("/cliente", function(req, res){
    
});

app.get("/cliente/cadastrar", function(req, res){
    
});

// app.post("/cliente", async function(req, res){
    // const novoCliente = new ClienteModel({
    //     id: req.body.id,
    //     nome: req.body.nome,
    //     idade: req.body.idade
    // });
    // await novoCliente.save();
    // res.redirect("/");
// });

app.get("/cliente/:id?", function(req, res){

});
app.use(function(req, res){
    res.status(404).render("erro");
});


app.listen(process.env.PORT, function(){
    console.log("AAAAA^AAA");
});