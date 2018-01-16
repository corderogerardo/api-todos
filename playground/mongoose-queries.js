const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

let id = '5a5e22e2e9d3341bfbc677a1';
let userId = '5a5e22d8aefe0d1bd5a2c5df';

if (!ObjectID.isValid(id)) {
    console.log("ID Todo not valid ");
}

if (!ObjectID.isValid(userId)) {
    console.log("ID user not valid ");
}

Todo.find({
    _id: id
}).then((todos) => {
    console.log("Todos ", todos);
});

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log("Todo ", todo);
});

Todo.findById(id).then((todo) => {
    if (!todo) {
        return console.log("Id Todo not found");
    }
    console.log("Todo by ID " + todo);
}).catch((e) => console.log("Error " + e));

User.findById(userId).then((user) => {
    if (!user) {
        return console.log("Unable to find user ");
    }
    console.log("User by Id " + JSON.stringify(user, undefined, 2));
}, (e) => {
    console.log(e);
});
