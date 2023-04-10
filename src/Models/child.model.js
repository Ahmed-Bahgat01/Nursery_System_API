const mongoose = require('mongoose')
const Schema = mongoose.Schema

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

mongoose.model('child', childSchema)
