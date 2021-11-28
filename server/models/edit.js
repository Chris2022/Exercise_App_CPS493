const bcrypt = require('bcrypt');
const { ObjectId } = require('bson');
const { client } = require('./mongo');

const collection = client.db(process.env.MONGO_DB).collection('Users');
module.exports.collection = collection;

module.exports.Get = user_id => collection.findOne({_id: new ObjectId(user_id)}) 

module.exports.Update = async function Update(user_id, user) {
    const results = await collection.findOneAndUpdate(
        {_id: new ObjectId(user_id) }, 
        { $set: user },
        { returnDocument: 'after'}
    );
    console.log({ user_id, results });
    return { ...results.value, password: undefined };
}