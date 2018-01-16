// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, database) => {
    if(err){
        return console.log("Unable to connect to MongoDB server ");
    }
    console.log("Connected to MongoDB server ");

    let db = database.db('TodoApp');

    db.collection('todos').find({
        _id: new ObjectID('5a5e22e2e9d3341bfbc677a1')
    }).toArray().then((docs)=>{
        console.log("Todos");
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err)=>{
        console.log("Unable to fetch todos ", err);
    });

    db.collection('todos').find().count().then((count)=>{
        console.log(`Todos count: ${count} `);
    }, (err)=>{
        console.log("Unable to fetch todos ", err);
    });

    db.collection('users').find({name:'Gerardo'}).toArray().then((docs)=>{
        console.log(JSON.stringify(docs, undefined, 2));
    });

    database.close();

});
