const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Order = new Schema(
    {
        subTotal: { type: Number, required: true },
        tax: { type: Number, required: true },
        total: { type: Number, required: true },
        discount: { type: Number, required: true },
        items: { type: Array, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('order', Order)