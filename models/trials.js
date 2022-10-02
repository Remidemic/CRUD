const mongoose = require('mongoose');

const TrialSchema = new mongoose.Schema({
        fname: { type: String, required: true },
        lname: { type: String, required: true },
        how_many: { type: String, possibleValues: ['some', 'enough', 'too_many'], required: true },
        likeTheTask: Boolean,
        code_month: { type: Date, required: true },
        email: { type: String, required: true },


        // only new data types from html 



        // add image for user 

        lookingForNewJob: Boolean
    })
    // ---> the outline for all Users we create/populate in dataset

const Trial = mongoose.model("Trial", TrialSchema)

module.exports = Trial