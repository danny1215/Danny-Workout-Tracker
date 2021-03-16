const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    excercises:[
        {
        type:{
            type:String,
            trim: true,
            required: 'excercise can not be blank.'
        },

        name: {
            type: String,
            trim: true,
            required:'Please enter a name for the excercise.'
        },
        duration:{
            type: Number
        },
        weight: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        },
        distance: {
            type: Number
        }
    }
]

});

const Workout = mongoose.model("workout", workoutSchema);

module.exports = Workout;