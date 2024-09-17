const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const app = express();
const port = 3000;

app.use(express.json());

app.post("/todo", async function(req, res) {
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if (!parsePayload.success) {
        res.status(411).json({

            message: "you have sent wrong input"
        })
        return;
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        message: "Todo is created"
    })

})
app.get("/todos", async function(req, res) {
    const todos = await todo.find({});
    res.json({
        todos
    });

})
app.put("/todo", async function(req, res) {
    const updatePaylaod = req.body;
    const parsePayload = updateTodo.safeParse(updatePaylaod);
    if (!parsePayload.success) {
        res.status(411).json({

            message: "you have sent wrong input"
        })
        return;
    }
    await todo.update({
        _id: req.body._id
    }, {
        completed: true
    })
    res.json({
        message: "Todo is updated"
    })
})

app.listen(port);