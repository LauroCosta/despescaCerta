const mongoose = require('mongoose');
//Criando esquema da minha aplicação
const Nursery = new mongoose.Schema(
    {
        //Passando o tipo do meu "campo" e dizendo que ela é obrigatória
        title: {
            type: String,
            required: true
        }
    },
    {
        //Mostra a data de criação do registro e data de edição registro no meu esquema
        timestamps: true
    }
);

//exporto o modelo para que eu possa fazer minhas requisições utilizando rotas
module.exports = mongoose.model('Nursery', Nursery);