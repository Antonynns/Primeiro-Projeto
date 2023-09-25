const express = require("express");

const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

const ClienteRoutes = require("./routes/ClienteRoutes");
app.use(ClienteRoutes);

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://ansf:kPmc5VXZ1gwwPcHJ@cluster0.toxaigc.mongodb.net/?retryWrites=true&w=majority");
const ClienteModel = require("./models/ClienteModel");

// senha banco de dados: kPmc5VXZ1gwwPcHJ
// mongodb+srv://ansf:kPmc5VXZ1gwwPcHJ@cluster0.toxaigc.mongodb.net/?retryWrites=true&w=majority


app.get("/", function(req, res){
    res.render("index");
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
    
    if(id != undefined){
        
    }else{
        
    }
    
});


app.listen("8888", function(){
    console.log("AAAAA^AAA");
});