const teacherRoutes = require('./teacher.routes')
const childRoutes = require('./child.routes')
const express = require('express')

const routes = express.Router()

routes.use('/teacher', teacherRoutes)
routes.use('/child', childRoutes)

module.exports = routes
