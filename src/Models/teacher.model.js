const mongoose = require('mongoose')
const Schema = mongoose.Schema

const teacherSchema = new Schema({
    _id: { type: Number, required: true },
    fullName: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    image: { type: String, required: true },
})

mongoose.model('teacher', teacherSchema)
