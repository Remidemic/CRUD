const mongoose = require('mongoose');

const CareerSchema = new mongoose.Schema({
        career_title: { type: String, required: true },
        company: { type: String, required: true },
        salary: { type: Number, required: true },
        matchmajor: Boolean
    })
    // ---> the outline for all Careers we create/populate in dataset

const Career = mongoose.model("Career", CareerSchema)

module.exports = Career