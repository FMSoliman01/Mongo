const Todo = require('../modules/Todo');
const User=require('../modules/User')

const createTodo = async(_username, _title, _tags) => {
    try {
        let userid = await User.findOne({userName:_username},{_id:1});
        let data =await Todo.create({
            userId:userid,
            title: _title,
            tags: _tags,
           
        })
        if (data) {
            console.log("ok");
        }
    }
    catch (e) {
    }
}




const getTodos = async(_userId) => {

    try {
        let todos =await Todo.find({ userId: _userId });
        if (todos) {
            console.log(todos);
        }
        else {
            console.log("Todo do not found");
        }
    }
    catch (e) {
        console.log(e);
    }

}

const deleteTodo = async(_id) => {
    try {
        let delUsers =await Todo.deleteOne({ _id: _id });
        if (delUsers) {
            console.log("Deleted");
        }
        else {
            console.log(" not Deleted");
        }
    }
    catch (e) {
        console.log(e);
    }

}


const editTodo = async(id,_editdata) => {
    try {
        let edUsers =await Todo.updateOne({_id:id},{ title: _editdata });
        if (edUsers) {
            console.log("Edited");
        }
        else {
            console.log(" not Edited");
        }
    }
    catch (e) {
        console.log(e);
    }

}


module.exports = { createTodo, getTodos,deleteTodo,editTodo };