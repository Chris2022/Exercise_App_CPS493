const Users = require( "./users");
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

module.exports.GetFeed = async function (handle) {
    const user = await Users.collection.findOne({handle});
    console.log(user);
    if(!user){
        throw { code: 404, msg: 'No such user'};
    }
    const targets = user.following.filter(x=> x.isApproved).map(x=> x.handle).concat(handle)
    const query = collection.aggregate([
        {$match: { user_handle: {$in: targets} } },
     // @ts-ignore
     ].concat(addOwnerPipeline));
    return query.toArray();
}
module.exports.GetByHandle = (handle) => collection.findOne({ handle }).then(x=> ({ ...x, password: undefined }));
