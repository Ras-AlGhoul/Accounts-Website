const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api');

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('must provide a valid email');
            }
        }

    },
    password: {
        type: String,
        required: true,
        trim:true,
        validate(value) {
            if (!validator.isStrongPassword(value)) {
                throw new Error('password must be stronger, password must be 8 characters with at least one uppercase, 1 number,1 symbol')
            }
        },
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('password is not a valid password')
            }
        },
    },
    age: {
        type: Number,
        default: 18,
        validate(value) {
            if (value < 18) {
                throw new Error('user must be +18');
            }
        }

    }
});
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

const task = new Task({
    task:' Love your girl '
});
task.save().then(()=>console.log(task)).catch(error=>console.log(error));
// const user = new User({
//     name: 'Amal',
//     email: 'amal.abbas@gmail.com',
//     password: 'assword1121-21'
// })
// user.save().then(() => console.log(user)).catch(error => console.log(error));