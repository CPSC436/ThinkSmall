const mongoose = require('mongoose')
const { Schema } = mongoose

const Volunteer = new Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        imageURL: { type: String },
        description: { type: String },
        skills: { type: [Number], required: true, default: [] },
        workURL: { type: String },
    },
    { timestamps: true },
)

module.exports = mongoose.model('volunteers', Volunteer)
