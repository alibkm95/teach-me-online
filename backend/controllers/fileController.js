const CustomError = require('../errors')
const fs = require('fs')
const path = require('path')

const sendProfileImage = async (req, res) => {
  const { fileName } = req.params

  const filePath = path.join(__dirname, `../public/uploads/profile/${fileName}`)

  if (!fs.existsSync(filePath)) {
    throw new CustomError.NotFoundError('requested file dose not exsist or removed!')
  }

  res.sendFile(filePath)
}

const sendCourseCover = async (req, res) => {
  const { fileName } = req.params

  const filePath = path.join(__dirname, `../public/assets/courses/${fileName}`)

  if (!fs.existsSync(filePath)) {
    throw new CustomError.NotFoundError('requested file dose not exsist or removed!')
  }

  res.sendFile(filePath)
}

const sendArticleCover = async (req, res) => {
  const { fileName } = req.params

  const filePath = path.join(__dirname, `../public/assets/articles/${fileName}`)

  if (!fs.existsSync(filePath)) {
    throw new CustomError.NotFoundError('requested file dose not exsist or removed!')
  }

  res.sendFile(filePath)
}

const sendAttachmentFile = async (req, res) => {
  const { fileName } = req.params

  const filePath = path.join(__dirname, `../public/uploads/attachments/${fileName}`)

  if (!fs.existsSync(filePath)) {
    throw new CustomError.NotFoundError('requested file dose not exsist or removed!')
  }

  res.download(filePath)
}

module.exports = {
  sendProfileImage,
  sendCourseCover,
  sendArticleCover,
  sendAttachmentFile,
}