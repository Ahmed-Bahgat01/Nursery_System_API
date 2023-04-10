const authController = require('../../Controllers/authentication.controller')
const express = require('express')

const router = express.Router()

router.route('/').post(authController.authenticate)

module.exports = router
