const schemas = require('./schemas.js')
const queries = require('./queries.js')
const https=require('https')


const express = require('express')
const mongoose = require('mongoose')
const port=9000
const app = express()
app.use(express.json())

mongoose.connect('mongodb+srv://poirot22:moviepro@moviesdb.6iptvma.mongodb.net/moviesite').then(()=>{
    console.log('connected to database')
}).catch((err)=>{console.log(err)})


app.post("/addUser",(req,res)=>{
    userData=req.body 

    queries.addUser(userData).then(response=>{
        res.send(response)
    }).catch(err=>{
        res.send(err)
    })
})

app.get("/Movie",(req,res)=>{
    const url="https://www.omdbapi.com/?t=batman&apikey=20284f8e"
    https.get(url,function(response){
        response.on("data",(data)=>{
            const Moviedata=JSON.parse(data)
            //Moviedata=JSON.stringify(Moviedata)
            console.log(Moviedata)
            res.write(Moviedata);
            res.send();
        })
    })
    /*fetch(url).then(res=>{
        if(res.ok){
            console.log("sucess")
        }
        else{
            console.log("failure")
        }
    })*/

    /*fetch(url)
	.then(res => res.json())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err));*/
})

app.get("/",(req,res)=>{
console.log("started");
res.send("hello ")
})


app.listen(port,()=>{
    console.log('listening at port '+port)
})


//?t="movietitle"

//www.omdbapi.com/?apikey=[yourkey]&

// http://www.omdbapi.com/?t=&apikey=20284f8e