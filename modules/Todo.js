const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
       
    },
    tags: [{
        type: String,
        required: true,
        uniqe: true

    }],
    createdAt: {
        type: Date,
    },
    status: {
        type: String,
        required: true,
        default: 'to-do'

    },
    title: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 20
    },
})


const Todo = mongoose.model('Todo', todoSchema);
Todo.createIndexes({title:1})
module.exports = Todo;
