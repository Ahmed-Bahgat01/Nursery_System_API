const mongoose = require('mongoose')
const Schema = mongoose.Schema
const registerAutoIdCreate = require('../helpers/modelHelpers/createWithAutoId')
const preEventsHashColumn = require('../helpers/modelHelpers/preSaveHashColumn')

const adminSchema = new Schema({
    _id: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
})

preEventsHashColumn(
    adminSchema,
    'password',
    parseInt(process.env.BCRYPT_SALT_ROUNDS)
)

registerAutoIdCreate('adminSeq', adminSchema)

mongoose.model('admin', adminSchema)
