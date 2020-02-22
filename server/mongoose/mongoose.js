const mongoose = require('mongoose');
const uri = "mongodb+srv://user_1:OVcW6ZOCI9JBTxbR@cluster0-ecojk.mongodb.net/todos?retryWrites=true&w=majority";

mongoose.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(() => console.log("Mongo db started ..."))
    .catch(e => console.log(e));

module.exports = mongoose;