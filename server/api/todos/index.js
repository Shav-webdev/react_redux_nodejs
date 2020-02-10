const {Router} = require("express");
const router = Router();
let bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const mongoose = require('../../mongoose/mongoose');
require('../../models/ToDo.model');

const ToDo = mongoose.model("ToDos");

router.get("/", (req, res) => {
    ToDo
        .find({})
        .then(data => {
            res.json(data);
        })
        .catch(e => console.log(e))
});

router.post('/', jsonParser, function (req, res) {
    console.log(req.body);
    if (req.body.toDo.toString().length) {
        const todo = new ToDo({
            title: req.body.toDo,
        });
        todo.save()
            .then(todo => {
                ToDo
                    .find({})
                    .then(data => {
                        res.send(`200`, {title: `data successfully created`, toDos: data});
                    })
                    .catch(e => console.log(e))
            })
            .catch(e => {
                console.log(e)
                res.send(`400`, {data: `Oops, something has gone wrong `});
            });
    } else {
        res.end(`<a href="/">Go back <a/>`)
    }
});

module.exports = router;