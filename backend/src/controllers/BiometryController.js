const Biometry = require('../models/Biometry');

class BiometryController {

    async store (req, res){
        const biometry = await Biometry.create(req.body);
        
        return res.json(biometry);
    },

    async show(req, res) {
        const biometry = await Biometry.findById(req.params.id);
        
        return res.json(biometry);
    },

    async update(req, res) {
        const biometry = await Biometry.findByIdAndUpdate(req.params.id, req.body,{
            new: true
        })

        return res.json(biometry);
    },

    
    async destroy(req, res){

        await Biometry.findByIdAndRemove(req.params.id);

        return res.send();
    }



}

module.exports = new BiometryController();