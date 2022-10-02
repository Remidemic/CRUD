const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
        username: { type: String, required: true },
        password: { type: String, required: true },
        desiredrole: { type: String, required: true },
        photo: { type: String },


        // only new data types from html 



        // add image for user 

        lookingForNewJob: Boolean
    })
    // ---> the outline for all Users we create/populate in dataset

const User = mongoose.model("User", UserSchema)

module.exports = User