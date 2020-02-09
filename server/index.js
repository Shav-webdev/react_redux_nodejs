const express = require("express");
const mongoose = require('./mongoose/mongoose');
const homeRoute = require("./routes/home");
const toDoRouter = require("./api/todos/index");
let toDos = require('./api/todos/todos');
let bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const PORT = 3001;
const app = express();


require('./models/ToDo.model');

const ToDo = mongoose.model("ToDos");

const todo1 = new ToDo({
    title: "to do something",
    id: 145,
});

// todo1.save().then(todo => console.log(todo)).catch(e => console.log(e))

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/src"));
app.use(express.static(__dirname + "/server/api"));
// app.use(express.static(__dirname + "/server/ToDo"));

app.use("/", homeRoute);
app.use("/api/todos", toDoRouter);


app.delete("/api/todos/:id", function (req, res) {
    let id = parseInt(req.params.id, 10);
    toDos = toDos.filter(el => el.id !== id);

    ToDo
        .find({id: id})
        .then(data => {
            ToDo
                .find(data)
                .remove()
                .then(_ => "Removed successfully !!!")
                .catch(e => console.log(e))
            console.log(data);

            res.json(ToDo.find({}));
        })
        .catch(e => console.log(e))
});

app.put('/api/todos/:id', jsonParser, function (req, res) {
    let id = parseInt(req.body.id, 10);
    let title = req.body.title.toString();
    console.log(toDos);
    toDos = toDos.map(toDo => {
        if (toDo.id === id) {
            toDo.title = title;
        }
        return toDo;
    });
    console.log(toDos);
    res.json({id: id, title: title});
    console.log("put body", req.body.title)
});


app.listen(PORT, (err) => {
    if (err) {
        console.log(err.message)
    }
    console.log("Server is running...");
});
