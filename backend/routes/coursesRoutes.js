const express = require('express')
const router = express.Router()

const {
  createNewCourse,
  getAllCourses,
  getSingleCourse,
  updateCourse,
  deleteCourse,
  addSeason,
  addEpisode,
  getSingleCourseContents,
  getSingleEpisode
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
  .route('/season/:id')
  .post(authenticateUser, authorizePermissions('INSTRUCTOR', 'ROOTADMIN'), addSeason)

router
  .route('/episode/:courseId/:seasonId')
  .post(authenticateUser, authorizePermissions('ROOTADMIN', 'INSTRUCTOR'), addEpisode)

router
    .route('/content/episode/:id')
    .get(authenticateUser, getSingleEpisode)

router
  .route('/content/:id')
  .get(authenticateUser, getSingleCourseContents)

router
  .route('/:id')
  .get(getSingleCourse)
  .patch(authenticateUser, authorizePermissions('ROOTADMIN', 'INSTRUCTOR'), updateCourse)
  .delete(authenticateUser, authorizePermissions('ROOTADMIN'), deleteCourse)

module.exports = router