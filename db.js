const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://singh0369aman:Amansingh0369@aman.6sexufp.mongodb.net/Todo-App")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: {
        type: Boolean,
        default: false
    }
})

const todo = mongoose.model("todos", todoSchema);

module.exports = {
    todo
}