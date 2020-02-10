const express = require("express");
const homeRoute = require("./routes/home");
const toDoRouter = require("./api/todos/index");
const mongoose = require('./mongoose/mongoose');
require('./models/ToDo.model');
let bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const ToDo = mongoose.model("ToDos");

const PORT = 3001;
const app = express();

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/src"));
app.use(express.static(__dirname + "/server/api"));

app.use("/", homeRoute);
app.use("/api/todos", toDoRouter);

app.delete("/api/todos/:id", (req, res) => {
    let id = req.params.id;
    ToDo.deleteOne({_id: `${id}`}, function (err) {
        if (err) console.log(err);
        ToDo
            .find({})
            .then(data => data)
            .then(data => res.json(data))
            .catch(e => console.log(e))
    });
});

app.put('/api/todos/:id', jsonParser, function (req, res) {
    let id = req.params.id;
    let title = req.body.title.toString();

    ToDo.updateOne({_id: `${id}`}, {$set: {"title": `${title}`}}, function (err) {
        if (err) console.log(err);
        ToDo
            .find({})
            .then(data => data)
            .then(data => res.json(data))
            .catch(e => console.log(e))
    });

});


app.listen(PORT, (err) => {
    if (err) {
        console.log(err.message)
    }
    console.log("Server is running...");
});
