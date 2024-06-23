const express = require('express')
const router = express.Router()

const {
  sendProfileImage,
  sendCourseCover,
  sendArticleCover,
  sendAttachmentFile,
} = require('../controllers/fileController')

router
  .route('/profile/:fileName')
  .get(sendProfileImage)

router
  .route('/course/:fileName')
  .get(sendCourseCover)

router
  .route('/article/:fileName')
  .get(sendArticleCover)

router
  .route('/attachment/:fileName')
  .get(sendAttachmentFile)

module.exports = router