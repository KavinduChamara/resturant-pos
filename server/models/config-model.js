const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Config = new Schema(
    {
        name: { type: String, required: true },
        config: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('config', Config)