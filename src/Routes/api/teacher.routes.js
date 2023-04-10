const express = require('express')
const teacherController = require('../../Controllers/teacher.controller')
const {
    checkAdmin,
    checkInstructor,
} = require('../../Middlewares/authorize.middleware')

const router = express.Router()

router
    .route('/')
    .get(checkAdmin, teacherController.indexTeachers)
    .post(checkAdmin, teacherController.createTeacher)
router
    .route('/:id')
    .get(checkInstructor, teacherController.showTeacher)
    .patch(checkInstructor, teacherController.updateTeacher)
    .delete(checkAdmin, teacherController.deleteTeacher)

module.exports = router
