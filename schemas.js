const mongoose = require('mongoose')

const user = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    displayName:{
        type:String,
        default:this.firstName+" "+this.lastName
    },
    age:Number,
    bio:String,
    following:{
        type:Array,
        default:[this.username]
    },
    followers:{
        type:Array,
        default:[]
    },
    likes:{
        type:Array,
        default:[]
    },
    dob:Date,
    createdOn:{
        type:Date,
        default:Date.now
    },
    username:{
        type:String,
        required:true
    },
    ratings:{
        type:Array,
        default:[]
    },
    reviews:{
        type:Array,
        default:[]
    },
    watchlist:{
        type:Array,
        default:[]
    },
    comments:{
        type:Array,
        default:[]
    },
    profilepic:String
})

// const movie = new mongoose.Schema({
//     name:{
//         type:String,
//         required:True
//     },
//     release:{
//         type:Date,
//         required:True
//     },
//     description:{
//         type:String,
//         required:True
//     },
//     genres:{
//         type:Array
//     },
//     avgRating:{
//         type:Number
//     },
//     ratings:{
//         type:Array
//     },
//     poster:String,
//     likers:Array,
//     reviews:Array,
//     cast:Array,
//     crew:Array

// })

module.exports = mongoose.model('User', user);