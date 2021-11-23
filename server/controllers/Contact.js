const express = require("express");
const model = require("../models/Contact");

const app = express.Router();

app
.post("/", (req, res, next) =>{
    model   .Add(req.body)
            .then( x=> res.status(201).send(x) )
            .catch(next)
})
module.exports = app;