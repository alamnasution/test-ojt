const express = require('express')
const Trainee = require('../models/trainee.js')

const router = new express.Router()

router.post('/trainee', async (req, res) => {
    const trainee = new Trainee(req.body)

    try {
        await trainee.save()

        res.status(201).send({trainee})
    } catch (e) {
        res.status(400).send(e)
    }
})


module.exports = router