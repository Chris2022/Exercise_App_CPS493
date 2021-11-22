const bcrypt = require('bcrypt');
const { ObjectId } = require('bson');
const { client } = require('./mongo');

const collection = client.db(process.env.MONGO_DB).collection('Workout');
module.exports.collection = collection;

//Display all of the reviews from the daterbase
module.exports.GetAll = function GetAll() { return collection.find().toArray() ; }
//add a review
module.exports.Add = async function Add(Workout) {
    const response = await collection.insertOne(Workout);
    Workout.id = response.insertedId;

    return { ...Workout };
}