const express = require('express')
const burger = require('../models/burger')

let router = express.Router()

router.get('/', (req, res) => {
	burger.selectAll(data => res.render('index', { burgers: data }))
})

router.post('/burgers', (req, res) => {
	burger.insertOne(req.body.burgerName, () => res.send('Successfully added' + req.body.burgerName))
})

router.get('/burgers', (req, res) => {
	burger.selectAll(data => res.json(data))
})

router.put('/burger/:id', (req, res) => {
	burger.updateOne(req.params.id, res.end())
})

module.exports = router
