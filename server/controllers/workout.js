const express = require("express");
const model = require("../models/workout");

const app = express.Router();

app
.get("/", (req, res, next) =>{
    model.GetAll()
    .then(user=>{ 
        res.send(user);
        console.log(user);
    })
    .catch(next) 
})
.get("/reports/:handle", (req, res, next) =>{
    model   .GetFeed(req.params.handle)
            .then( x=> res.send(x))
            .catch(next)    
})
.post("/", (req, res, next) =>{
    model   .Add(req.body)
            .then( x=> res.status(201).send(x) )
            .catch(next)
})
.get("/byhandle/:handle", (req, res, next) =>{
    model.GetByHandle(req.params.handle)
        .then(user=>{ 
            res.send(user);
        })
        .catch(next) 
})

module.exports = app;