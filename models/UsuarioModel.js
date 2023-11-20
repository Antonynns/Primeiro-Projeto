const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const usuarioSchema = Schema({
    // id: Number,
    senha: String,
    nome: String,
    email: String
});

module.exports = mongoose.model("usuario", usuarioSchema);