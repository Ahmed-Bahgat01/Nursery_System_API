const express = require('express')
const childController = require('../../Controllers/child.controller')
const { checkAdmin } = require('../../Middlewares/authorize.middleware')

const router = express.Router()

router
    .route('/')
    .all(checkAdmin)
    .get(childController.indexChildren)
    .post(childController.createChild)
router
    .route('/:id')
    .all(checkAdmin)
    .get(childController.showChild)
    .patch(childController.updateChild)
    .delete(childController.deleteChild)

module.exports = router
