const mongoose = require('mongoose');

const SchoolSchema = new mongoose.Schema({
        schoolname: { type: String, required: true },
        program: { type: String, required: true },
        tuition: { type: Number, required: true },
    })
    // ---> the outline for all Schools we create/populate in dataset

const School = mongoose.model("School", SchoolSchema)

module.exports = School