const express = require("express");
const model = require("../models/edit");

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
.patch("/:user_id", (req, res, next) =>{

    model   .Update(req.params.user_id, req.body)
            .then( user=> res.send(user) )
            .catch(next) 

})

module.exports = app;