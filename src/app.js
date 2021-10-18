const express = require('express')
require('./db/mongoose.js')
const traineeRouter = require('./routers/trainee.js')
const courseRouter = require('./routers/course.js')
const trainingRouter = require('./routers/training.js')

const app = express()

app.use(express.json())

app.use(traineeRouter)

app.use(courseRouter)

app.use(trainingRouter)

module.exports = app