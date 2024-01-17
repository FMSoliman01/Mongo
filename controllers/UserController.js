const User = require("../modules/User");


const Register = async (_Username, _password ,_firstname ) => {
    try {
        let data = await User.create({ userName: _Username, password: _password, firstName:_firstname });
        if (data) {
            console.log("done")
        }
        else {
            console.log("error");
        }
    }
    catch (e) {
        console.log(e);

    }

}


const Login = async(_Username, _password ,_firstname) => {
    try {
        let data =await User.find({ userName: _Username, password: _password, firstName:_firstname });
        if (data) {
            console.log("ok can enter my dashboard");
        }
    }
    catch (e) {
        console.log(e);
    }


}


const getAllUsers = async() => {

    try {
        let allUsers =await User.find({},{ firstName: 1,_id:0 });
        if (allUsers) {
            console.log(allUsers);
        }
        else {
            console.log("users not found");
        }
    }
    catch (e) {
        console.log(e);
    }

}

const deleteuser = async(_username) => {
    try {
        let delUsers =await User.deleteOne({ userName: _username });
        if (delUsers) {
            console.log(`Deleted ${delUsers.userName}`);
        }
        else {
            console.log(" not Deleted");
        }
    }
    catch (e) {
        console.log(e);
    }

}


const editUser = async(_username,_editvalue) => {
    try {
        let edUsers =await User.updateOne({ userName: _username },{$set:{ userName: _editvalue }});
        if (edUsers) {
            console.log("Edited",edUsers);
        }
        else {
            console.log(" not Edited");
        }
    }
    catch (e) {
        console.log(e);
    }

}

module.exports = { Register, Login,getAllUsers,deleteuser,editUser };