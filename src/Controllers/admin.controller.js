require('../Models/admin.model')
const mongoose = require('mongoose')
const userSchema = mongoose.model('admin')

exports.indexUsers = async function (req, res, next) {
    try {
        const data = await userSchema.find({})
        res.status(200).json({ data })
    } catch (error) {
        next(error)
    }
}

exports.createUser = async function (req, res, next) {
    try {
        var entity = await userSchema.createWithAutoId(req.body)
        res.status(201).send(entity)
    } catch (error) {
        next(error)
    }
}

exports.showUser = async function (req, res, next) {
    try {
        const data = await userSchema.findOne({ _id: req.params.id })
        res.status(200).json({ data })
    } catch (error) {
        next(error)
    }
}

exports.updateUser = async function (req, res, next) {
    try {
        await userSchema.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({ data: 'updated successfully' })
    } catch (error) {
        next(error)
    }
}

exports.deleteUser = async function (req, res, next) {
    try {
        const deletedUser = await userSchema.findByIdAndDelete(req.params.id)
        if (!deletedUser) {
            throw new Error('admin not found')
        }
        res.status(200).json({ data: 'deleted sucessfully' })
    } catch (error) {
        next(error)
    }
}
