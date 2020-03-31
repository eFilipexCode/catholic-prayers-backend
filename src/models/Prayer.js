const mongoose = require('mongoose');

const oracoes = new mongoose.Schema({
    title: String,
    content: String,
    creator: String
});

const oracao = mongoose.model('Prayers', oracoes);

module.exports = oracao;