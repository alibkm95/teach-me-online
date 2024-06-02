const express = require('express')
const router = express.Router()

const {
  authenticateUser,
  authorizePermissions
} = require('../middlewares/authentication')

const {
  createInstructor,
  getInstructor
} = require('../controllers/instructoController')

router
  .route('/:id')
  .get(authenticateUser, getInstructor)
  .post(authenticateUser, authorizePermissions('ROOTADMIN'), createInstructor)

module.exports = router