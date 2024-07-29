import mongoose, { Schema } from "mongoose";

const taskSchema= new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    description: {
        type: String,
        required: true
      },
      status: {
        type: String,
        enum: ['To-Do', 'In Progress', 'Done'],
        default: 'To-Do'
      }
})

const Task=mongoose.model('Task',taskSchema)

export default Task