const mongoose = require('mongoose')

const traineeSchema = new mongoose.Schema({
    trainee_id: {
        type: Number,
        required: true,
        validate(value){
            if (value < 0) {
                throw new Error('Age must be positive number')
            }
        }
    },
    trainee_name: {
        type: String,
        required: true,
        trim: true
    },
    trainee_skill: {
        type: String,
        required: true,
        trim: true
    }
})

const Trainee = mongoose.model('Trainee', traineeSchema)

module.exports = Trainee