const Nursery = require('../models/Nursery');
//CRUD
class NurseryController {

    //Esta enviando uma respotada
    async store (req, res){

        const nursery = await Nursery.create({ title: 'teste'});
        return res.json(nursery);

    }

    //Mostrando informações atráves de um id
    async show(req, res) {

        const nursery = await Nursery.findById(req.params.id);
        return res.json(nursery);
    }

}

//Exporto a classe para retornar suas instancias 
module.exports = new NurseryController();