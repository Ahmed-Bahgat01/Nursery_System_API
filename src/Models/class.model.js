const mongoose = require('mongoose')
const Schema = mongoose.Schema
const sequence = require('./sequence.model')

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

classSchema.statics.createWithAutoId = async function (data) {
    let Entity = this
    let counter = await sequence.findByIdAndUpdate(
        { _id: 'classSeq' },
        { $inc: { seq: 1 } },
        { new: true, upsert: true }
    )
    let entity = new Entity(data)
    entity._id = counter.seq
    await entity.save()
    return entity
}

mongoose.model('class', classSchema)
