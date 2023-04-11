const express = require('express')
const teacherController = require('../../Controllers/teacher.controller')
const {
    checkAdmin,
    checkAdminOrInstructor,
} = require('../../Middlewares/authorize.middleware')

const router = express.Router()

router
    .route('/')
    .get(checkAdmin, teacherController.indexTeachers)
    .post(checkAdmin, teacherController.createTeacher)
router
    .route('/:id')
    .get(checkAdminOrInstructor, teacherController.showTeacher)
    .patch(checkAdminOrInstructor, teacherController.updateTeacher)
    .delete(checkAdmin, teacherController.deleteTeacher)

module.exports = router
