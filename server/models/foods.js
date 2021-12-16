const bcrypt = require('bcrypt');
const { ObjectId } = require('bson');
const { client } = require('./mongo');

const collection = client.db(process.env.MONGO_DB).collection('foods');
module.exports.collection = collection;

//Display all of the reviews from the daterbase
module.exports.GetAll = function GetAll() { 
    return collection.find().toArray() ; }

module.exports.GetFood = () => collection.find({}, {"Food" : 1}).toArray();