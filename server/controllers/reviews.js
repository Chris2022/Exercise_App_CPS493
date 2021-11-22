const express = require("express");
const model = require("../models/reviews");

const app = express.Router();

app
.get("/reviews", (req, res, next) =>{
    model.GetAll()
    .then(user=>{ 
        res.send(user);
        console.log(user);
    })
    .catch(next) 
})

module.exports = app;