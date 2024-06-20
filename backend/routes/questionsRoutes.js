const express = require('express')
const router = express.Router()

const {
  authenticateUser,
  authorizePermissions
} = require('../middlewares/authentication')

const {
  makeQuestion,
  addAnswer,
  getUserQuestions,
  getSingleQuestion,
  getEpisodeQuestions
} = require('../controllers/questionController')

router
  .route('/')
  .post(authenticateUser, makeQuestion)
  .get(authenticateUser, getUserQuestions)

router
  .route('/episode/:id')
  .get(authenticateUser, getEpisodeQuestions)

router
  .route('/:id')
  .get(authenticateUser, getSingleQuestion)
  .post(authenticateUser, authorizePermissions('ROOTADMIN', 'INSTRUCTOR'), addAnswer)

module.exports = router