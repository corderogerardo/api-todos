const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, database) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const todos = database.db('TodoApp');
    todos.collection('todos').insertOne({
        text: 'Something to do',
        completed: false
    }, (err, result) => {
        if (err) {
            return console.log("Unable to insert todo " + err);
        }
        console.log("Data Inserted " + JSON.stringify(result.ops, undefined, 2));
    });

    // Insert new doc into Users (name, age, location)
    todos.collection('users').insertOne({
        name: 'Gerardo',
        age: '28',
        location: 'Chi Town'
    }, (err, result) => {
        if (err) {
            return console.log("Unable to insert User " + err);
        }
        console.log(result.ops[0]._id.getTimestamp());
    });
    database.close();
});
