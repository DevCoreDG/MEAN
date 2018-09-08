var mongoose = require("mongoose");
mongoose.set('debug',true);
mongoose.connect("mongodb://localhost/todo");

mongoose.Promise = Promise;
//tell mongoose we use promises

module.exports.Todo = require("./todo.js");


// when requireing models it always grabs the index.js as initial file

