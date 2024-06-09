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
} = require('../controllers/questionController')

router
  .route('/')
  .post(authenticateUser, makeQuestion)
  .get(authenticateUser, getUserQuestions)

router
  .route('/:id')
  .get(authenticateUser, getSingleQuestion)
  .post(authenticateUser, addAnswer)

module.exports = router