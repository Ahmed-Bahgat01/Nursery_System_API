const express = require('express')
const teacherController = require('../../Controllers/teacher.controller')

const router = express.Router()

router
    .route('/')
    .get(teacherController.indexTeachers)
    .post(teacherController.createTeacher)
router
    .route('/:id')
    .get(teacherController.showTeacher)
    .patch(teacherController.updateTeacher)
    .delete(teacherController.deleteTeacher)

module.exports = router
