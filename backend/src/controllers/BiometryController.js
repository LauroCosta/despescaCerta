const Biometry = require('../models/Biometry');

//CRUD
class BiometryController {

    //Esta enviando uma respotada
    async index(req, res) {
        const biometrys = await Biometry.find();

        return res.json(biometrys);
    }

    //Criando um registro na minha aplicação
    async store (req, res) {
        const biometry = await Biometry.create(req.body);
        
        return res.json(biometry);
    }

    //Mostrando informações atráves de um id
    async show(req, res) {
        const biometry = await Biometry.findById(req.params.id);
        
        return res.json(biometry);
    }

    //Atualizando meus registros atráves de um id e mostrando no corpo(frontend) da minha aplicação
    async update(req, res) {
        const biometry = await Biometry.findByIdAndUpdate(req.params.id, req.body,{
            new: true
        })

        return res.json(biometry);
    }
    
    //Deletando um registro da minha aplicação
    async destroy(req, res){
        await Biometry.findByIdAndRemove(req.params.id);

        return res.send();
    }
}

//Exporto a classe para retornar suas instancias 
module.exports = new BiometryController();