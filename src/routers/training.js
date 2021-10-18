const express = require('express')
const Training = require('../models/training.js')

const router = new express.Router()

router.post('/training', async (req, res) => {
    const training = new Training(req.body)

    try {
        await training.save()
        
        res.status(201).send({training})
    } catch (e) {
        res.status(400).send(e)
    }
})

router.patch('/training/:training_id', async (req, res) => {
    const training_id = req.params.training_id

    try {
        
        const training = await Training.findOne({training_id})

        if(!training){
            return res.status(404).send()
        }

        updates.forEach((update) => training[update] = req.body[update])

        await training.save()

        res.send(training)
    } catch (e) {
        res.status(400).send()
    }
})

router.get('/training/:status', async (req, res) => {
    const status = req.params.status

    try {
        const training = await Training.findOne({status})
        
        if (!training) {
            return res.status(404).send()
        }

        res.send(training)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router