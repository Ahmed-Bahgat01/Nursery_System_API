const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    try {
        const token = req.get('Authorization').split(' ')[1]

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY)
        req.decodedToken = decodedToken
        next()
    } catch (error) {
        next(new Error('not Athenticated'))
    }
}

module.exports.checkAdmin = (request, response, next) => {
    if (request.decodedToken.role == 'Admin') next()
    else next(new Error('Not Authorized'))
}

module.exports.checkInstructor = (request, response, next) => {
    if (request.decodedToken.role == 'Instructor') next()
    else next(new Error('Not Authorized'))
}
