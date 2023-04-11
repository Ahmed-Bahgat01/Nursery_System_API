const bcrypt = require('bcryptjs')

module.exports = function (schema, columnName, saltRounds) {
    schema.pre('save', async function (next) {
        try {
            const salt = await bcrypt.genSaltSync(saltRounds)
            const hashedValue = await bcrypt.hashSync(
                this[`${columnName}`],
                salt
            )
            this[`${columnName}`] = hashedValue
            next()
        } catch (error) {
            next(error)
        }
    })
}
