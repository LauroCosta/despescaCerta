const Nursery = require('../models/Nursery');

class NurseryController {

    async store (req, res){

        const nursery = await Nursery.create({ title: 'teste'});
        return res.json(nursery);

    }

    async show(req, res) {

        const nursery = await Nursery.findById(req.params.id);
        return res.json(nursery);
    }

}

module.exports = new NurseryController();