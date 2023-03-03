const schemas = require('./schemas.js')
const express = require('express')
const mongoose = require('mongoose')
const port=8000
const app = express()
app.use(express.json())

mongoose.connect('mongodb+srv://poirot22:moviepro@moviesdb.6iptvma.mongodb.net/moviesite').then(()=>{
    console.log('connected to database')
}).catch((err)=>{console.log(err)})

app.listen(port,()=>{
    console.log('listening at port '+port)
})