const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat')

const routineSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        workoutText: {
            type: String,
            required: 'Please tell us about your workout!',
            minlength: 1,
            maxlength: 280
        },
        day:{
            type: String,
            required: 'The day of the week for this workout is required',
            enum: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday', 'Saturday']
        },
        reps:{
            type: String,
            default:'',  
        },
        sets: {
            type: String,
            default: ''
        },
        duration: {
            type: String,
            default:''
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        },
        username: {
            type: String,
            required: true
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
);

const Routine = model('Routine', routineSchema);

module.exports = Routine;