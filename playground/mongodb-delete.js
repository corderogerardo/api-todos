const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, database) => {
    if (err) {
        console.log("Unable to connect to MongoDB Server ");
    }
    console.log("Connected to MongoDB server ");

    const db = database.db('TodoApp');

    db.collection('todos').deleteMany({ text: 'Eat lunch' }).then((result) => {
        console.log(result);
    });

    db.collection('todos').deleteOne({ text: 'Eat lunch' }).then((result) => {
        console.log(result);
    });

    db.collection('todos').findOneAndDelete({ completed: false }).then((result) => {
        console.log(result);
    });

    db.collection('users').deleteMany({ name: 'Gerardo' });

    db.collection('users').findOneAndDelete({
        _id: new ObjectID('5a5e22d8aefe0d1bd5a2c5df')
    }).then((results) => {
        console.log(JSON.stringify(results, undefined, 2));
    });

});
