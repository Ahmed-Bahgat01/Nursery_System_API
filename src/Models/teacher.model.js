const mongoose = require('mongoose')
const Schema = mongoose.Schema
const registerAutoIdCreate = require('../helpers/modelHelpers/createWithAutoId')
const preSaveHashColumn = require('../helpers/modelHelpers/preSaveHashColumn')

const teacherSchema = new Schema({
    _id: { type: Number, required: true },
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    image: { type: String, required: true },
})

preSaveHashColumn(
    teacherSchema,
    'password',
    parseInt(process.env.BCRYPT_SALT_ROUNDS)
)

registerAutoIdCreate('teacherSeq', teacherSchema)

mongoose.model('teacher', teacherSchema)
