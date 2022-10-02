const mongoose = require('mongoose');

const VacationSchema = new mongoose.Schema({
        location: { type: String, required: true },
        country: { type: String, required: true },
        duration: { type: Number, required: true },
        photo: { type: String },

        // add image for user 


        hasBeen: Boolean
    })
    // ---> the outline for all Users we create/populate in dataset

const Vacation = mongoose.model("Vacation", VacationSchema)

module.exports = Vacation