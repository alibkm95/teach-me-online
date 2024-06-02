const express = require('express')
const router = express.Router()

const {
  authenticateUser,
  authorizePermissions
} = require('../middlewares/authentication')

const {
  showCurrentUser,
  updateUserInfos
} = require('../controllers/userController')

router
  .route('/showMe')
  .get(authenticateUser, showCurrentUser)

router
  .route('/updateUser')
  .patch(authenticateUser, updateUserInfos)

module.exports = router