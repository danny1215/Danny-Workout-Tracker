const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now()
    },
    exercises:[
        
       
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
            type: Number,
            // min: [0, "duration can not be less than 0"]
        },
        weight: {
            type: Number,
            default: 0,
            // min: [0, "weight can not be less than 0, No such thing as weight bieng less than 0"]
        },
        reps: {
            type: Number,
            default: 0,
            // min: [0, "repitition can not be less than 0"]
        },
        sets: {
            type: Number,
            default: 0,
            // min: [0, "sets can not be less than 0"]

        },
        distance: {
            type: Number,
            default: 0,
            // min: [0, "Distance can not be less than 0"]
        }
    }
    ],

    totalDuration: {
        type: Number,
        default: 0,
        }
});

const Workout = mongoose.model("workout", workoutSchema);

module.exports = Workout;