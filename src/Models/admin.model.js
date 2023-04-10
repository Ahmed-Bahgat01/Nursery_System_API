const mongoose = require('mongoose')
const Schema = mongoose.Schema
const registerAutoIdCreate = require('../helpers/createWithAutoId')

const adminSchema = new Schema({
    _id: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
})

registerAutoIdCreate('adminSeq', adminSchema)

mongoose.model('admin', adminSchema)
