const mongoose = require('mongoose')
const Schema = mongoose.Schema
const registerAutoIdCreate = require('../helpers/createWithAutoId')

const childSchema = new Schema({
    _id: { type: Number, required: true },
    fullName: { type: String, required: true },
    age: { type: Number, required: true },
    level: { type: String, required: true, enum: ['preKG', 'KG1', 'KG2'] },
    address: {
        city: { type: String, required: true },
        street: { type: String, required: true },
        building: { type: Number, required: true },
    },
})
registerAutoIdCreate('childSeq', childSchema)
mongoose.model('child', childSchema)
