const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const reservaSchema = Schema({
    id: Number,
    titulo: String,
    prazo: Number
});

module.exports = mongoose.model("Reserva", reservaSchema);