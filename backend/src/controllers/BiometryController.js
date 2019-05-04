const Biometry = require('../models/Biometry');

class BiometryController {

    async store (req, res){

        const biometry = await Biometry.create(
            { 
               nurseryNumber: 2, 
               shirimpCount: 40,  
               sampleWeight: 2000,  
               grammage: 3 
            }
        );
        
        return res.json(biometry);

    }

    async show(req, res) {

        const biometry = await Biometry.findById(req.params.id);
        return res.json(biometry);
    }

}

module.exports = new BiometryController();