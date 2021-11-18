const Users = require( "./users");
const { ObjectId } = require('bson');
const { client } = require('./mongo');

const collection = client.db(process.env.MONGO_DB).collection('posts');
module.exports.collection = collection;

const list = [
    { 
        src: "https://doz1futtg6626.cloudfront.net/images/2021/10/24/JS6_5989.JPG",
        alt: "",
        caption: "Soccer Days",
        time: Date(),
        user_handle: "@ctejada710",
        isPublic: true,
    },
    { 
        src: "https://www.gannett-cdn.com/presto/2020/01/04/PWES/eb530f21-2806-403f-88e9-50cba379dcb8-jm010420_Track25.JPG",
        alt: "Mug with slogan",
        caption: "Armory Day !!!",
        time: Date(),
        user_handle: "@ctejada710",
        isPublic: true,
    },
    { 
        src: "https://bestdigitalpianoguides.com/wp-content/uploads/2018/08/piano-playing-public-event.jpg",
        alt: "The family",
        caption: "Playing the Piano",
        time: Date(),
        user_handle: "@ctejada710",
        isPublic: true,
    },
];
const addOwnerPipeline = [
    {"$lookup" : {
        from: "users",
        localField: 'user_handle',
        foreignField: 'handle',
        as: 'user',
    }},
    {$unwind: "$user"},
    { $project: { "owner.password": 0}}
];

module.exports.GetAll = function GetAll() {
    return collection.aggregate(addOwnerPipeline).toArray();
}

module.exports.GetWall = function GetWall(handle) {
    return collection.aggregate(addOwnerPipeline).match({ user_handle: handle }).toArray();
}


module.exports.GetFeed_ = function GetFeed_(handle) {
    //  The "SQL" way to do things
    const query = Users.collection.aggregate([
        {$match: { handle }},
        {"$lookup" : {
            from: "posts",
            localField: 'following.handle',
            foreignField: 'user_handle',
            as: 'posts'
        }},
        {$unwind: '$posts'},
        {$replaceRoot: { newRoot: "$posts" } },
    // @ts-ignore
    ].concat(addOwnerPipeline));
    return query.toArray();
}

module.exports.GetFeed = async function (handle) {
    //  The "MongoDB" way to do things. (Should test with a large `following` array)
    const user = await Users.collection.findOne({ handle });
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


module.exports.Get = function Get(post_id) { return collection.findOne({_id: new ObjectId(post_id) }); }

module.exports.Add = async function Add(post) {
    if(!post.user_handle){
        throw {code: 422, msg: "Post must have an Owner"}
    }
    post.time = Date();
    
    const response = await collection.insertOne(post);
    
    post.id = response.insertedId;

    return { ...post };
}
module.exports.Update = async function Update(post_id, post) {
    const results = await collection.findOneAndUpdate(
        {_id: new ObjectId(post_id) }, 
        { $set: post },
        { returnDocument: 'after'}
    );

    return results.value;
}
module.exports.Delete = async function Delete(post_id) {
    const results = await collection.findOneAndDelete({_id: new ObjectId(post_id) })

    return results.value;
} 

module.exports.Search = q => collection.find({ caption: new RegExp(q,"i") }).toArray();

module.exports.Seed = async ()=>{
    for (const x of list) {
        await this.Add(x)
    }
}