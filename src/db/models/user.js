const mongoose = require('mongoose');
const validator = require('validator');

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

module.exports= User;