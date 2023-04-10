const sequence = require('../Models/sequence.model')
const createWithAutoId = async function (data, seqId) {
    var Entity = this
    var counter = await sequence.findByIdAndUpdate(
        { _id: seqId },
        { $inc: { seq: 1 } },
        { new: true, upsert: true }
    )
    var entity = new Entity(data)
    entity._id = counter.seq
    await entity.save()
    return entity
}

module.exports = createWithAutoId
