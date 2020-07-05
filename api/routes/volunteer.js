const express = require('express')

const VolunteerCtrl = require('../controllers/volunteer')

const router = express.Router()

router.post('/volunteer', VolunteerCtrl.createVolunteer)
router.put('/volunteer/:id', VolunteerCtrl.updateVolunteer)
router.delete('/volunteer/:id', VolunteerCtrl.deleteVolunteer)
router.get('/volunteer/:id', VolunteerCtrl.getVolunteerById)
router.get('/volunteers', VolunteerCtrl.getVolunteers)

module.exports = router
