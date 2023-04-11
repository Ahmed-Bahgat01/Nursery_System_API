require('../Models/class.model')
const mongoose = require('mongoose')
const classSchema = mongoose.model('class')
const teacherSchema = mongoose.model('teacher')
const childSchema = mongoose.model('teacher')
const { errorMessages, userMessages } = require('../Utils/messages')

exports.indexClasses = async function (req, res, next) {
    try {
        const data = await classSchema.find({})
        res.status(200).json({ data })
    } catch (error) {
        next(error)
    }
}

exports.createClass = async function (req, res, next) {
    try {
        let foundChildren = await childSchema.find({
            _id: { $in: req.body.children },
        })
        let foundAdvisor = await teacherSchema.findById(req.body.advisor)
        if (foundChildren.length != req.body.children.length) {
            throw new Error(errorMessages.notFound)
        }
        if (!foundAdvisor) {
            throw new Error(errorMessages.notFound)
        }
        let entity = await classSchema.createWithAutoId(req.body)
        res.status(201).send(entity)
    } catch (error) {
        next(error)
    }
}

exports.showClass = async function (req, res, next) {
    try {
        const data = await classSchema.findOne({ _id: req.params.id })
        res.status(200).json({ data })
    } catch (error) {
        next(error)
    }
}

exports.updateClass = async function (req, res, next) {
    try {
        await classSchema.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({ data: userMessages.updateSuccess })
    } catch (error) {
        next(error)
    }
}

exports.deleteClass = async function (req, res, next) {
    try {
        const deletedClass = await classSchema.findByIdAndDelete(req.params.id)
        if (!deletedClass) {
            throw new Error(errorMessages.notFound)
        }
        res.status(200).json({ data: userMessages.deleteSuccess })
    } catch (error) {
        next(error)
    }
}

exports.getSupervisor = async function (req, res, next) {
    try {
        let targetClass = await classSchema
            .findOne({ _id: req.params.id })
            .populate('supervisor')

        if (targetClass) {
            let targetSupervisor = targetClass.supervisor
            res.status(200).json({ supervisor: targetSupervisor })
        } else {
            throw new Error(errorMessages.notFound)
        }
    } catch (error) {
        next(error)
    }
}

exports.getChildren = async function (req, res, next) {
    try {
        let targetClass = await classSchema
            .findOne({ _id: req.params.id })
            .populate('children')
        if (targetClass) {
            let targetChildren = targetClass.children
            res.status(200).json({ children: targetChildren })
        } else {
            throw new Error(errorMessages.notFound)
        }
    } catch (error) {
        next(error)
    }
}
