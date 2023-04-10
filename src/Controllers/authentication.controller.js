require('../Models/user.model')
const mongoose = require('mongoose')
const userSchema = mongoose.model('user')
const jwt = require('jsonwebtoken')

exports.authenticate = async function (req, res, next) {
    try {
        let targetUser = await userSchema.findOne({ email: req.body.email })
        if (targetUser == null || targetUser.password != req.body.password) {
            throw new Error('invalid username or password')
        } else {
            const token = jwt.sign(
                {
                    id: targetUser._id,
                    role: targetUser.role,
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
