const express = require("express");
const model = require("../models/FAQ");

const app = express.Router();

app
.get("/", (req, res, next) =>{
    model.GetAll()
    .then(user=>{ 
        res.send(user);
    })
    .catch(next) 
})

module.exports = app;