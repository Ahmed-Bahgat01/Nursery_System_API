const mongoose = require('mongoose')
const Schema = mongoose.Schema
const registerAutoIdCreate = require('../helpers/createWithAutoId')
const preSaveHashColumn = require('../helpers/preSaveHashColumn')

const adminSchema = new Schema({
    _id: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
})

preSaveHashColumn(
    adminSchema,
    'password',
    parseInt(process.env.BCRYPT_SALT_ROUNDS)
)

registerAutoIdCreate('adminSeq', adminSchema)

mongoose.model('admin', adminSchema)
