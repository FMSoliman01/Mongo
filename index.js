const mongoose = require('mongoose');
const User = require('./modules/User');
const Todo = require('./modules/Todo');
const UserConteroller = require("./controllers/UserController");
const TodoConteroller = require("./controllers/TodoController");

mongoose.connect('mongodb://127.0.0.1:27017/ITI').then(() => {
    console.log("connect to db");
}).catch(err => {
    console.log(err);
})

// UserConteroller.Register("_Username3","_password3","_firstname3")
// UserConteroller.Login("_Username","_password","_firstname")
// UserConteroller.getAllUsers()
// UserConteroller.deleteuser("_Username3")
// UserConteroller.editUser("_Username3","_Username33")

 //TodoConteroller.createTodo("_Username","_title",["11","22","33"])
// TodoConteroller.getTodos("65a695971cb1b61ea82118a5")
// TodoConteroller.deleteTodo("65a6a4cc9dcf054142cba696")
 TodoConteroller.editTodo("65a6a44db5bf737a1343b5be","title2")
