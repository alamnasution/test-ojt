const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
    course_id: {
        type: Number,
        required: true,
        validate(value){
            if (value < 0) {
                throw new Error('Age must be positive number')
            }
        }
    },
    course_name: {
        type: String,
        required: true,
        trim: true
    },
    duration_in_minute: {
        type: Number,
        required: true,
        validate(value){
            if (value < 0) {
                throw new Error('Age must be positive number')
            }
        }
    }
})

const Course = mongoose.model('Course', courseSchema)

module.exports = Course