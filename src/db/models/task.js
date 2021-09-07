const mongoose = require('mongoose');
const validator = require('validator');

const Task = mongoose.model('Task', {
    task: {
        type:String,
        required:true,
        trim: true
    },
    complete: {
        type:Boolean,
    default: false}
});
// const task = new Task({
//     task:'do you',
//     complete: false
// })
// task.save().then(task => console.log(task))
// .catch(e => console.log(e))

module.exports = Task;