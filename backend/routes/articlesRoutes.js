const express = require('express')
const router = express.Router()

const {
  createArticle,
  getArticles,
  getSingleArticle
} = require('../controllers/articleController')

const {
  authenticateUser,
  authorizePermissions
} = require('../middlewares/authentication')

router
  .route('/')
  .get(getArticles)
  .post(authenticateUser, authorizePermissions('ROOTADMIN', 'INSTRUCTOR'), createArticle)

router
  .route('/:id')
  .get(getSingleArticle)

module.exports = router