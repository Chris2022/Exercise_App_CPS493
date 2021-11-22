const bcrypt = require('bcrypt');
const { ObjectId } = require('bson');
const { client } = require('./mongo');

const collection = client.db(process.env.MONGO_DB).collection('Reviews');
module.exports.collection = collection;

//Display all of the reviews from the daterbase
module.exports.GetAll = function GetAll() { return collection.find().toArray() ; }
//add a review
module.exports.Add = async function Add(review) {
    const response = await collection.insertOne(review);
    // console.log(response + "heree ");
    review.id = response.insertedId;

    return { ...review };
}