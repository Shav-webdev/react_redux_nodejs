const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ToDoSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
});

mongoose.model("ToDos", ToDoSchema);
module.exports = ToDoSchema;