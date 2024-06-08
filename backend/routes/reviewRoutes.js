const express = require('express')
const router = express.Router()

const {
  authorizePermissions,
  authenticateUser
} = require('../middlewares/authentication')

const {
  addReview,
  getCourseReviews,
  updateReview,
  deleteReview
} = require('../controllers/reviewController')

router
  .route('/:id')
  .get(getCourseReviews)
  .post(authenticateUser, addReview)
  .patch(authenticateUser, updateReview)
  .delete(authenticateUser, authorizePermissions('ROOTADMIN', 'INSTRUCTOR'), deleteReview)

module.exports = router