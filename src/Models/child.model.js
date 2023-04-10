const mongoose = require('mongoose')
const Schema = mongoose.Schema
const sequence = require('./sequence.model')

const childSchema = new Schema({
    _id: { type: Number },
    fullName: { type: String, required: true },
    age: { type: Number, required: true },
    level: { type: String, required: true, enum: ['preKG', 'KG1', 'KG2'] },
    address: {
        city: { type: String, required: true },
        street: { type: String, required: true },
        building: { type: Number, required: true },
    },
})

childSchema.statics.createWithAutoId = async function (data) {
    var Entity = this
    var counter = await sequence.findByIdAndUpdate(
        { _id: 'childSeq' },
        { $inc: { seq: 1 } },
        { new: true, upsert: true }
    )
    var entity = new Entity(data)
    entity._id = counter.seq
    await entity.save()
    return entity
}

mongoose.model('child', childSchema)
