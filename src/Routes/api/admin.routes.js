const express = require('express')
const userController = require('../../Controllers/admin.controller')
const { checkAdmin } = require('../../Middlewares/authorize.middleware')

const router = express.Router()

router
    .route('/')
    .get(checkAdmin, userController.indexUsers)
    .post(checkAdmin, userController.createUser)
router
    .route('/:id')
    .get(checkAdmin, userController.showUser)
    .patch(checkAdmin, userController.updateUser)
    .delete(checkAdmin, userController.deleteUser)

module.exports = router
