const mongoose = require('mongoose');

const Biometry = new mongoose.Schema(
    {

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
        timestamps: true
    }
);

module.exports = mongoose.model('Biometry', Biometry);