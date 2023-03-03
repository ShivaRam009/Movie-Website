
const schemas = require('./schemas.js')

//const jwt = require('jsonwebtoken')
const mongoose = require('mongoose');

mongoose.set("strictQuery", false);

async function addUser(userData){
    const newUser = new User(userData)
    const userExists = await User.findOne({username:newUser.username})
    if(userExists==null){
    newUser.save()
    return "User Added"
    }
    else{
        return "Provide a unique username"
    }
}