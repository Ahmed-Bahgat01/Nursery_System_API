const mongoose = require('mongoose')
const Schema = mongoose.Schema
const sequence = require('./sequence.model')

const userSchema = new Schema({
    _id: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    // role: {
    //     type: String,
    //     required: true,
    //     enum: ['Instructor', 'Admin', 'Child'],
    // },
})

userSchema.statics.createWithAutoId = async function (data) {
    let Entity = this
    let counter = await sequence.findByIdAndUpdate(
        { _id: 'userSeq' },
        { $inc: { seq: 1 } },
        { new: true, upsert: true }
    )
    let entity = new Entity(data)
    entity._id = counter.seq
    await entity.save()
    return entity
}

mongoose.model('admin', userSchema)
