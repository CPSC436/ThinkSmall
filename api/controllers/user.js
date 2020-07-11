const User = require('../models/user')
const ObjectId = require('./helper')

createUser = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide an user',
        })
    }

    const user = new User(body)

    if (!user) {
        return res.status(400).json({ success: false, error: err })
    }

    // Check to see if user email is already in db User.findOne(email: body.email)
    // return error and state username already exists
    // most likely a state that is a boolean which you use to pop up an error message

    user
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: user._id,
                message: 'User created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'User not created!',
            })
        })
}

updateUser = async (req, res) => {
    const user = req.body

    if (!user) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    await User.findByIdAndUpdate(ObjectId(req.params.id), user, (err, user) => {
        if (!user) {
            return res.status(404).json({
                err,
                message: 'User not found!',
            })
        }
        return res.status(200).json({
            success: true,
            id: user._id,
            message: 'User updated!',
        })
    })
}

deleteUser = async (req, res) => {
    await User.findByIdAndDelete(ObjectId(req.params.id), (err, user) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!user) {
            return res.status(404).json({ success: false, error: `User not found` })
        }

        return res.status(200).json({ success: true, data: user })
    }).catch(err => console.log(err))
}

// for now not using getUserById but using getUserByEmail
getUserById = async (req, res) => {
    await User.findById(ObjectId(req.params.id), (err, user) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!user) {
            return res.status(404).json({ success: false, error: `User not found` })
        }
        return res.status(200).json({ success: true, data: user })
    }).catch(err => console.log(err))
}

getUserByEmail = async (req, res) => {
    await User.findOne({email: req.params.id}, (err, user) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!user) {
            return res.status(404).json({ success: false, error: `User not found` })
        }
        return res.status(200).json({ success: true, data: user })
    }).catch(err => console.log(err))
}

getUsers = async (req, res) => {
    await User.find({}, (err, users) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!users.length) {
            return res.status(404).json({ success: false, error: `User not found` })
        }
        return res.status(200).json({ success: true, data: users })
    }).catch(err => console.log(err))
}

module.exports = {
    createUser,
    updateUser,
    deleteUser,
    getUsers,
    getUserById,
    getUserByEmail
}
