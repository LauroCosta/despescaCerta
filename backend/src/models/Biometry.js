const mongoose = require('mongoose');
//Criando esquema da minha aplicação
const Biometry = new mongoose.Schema(
    {
        //Passando o tipo do meu "campo" e dizendo que ela é obrigatória
        nurseryNumber: {

            type: Number,
            required: true

        },

        shirimpCount: {

            type: Number,
            required: true
        },

        sampleWeight:{

            type: Number,
            required: true
        },

        grammage: {

            type: Number,
            required: true
        
        }
    },

    {
        //Mostra a data de criação do registro e data de edição registro no meu esquema
        timestamps: true
    }
);

//exporto o modelo para que eu possa fazer minhas requisições utilizando rotas
module.exports = mongoose.model('Biometry', Biometry);