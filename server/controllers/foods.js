const express = require("express");
const model = require("../models/foods");

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