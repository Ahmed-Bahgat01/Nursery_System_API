const sequence = require('../../Models/sequence.model')

const registerAutoIdCreate = async function (seqId, schema) {
    schema.statics.createWithAutoId = async function (data) {
        let Entity = this
        let counter = await sequence.findByIdAndUpdate(
            { _id: seqId },
            { $inc: { seq: 1 } },
            { new: true, upsert: true }
        )
        let entity = new Entity(data)
        entity._id = counter.seq
        await entity.save()
        return entity
    }
}

module.exports = registerAutoIdCreate
