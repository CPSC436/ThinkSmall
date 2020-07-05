const Volunteer = require('../models/volunteer')

createVolunteer = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide an volunteer',
        })
    }

    const volunteer = new Volunteer(body)

    if (!volunteer) {
        return res.status(400).json({ success: false, error: err })
    }

    volunteer
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: volunteer._id,
                message: 'Volunteer created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Volunteer not created!',
            })
        })
}

updateVolunteer = async (req, res) => {
    const { _id, ...volunteer } = req.body

    if (!req.body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    await Volunteer.findByIdAndUpdate(req.params.id, volunteer, (err, volunteer) => {
        if (!volunteer) {
            return res.status(404).json({
                err,
                message: 'Volunteer not found!',
            })
        }
        return res.status(200).json({
            success: true,
            id: volunteer._id,
            message: 'Volunteer updated!',
        })
    })
}

deleteVolunteer = async (req, res) => {
    await Volunteer.findOneAndDelete({ _id: req.params.id }, (err, volunteer) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!volunteer) {
            return res.status(404).json({ success: false, error: `Volunteer not found` })
        }

        return res.status(200).json({ success: true, data: volunteer })
    }).catch(err => console.log(err))
}

getVolunteerById = async (req, res) => {
    await Volunteer.findById(req.params.id, (err, volunteer) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!volunteer) {
            return res.status(404).json({ success: false, error: `Volunteer not found` })
        }
        return res.status(200).json({ success: true, data: volunteer })
    }).catch(err => console.log(err))
}

getVolunteers = async (req, res) => {
    await Volunteer.find({}, (err, volunteers) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!volunteers.length) {
            return res.status(404).json({ success: false, error: `Volunteer not found` })
        }
        return res.status(200).json({ success: true, data: volunteers })
    }).catch(err => console.log(err))
}

module.exports = {
    createVolunteer,
    updateVolunteer,
    deleteVolunteer,
    getVolunteers,
    getVolunteerById,
}
