const bcrypt = require('bcrypt');
const { ObjectId } = require('bson');
const { client } = require('./mongo');

const collection = client.db(process.env.MONGO_DB).collection('Users');
module.exports.collection = collection;

//Display all of the reviews from the daterbase
module.exports.Get = user_id => collection.findOne({_id: new ObjectId(user_id)}) 