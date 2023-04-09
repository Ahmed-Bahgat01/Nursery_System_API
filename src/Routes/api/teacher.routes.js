const express = require('express')
const teacherController = require('../../Controllers/teacher.controller')

const router = express.Router()

router
    .route('/')
    .get(teacherController.indexteachers)
    .post(teacherController.createteacher)
router
    .route('/:id')
    .get(teacherController.showteacher)
    .patch(teacherController.updateteacher)
    .delete(teacherController.deleteteacher)

module.exports = router
