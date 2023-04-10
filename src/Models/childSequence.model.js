const mongoose = require('mongoose')
const Schema = mongoose.Schema

const childCounterSchema = new Schema({
    _id: { type: String, required: true },
    seq: { type: Number, default: 50 },
})

module.exports = mongoose.model('childCounter', childCounterSchema)
