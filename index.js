
const schemas = require('./schemas.js')
const queries = require('./queries.js')

const express = require('express')
const mongoose = require('mongoose')
const { response } = require('express')
const port=9000
const app = express()
app.use(express.json())

mongoose.connect('mongodb+srv://poirot22:moviepro@moviesdb.6iptvma.mongodb.net/moviesite').then(()=>{
    console.log('connected to database')
}).catch((err)=>{console.log(err)})


app.post("/addUser",(req,res)=>{
    userData=req.body 

    queries.addUser(userData).then(response=>{
        res.send("user added")
    }).catch(err=>{
        res.send(err)
    })
})

app.get("/getMovie",(req,res)=>{
    url="https://www.omdbapi.com/?t=batman&apikey=20284f8e"

    fetch(url)
	.then(res => res.json())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err));
})

//delete methods
app.delete("/deleteUser/:username",(req,res)=>{
    username=req.params.username
    queries.deleteUser(username).then(response=>{
        res.send({"message":response})
    })
})


app.listen(port,()=>{
    console.log('listening at port '+port)
})