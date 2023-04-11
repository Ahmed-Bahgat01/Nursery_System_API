require('../Models/admin.model')
require('../Models/teacher.model')
const mongoose = require('mongoose')
const adminSchema = mongoose.model('admin')
const teacherSchema = mongoose.model('teacher')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const { errorMessages } = require('../Utils/messages')

exports.authenticate = async function (req, res, next) {
    try {
        let roleTracker = null
        let foundUser = false
        if (!foundUser) {
            foundUser = await adminSchema.findOne({ email: req.body.email })
            roleTracker = 'Admin'
        }
        if (!foundUser) {
            foundUser = await teacherSchema.findOne({ email: req.body.email })
            roleTracker = 'Instructor'
        }
        if (!foundUser) {
            throw new Error(errorMessages.loginFailed)
        }
        const validPassword = await bcrypt.compareSync(
            req.body.password,
            foundUser.password
        )
        if (!validPassword) {
            throw new Error(errorMessages.loginFailed)
        }
        if (validPassword) {
            const token = jwt.sign(
                {
                    id: foundUser._id,
                    role: roleTracker,
                },
                process.env.JWT_SECRET_KEY,
                { expiresIn: '2h' }
            )
            res.status(200).json({ token })
        }
    } catch (error) {
        next(error)
    }
}
