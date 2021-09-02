const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api');

const User = mongoose.model('User', {
    name: String,
    age: Number
});
const Task = mongoose.model('Task', {
    task: String,
    complete: Boolean
});

const task1 = new Task({
    task: 'finish Project',
    complete: true
})

task1.save().then(()=>console.log(task1)).catch(error=>console.log(error));