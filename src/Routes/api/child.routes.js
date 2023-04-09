const express = require('express')
const childController = require('../../Controllers/child.controller')

const router = express.Router()

router
    .route('/')
    .get(childController.indexChildren)
    .post(childController.createChild)
router
    .route('/:id')
    .get(childController.showChild)
    .patch(childController.updateChild)
    .delete(childController.deleteChild)

module.exports = router
