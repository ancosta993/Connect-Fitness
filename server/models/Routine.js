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