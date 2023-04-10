require('../Models/child.model')
const mongoose = require('mongoose')
const childSchema = mongoose.model('child')

exports.indexChildren = async function (req, res, next) {
    try {
        const data = await childSchema.find({})
        res.status(200).json({ data })
    } catch (error) {
        next(error)
    }
}

exports.createChild = async function (req, res, next) {
    try {
        var entity = await childSchema.createWithAutoId(req.body)
        res.status(201).send(entity)
    } catch (error) {
        next(error)
    }
}

exports.showChild = async function (req, res, next) {
    try {
        const data = await childSchema.findOne({ _id: req.params.id })
        res.status(200).json({ data })
    } catch (error) {
        next(error)
    }
}

exports.updateChild = async function (req, res, next) {
    try {
        await childSchema.findByIdAndUpdate(req.params.id, req.body)
        await childSchema.save()
        res.status(200).json({ data: 'updated successfully' })
    } catch (error) {
        next(error)
    }
}

exports.deleteChild = async function (req, res, next) {
    try {
        const deletedChild = await childSchema.findByIdAndDelete(req.params.id)
        if (!deletedChild) {
            throw new Error('child not found')
        }
    } catch (error) {
        next(error)
    }
}
