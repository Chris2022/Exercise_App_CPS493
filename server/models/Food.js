const bcrypt = require('bcrypt');
const { ObjectId } = require('bson');
const { client } = require('./mongo');

const collection = client.db(process.env.MONGO_DB).collection('Food');
module.exports.collection = collection;


module.exports.GetAll = function GetAll() { return collection.find().toArray() ; }
module.exports.Add = async function Add(foo) {
    const response = await collection.insertOne(foo);
    foo.id = response.insertedId;

    return { ...foo };
}
module.exports.GetByHandle = (handle) => collection.find({handle}).toArray();