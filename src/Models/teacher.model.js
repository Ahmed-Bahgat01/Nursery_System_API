const mongoose = require('mongoose')
const Schema = mongoose.Schema
const sequence = require('./sequence.model')

const teacherSchema = new Schema({
    _id: { type: Number, required: true },
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    image: { type: String, required: true },
})

teacherSchema.statics.createWithAutoId = async function (data) {
    let Entity = this
    let counter = await sequence.findByIdAndUpdate(
        { _id: 'teacherSeq' },
        { $inc: { seq: 1 } },
        { new: true, upsert: true }
    )
    let entity = new Entity(data)
    entity._id = counter.seq
    await entity.save()
    return entity
}
mongoose.model('teacher', teacherSchema)
