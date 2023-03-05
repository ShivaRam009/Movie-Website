
const schemas = require('./schemas.js')
const queries = require('./queries.js')
const fetch = require("node-fetch");


const express = require('express')
const mongoose = require('mongoose')
const { response } = require('express');
const { json } = require('body-parser');
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
        res.send(response)
    }).catch(err=>{
        res.send(err)
    })
})

app.get("/getUser/:username",(req,res)=>{
    username=req.params.username
    queries.getUser(username).then(response=>{
        if(response=="User Not Found"){
            res.send({"message":response})
        }
        else{
            res.send(response)
        }
    })
})

app.get("/getMovieByFullName/:movieName",(req,res)=>{
    movieName=req.params.movieName
    queries.getMovieByFullName(movieName).then(response=>{
        if(response=="Can't find movie"){
             res.send({"message":response})
        }
        else{
            res.send(response)
        }
    })
})

app.get("/addMovie/:imdbID",(req,res)=>{
    imdbID=req.params.imdbID
    queries.addMovie(imdbID).then(response=>{
        res.send(response)
    })
})



//delete methods
app.delete("/deleteUser/:username",(req,res)=>{
    username=req.params.username
    queries.deleteUser(username).then(response=>{
        res.send({"message":response})
    })
})

app.get("/getMovieById/:id",(req,res)=>{
    ids=req.params.id
    console.log(ids)
    queries.getMoviebyId(ids).then(response=>{
        if(response=="Movie Not Found"){
            res.send({"message":response})
        }
        else{
            res.send(response)
        }
    })
})

app.post("/addReview/:userId/:movieId",(req,res)=>{
    userId=req.params.userId
    movieId=req.params.movieId
    review=req.body["review"]
    queries.addReview(userId,movieId,review).then(response=>{
        if(response=="User not found" || response=="Movie not found"){
            res.send({"message":response})
        }
        res.send(response)
    })
})

app.post("/likes/:movieid/:username",(req,res)=>{
    id=req.params.movieid
    username=req.params.username
    queries.likes(id,username).then(response=>{
        if(response=="no movie found"|| response=="no user found"){
            res.send({"message":response})
        }
        res.send(response)
    })
})

app.post("/watchlist/:movieid/:username",(req,res)=>{
    id=req.params.movieid
    username=req.params.username
    queries.watchList(id,username).then(response=>{
        if(response=="no movie found"|| response=="no user found"){
            res.send({"message":response})
        }
        res.send(response)
    })
})


app.put("/unFollowUser/:username1/:username2",(req,res)=>{
    user1=req.params.username1
    user2=req.params.username2
    queries.unfollowuser(user1,user2).then(response=>{
        if(response=="user not found"||response=="user does not exist in followers list"){
            res.send({"message":response})
        }
        res.send(response)
    })
})
app.listen(port,()=>{
    console.log('listening at port '+port)
})