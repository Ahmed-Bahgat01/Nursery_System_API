const express = require('express')
const userController = require('../../Controllers/user.controller')

const router = express.Router()

router.route('/').get(userController.indexUsers).post(userController.createUser)
router
    .route('/:id')
    .get(userController.showUser)
    .patch(userController.updateUser)
    .delete(userController.deleteUser)

module.exports = router
