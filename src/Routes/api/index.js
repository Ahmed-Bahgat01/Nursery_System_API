const teacherRoutes = require('./teacher.routes')
const childRoutes = require('./child.routes')
const adminRoutes = require('./admin.routes')
const classRoutes = require('./class.routes')
const express = require('express')

const routes = express.Router()

routes.use('/teacher', teacherRoutes)
routes.use('/child', childRoutes)
routes.use('/admin', adminRoutes)
routes.use('/class', classRoutes)

module.exports = routes
