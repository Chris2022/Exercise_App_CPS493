const bcrypt = require('bcrypt');
const { ObjectId } = require('bson');
const { client } = require('./mongo');

const collection = client.db(process.env.MONGO_DB).collection('Contact');
module.exports.collection = collection;


//Store a contact us form filled by the user in the dater base
module.exports.Add = async function Add(Contact) {
    const response = await collection.insertOne(Contact);
    // console.log(response + "heree ");
    Contact.id = response.insertedId;

    return { ...Contact };
}