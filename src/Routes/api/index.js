const teacherRoutes = require('./teacher.routes')
const childRoutes = require('./child.routes')
const userRoutes = require('./user.routes')
const express = require('express')

const routes = express.Router()

routes.use('/teacher', teacherRoutes)
routes.use('/child', childRoutes)
routes.use('/user', userRoutes)

module.exports = routes
