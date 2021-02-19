const mongoose = require("mongoose")
const Schema = mongoose.Schema


const excerciseSchema = new Schema(
    {
        day:{
            type: Date,
            default: () => new Date()
        }, 
        excercises: [
            {
                type:{
                    type: String,
                    required: "Please Type an Exercise"
                }, 
                 name: {
                     type: String,
                     required: "Please Enter Exercise Name"
                 },
                 duration: {
                     type: Number,
                     required: "Enter Exercise Duration"
                 },
                 weight: {
                     type: Number,
                    
                 },
                 reps: {
                     type: Number,
                    
                 },
                 sets: {
                     type: Number, 
                     
                 }
            }
]
        },
        {
            toJSON: {
                virtuals: true,
            }
        })
excerciseSchema.virtual("total time").get(function(){
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
      }, 0);
})
const Workout = mongoose.model("Workout", excerciseSchema)

module.exports = Workout