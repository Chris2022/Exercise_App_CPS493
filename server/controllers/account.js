const express = require("express");
const model = require("../models/account");

const app = express.Router();

app
.get("/:user_id", (req, res, next) =>{
    model.Get(req.params.user_id)
       .then(user=>{ 
           res.send(user);
           console.log(user);
       })
       .catch(next) 
})

module.exports = app;