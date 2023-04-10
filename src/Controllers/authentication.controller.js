require('../Models/admin.model')
require('../Models/teacher.model')
const mongoose = require('mongoose')
const adminSchema = mongoose.model('admin')
const teacherSchema = mongoose.model('teacher')
const jwt = require('jsonwebtoken')

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
        if (!foundUser || foundUser.password != req.body.password) {
            console.log(foundUser)
            throw new Error('invalid username or password')
        }
        if (foundUser && foundUser.password == req.body.password) {
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
