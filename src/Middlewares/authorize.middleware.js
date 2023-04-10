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
