
const schemas = require('./schemas.js')

//const jwt = require('jsonwebtoken')
const mongoose = require('mongoose');

mongoose.set("strictQuery", false);

const User = mongoose.model("User",schemas.user)

async function addUser(userData){
    
    const newUser = new User(userData)
    const userExists = await User.findOne({username:newUser.username})
    if(userExists==null){
        newUser.displayName = newUser.firstName+" "+newUser.lastName
        if(newUser.dob!=undefined){
            birth_year=Number(newUser.dob.toISOString().substring(0, 4));
            var today = new Date();
            this_year=Number(today.toISOString().substring(0, 4));
            newUser.age=this_year-birth_year
        }
        newUser.save()
        return "User Added"
    }
    else{
        return "Provide a unique username"
    }
    
}
async function deleteuserdata(userData){
    const newUser = new User(userData)
    const userExists = await User.findOne({username:newUser.username})
    if(userExists==null){
        return "user not found"
    }
    else{
        await User.deleteOne({username:deleteuser.username})
        return "User deleted"
    }
        
} 
module.exports.deleteuserdata=deleteuserdata
module.exports.addUser = addUser