const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
        task: { type: String, required: true },
        todo: { type: String, required: true },
        // comments: [{ body: String, date: Date }],
        // date: { type: Date, default: Date.now },
        // // make a calendar for when the entry is due 
        // complete: { Boolean },
    })
    // ---> the outline for all Todos we create/populate in dataset

const Todo = mongoose.model("todo", TodoSchema)

module.exports = Todo