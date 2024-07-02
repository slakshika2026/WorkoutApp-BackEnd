const express = require('express')

const router = express.Router()

//GET all workouts
router.get('/', (req,res) => {
   res.json({mssg: 'GET all workouts'})
})

//GET single workout
router.get('/:id', (req, res) => { 
   res.json({mssg: 'GET single workout'})
})

//POST a new workout
router.post('/', (req, res) => { 
   res.json({mssg: 'POST new workout'})
})

//DELETE a new workout
router.delete('/:id', (req, res) => {
   res.json({ mssg: 'DELETE the workout' })
})

//UPDATE a new workout
router.patch('/:id', (req, res) => {
   res.json({ mssg: 'Update the workout' })
})
module.exports = router