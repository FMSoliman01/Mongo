const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    userName: {
        type: String,
        required: true,
        uniqe: true

    },
    age: {
        type: Number,
        min: 13
    },
    password: {
        type: String,
        required: true,

    },
    firstName: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 15
    },
})


const User = mongoose.model('User', userSchema);
User.createIndexes({username:1})

module.exports = User;
