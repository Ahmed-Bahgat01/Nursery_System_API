require('../Models/admin.model')
const mongoose = require('mongoose')
const userSchema = mongoose.model('admin')
const { errorMessages, userMessages } = require('../Utils/messages')

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
        let entity = await userSchema.createWithAutoId(req.body)
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
        let targetUser = await userSchema.findById(req.params.id)
        if (!targetUser) {
            throw new Error(errorMessages.notFound)
        }
        targetUser.email = req.body.email
        targetUser.password = req.body.password
        await targetUser.save()
        res.status(200).json({ data: userMessages.updateSuccess })
    } catch (error) {
        next(error)
    }
}

exports.deleteUser = async function (req, res, next) {
    try {
        const deletedUser = await userSchema.findByIdAndDelete(req.params.id)
        if (!deletedUser) {
            throw new Error(errorMessages.notFound)
        }
        res.status(200).json({ data: userMessages.deleteSuccess })
    } catch (error) {
        next(error)
    }
}
