const express = require('express')
const classController = require('../../Controllers/class.controller')
const { checkAdmin } = require('../../Middlewares/authorize.middleware')

const router = express.Router()

router
    .route('/')
    .all(checkAdmin)
    .get(classController.indexClasses)
    .post(classController.createClass)
router
    .route('/:id')
    .all(checkAdmin)
    .get(classController.showClass)
    .patch(classController.updateClass)
    .delete(classController.deleteClass)
router
    .route('/:id/supervisor')
    .all(checkAdmin)
    .get(classController.getSupervisor)
router.route('/:id/children').all(checkAdmin).get(classController.getChildren)
module.exports = router
