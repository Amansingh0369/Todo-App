const mongoose = require("mongoose");
const { boolean } = require("zod");
mongoose.connect("mongodb+srv://singh0369aman:Amansingh0369@aman.6sexufp.mongodb.net/Todo-App")

const todoSchema = mongoose.Schema({
    title: string,
    description: string,
    completed: boolean
})

const todo = mongoose.model("todos", todoSchema);
module.export = {
    todo
}