var express=require('express')
var http=require('http')
var app=express()

app.get("/movie",(req,res)=>{
    const response=fetch("https://www.omdbapi.com/?t=batman&apikey=20284f8e")
    var data=response.json()
    res.send(data)
})
app.listen("8080",()=>{
    console.log("server connected")
})
