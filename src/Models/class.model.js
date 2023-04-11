const mongoose = require('mongoose')
const Schema = mongoose.Schema
const registerAutoIdCreate = require('../helpers/modelHelpers/createWithAutoId')

const classSchema = new Schema({
    _id: { type: Number, required: true },
    name: { type: String, required: true },
    supervisor: { type: Number, required: true, ref: 'teacher' },
    children: [
        {
            type: Number,
            ref: 'child',
        },
    ],
})

registerAutoIdCreate('classSeq', classSchema)

mongoose.model('class', classSchema)
