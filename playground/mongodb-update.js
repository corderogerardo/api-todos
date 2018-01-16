const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, database) => {
    if (err) {
        return console.log("Unable to connect to MongoDB server ");
    }
    console.log("Connected to MongoDB server ");

    let db = database.db('TodoApp');

    db.collection('todos').findOneAndUpdate({
        _id: new ObjectID('5a5e22e2e9d3341bfbc677a1')
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    db.collection('users').findOneAndUpdate({
        _id: new ObjectID('5a5e22d8aefe0d1bd5a2c5df')
    }, {
        $set: {
            name: 'Damian'
        },
        $inc: {
            age: 1
        }
    }, { returnOriginal: false }).then((result) => {
        console.log(result);
    });

    // db.close();
});

