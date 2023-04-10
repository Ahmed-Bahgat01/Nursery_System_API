const jwt = require('jsonwebtoken')

exports.authenticate = function (req, res, next) {
    try {
        if (req.body.email == 'x@x.com' && req.body.password == '123') {
            const token = jwt.sign(
                {
                    id: 1,
                    role: 'admin',
                    userName: 'mr.X',
                },
                process.env.JWT_SECRET_KEY,
                { expiresIn: '2h' }
            )
            res.status(200).json({ token })
        } else {
            throw new Error('invalid username or password')
        }
    } catch (error) {
        next(error)
    }
}
