const {MongoClient} = require('mongodb');
async function main(){
    const uri = "";
    const client = new MongoClient(uri)
    try {
        await client.connect(); //uses await key word to block further execution until operation is complete        
        creatingListing(client, {
            name: "",
            summary: "",
            bedrooms: 1,
            bathrooms:1 
        });
        createMultiple(client, {
            /*
            have an array of listings to create 
            */
        });//

        await findByOneName(client, "name of document");
    } catch (error) {
        console.log(error);
    }finally{
        await client.close();//
    }
}
/*Creating Documents */
async function createMultiple(client, newListings){
    const result = await client.db("database goes here").collection('access collections').insertMany(newListings);
    console.log(`${result.insertedCount}`);
    console.log(result.insertedIDs);
}
//creates a single listing
async function creatingListing(client, newListing){
    const result =await client.db("database goes here").collection("accessing collections").insertOne(newListing);
    consle.log('result');
}
async function ListDatabases(client){
    await client.db().admin().ListDatabases();
}
/*Reading Documents*/
//Querying for one document
async function findByOneName(client, nameOfListing){
    const result = await client.db("database goes here").collection("accessing collection").findOne({
        name: nameOfListing
    });
    if (result) {
        console.log(`found a list with ${nameOfListing}`);
    }else{
        console.log(`did not find list with ${nameOfListing}`);
    }  
}
//finding multple things
async function findingMultiple
(client, 
    {minbed= 0, 
    minbath=0, 
    maxRes= Number.MAX_SAFE_INTEGER}= {}){
    const cursor = client.db('name of db').collection('accessing collections').find(
        {
            bedrooms: {$gte: minbed},
            bathrooms: {$gte: minbath}
        }
    ).sort({last_reviews:-1}).limit(maxRes);
    const results = cursor.toArray();
    
}
/* Updating Documents*/
//update the first list that matches the query criteria
async function UpdateListing(client, nameOfListing,updatelisting){
    const result = await client.db('name of db').collection('collection').updateOne({name:nameOfListing},
        {$set:updatelisting} );
}
//update a document if it exists or insert a document if it doesn't. 
async function upsertListing(client, nameOfListing, updatelisting){
    const result = await client.db('name of db').collection('collection').updateOne({name:nameOfListing},
        {$set:updatelisting}, {upsert: true} );
}
//updating multiple documents
async function updateMany(client){
    client.db('db').collection('collections').updateMany({property_type:{$exists:false}},
        {$set:{property_type: 'unknown'} })
}

/* Deleting Documents*/
//delete the first document that matches the query.
async function deleteListingByName(client, nameOfListing){
    const result = await client.db('db').collection('collections').deleteOne({name:nameOfListing});
}
// deleting multiple documents
async function deleteMultiple(client,date ){
    const result = await client.db('db').collection('collections').deleteMany({last_scraped:{$lt:date}});
}