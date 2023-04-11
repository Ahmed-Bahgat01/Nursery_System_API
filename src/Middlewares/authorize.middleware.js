const jwt = require('jsonwebtoken')
const { errorMessages } = require('../Utils/messages')

module.exports = (req, res, next) => {
    try {
        const token = req.get('Authorization').split(' ')[1]

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY)
        req.decodedToken = decodedToken
        next()
    } catch (error) {
        next(new Error(errorMessages.notAuthorized))
    }
}

module.exports.checkAdmin = (req, res, next) => {
    if (req.decodedToken.role == 'Admin') next()
    else next(new Error(errorMessages.notAuthorized))
}

module.exports.checkInstructor = (req, res, next) => {
    if (req.decodedToken.role == 'Instructor') next()
    else next(new Error(errorMessages.notAuthorized))
}

module.exports.checkAdminOrInstructor = (req, res, next) => {
    if (['Instructor', 'Admin'].includes(req.decodedToken.role)) next()
    else next(new Error(errorMessages.notAuthorized))
}
