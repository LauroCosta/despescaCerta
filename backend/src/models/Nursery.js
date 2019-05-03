const mongoose = require('mongoose');

const Nursery = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Nursery', Nursery);