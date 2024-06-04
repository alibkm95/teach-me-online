const express = require('express')
const router = express.Router()

const {
  createNewCourse,
  getAllCourses,
  getSingleCourse,
  updateCourse,
  deleteCourse,
} = require('../controllers/courseController')

const {
  authorizePermissions,
  authenticateUser
} = require('../middlewares/authentication')

router
  .route('/')
  .get(getAllCourses)
  .post(authenticateUser, authorizePermissions('INSTRUCTOR'), createNewCourse)

router
  .route('/:id')
  .get(getSingleCourse)
  .patch(authenticateUser, authorizePermissions('ROOTADMIN', 'INSTRUCTOR'), updateCourse)
  .delete(authenticateUser, authorizePermissions('ROOTADMIN'), deleteCourse)

module.exports = router