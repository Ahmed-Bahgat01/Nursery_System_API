require('../Models/teacher.model')
const mongoose = require('mongoose')
const teacherSchema = mongoose.model('teacher')
const authChecks = require('../helpers/controllerHelpers/authChecks')

exports.indexTeachers = async function (req, res, next) {
    try {
        const data = await teacherSchema.find({})
        res.status(200).json({ data })
    } catch (error) {
        next(error)
    }
}

exports.createTeacher = async function (req, res, next) {
    try {
        var entity = await teacherSchema.createWithAutoId(req.body)
        res.status(201).send(entity)
    } catch (error) {
        next(error)
    }
}

exports.showTeacher = async function (req, res, next) {
    try {
        let authorized = authChecks.isAdminOrSameUser(
            'Admin',
            'Instructor',
            req
        )
        if (!authorized) {
            throw new Error('Not Authorized')
        }
        const data = await teacherSchema.findOne({ _id: req.params.id })
        res.status(200).json({ data })
    } catch (error) {
        next(error)
    }
}

exports.updateTeacher = async function (req, res, next) {
    try {
        let authorized = authChecks.isAdminOrSameUser(
            'Admin',
            'Instructor',
            req
        )
        if (!authorized) {
            throw new Error('Not Authorized')
        }
        await teacherSchema.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({ data: 'updated successfully' })
    } catch (error) {
        next(error)
    }
}

exports.deleteTeacher = async function (req, res, next) {
    try {
        const deletedTeacher = await teacherSchema.findByIdAndDelete(
            req.params.id
        )
        if (!deletedTeacher) {
            throw new Error('child not found')
        }
        res.status(200).json({ data: 'deleted sucessfully' })
    } catch (error) {
        next(error)
    }
}
