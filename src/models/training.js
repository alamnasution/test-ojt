const mongoose = require('mongoose')

const trainingSchema = new mongoose.Schema({
    training_id: {
        type: Number,
        required: true,
        validate(value){
            if (value < 0) {
                throw new Error('Age must be positive number')
            }
        }
    },
    start_date: {
        type: String,
        required: true,
        trim: true
    },
    end_date: {
        type: String,
        required: true,
        trim: true
    },
    trainee_id: {
        type: Number,
        required: true,
        validate(value){
            if (value < 0) {
                throw new Error('Age must be positive number')
            }
        }
    },
    course_id: {
        type: Number,
        required: true,
        validate(value){
            if (value < 0) {
                throw new Error('Age must be positive number')
            }
        }
    },
    status: {
        type: String,
        required: true,
        validate(value){
            if (value !== "Not Started" && value !== "In Progress" && value !== "Completed") {
                throw new Error('Status invalid for your training')
            }
        }
    }
})

const Training = mongoose.model('Training', trainingSchema)

module.exports = Training