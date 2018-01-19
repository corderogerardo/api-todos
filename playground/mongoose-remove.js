const {ObjectID} = require('mongodb');

const {mongoose} = requiere('./../server/db/mongoose');

const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

Todo.remove({}).then((result)=> {
    console.log(result);
});

//Todo.findOneAndRemove
Todo.findOneAndRemove({_id:''}).then((todo)=>{

});
//Todo.findByIdAndRemove
Todo.findByIdAndRemove('').then((todo)=>{
    console.log(todo)
});