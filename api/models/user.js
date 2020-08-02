const mongoose = require('mongoose')
const { Schema } = mongoose
const passportLocalMongoose = require("passport-local-mongoose")


const User = new Schema(
    {
        givenName: { type: String, required: true },
        familyName: { type: String, required: true },
        email: { type: String, required: true },
        password: String,
        phone: String,
        imageUrl: String,
        description: String,
        supplementaryUrl: String,
        owns: [], // businesses the user owns
        tags: [],
        tasks: [], // requests assigned to the user
        requests: [], // requests submitted by the user
        available: { type: Boolean, default: false },
    },
    { timestamps: true },
)

User.plugin(passportLocalMongoose, {usernameField : 'email'})

module.exports = mongoose.model('users', User)
