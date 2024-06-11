const express = require('express')
const router = express.Router()

const {
  authenticateUser
} = require('../middlewares/authentication')

const {
  showCurrentUser,
  updateUserInfos,
  getUserCourses
} = require('../controllers/userController')

router
  .route('/showMe')
  .get(authenticateUser, showCurrentUser)

router
  .route('/myCourses')
  .get(authenticateUser, getUserCourses)

router
  .route('/updateUser')
  .patch(authenticateUser, updateUserInfos)

module.exports = router