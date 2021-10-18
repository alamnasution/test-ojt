const express = require('express')
const Course = require('../models/course.js')

const router = new express.Router()

router.post('/course', async (req, res) => {
    const course = new Course(req.body)

    try {
        await course.save()
        
        res.status(201).send({course})
    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = router