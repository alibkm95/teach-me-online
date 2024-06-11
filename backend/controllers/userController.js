const User = require('../models/User')
const Token = require('../models/Token')
const UserCourse = require('../models/UserCourse')
const { StatusCodes } = require('http-status-codes')
const crypto = require('crypto')
const CustomError = require('../errors')
const fs = require('fs')
const path = require('path')
const {
  createTokenUser,
  attachCookiesToResponse
} = require('../utils')

const showCurrentUser = async (req, res) => {
  res.status(StatusCodes.OK).json({ user: req.user })
}

const updateUserInfos = async (req, res) => {

  const { email, name, oldPassword, newPassword } = req.body
  const profileImage = req.files ? req.files.profileImage : null

  if (!email || !name) {
    throw new CustomError.BadRequestError('required parameters must be provided')
  }

  const user = await User.findOne({ _id: req.user.userId })

  if (oldPassword && newPassword) {
    const isPasswordCorrect = await user.comparePassword(oldPassword)

    if (!isPasswordCorrect) {
      throw new CustomError.UnauthenticatedError('old password is not correct')
    }

    user.password = newPassword
  }

  user.email = email
  user.name = name

  if (profileImage) {
    const uploadedImagePath = await uploadUserProfile(profileImage, req)
    user.profile = uploadedImagePath
  }

  await user.save()

  const tokenUser = createTokenUser(user)

  await Token.findOneAndDelete({ user: user._id })

  const refreshToken = crypto.randomBytes(40).toString('hex')
  const userAgent = req.headers['user-agent']
  const ip = req.ip
  const userToken = { refreshToken, ip, userAgent, user: user._id }

  await Token.create(userToken)

  attachCookiesToResponse({ res, user: tokenUser, refreshToken })

  res.status(StatusCodes.OK).json({ user: tokenUser })
}

const getUserCourses = async (req, res) => {

  const userCourses = await UserCourse.find({ user: req.user.userId })
    .populate({
      path: 'course',
      select: 'title cover'
    })

  if (!userCourses) {
    throw new CustomError.NotFoundError('there is no course!')
  }

  res.status(StatusCodes.OK).json({ userCourses })
}

const uploadUserProfile = async (file, req) => {

  if (!file) return ''

  const profileDirectory = path.join(__dirname, '../public/uploads/profile');

  if (!fs.existsSync(profileDirectory)) {
    fs.mkdirSync(profileDirectory)
  }

  const profileImage = file

  if (!profileImage.mimetype.startsWith('image')) {
    throw new CustomError.BadRequestError('only image files allowed(*.png  *.jpg)');
  }

  const maxSize = 1024 * 1024;

  if (profileImage.size > maxSize) {
    throw new CustomError.BadRequestError('selected file size must be less than 1MB');
  }

  profileImage.name = profileImage.name.replaceAll(' ', '_');

  const fileName = `${new Date().getTime()}_${profileImage.name}`;

  const imagePath = path.join(__dirname, `../public/uploads/profile/${fileName}`);

  try {
    await profileImage.mv(imagePath);
  } catch (error) {
    throw new CustomError.BadRequestError('upload file error')
  }

  return `${req.protocol}://${req.get('host')}/uploads/profile/${fileName}`
}

module.exports = {
  showCurrentUser,
  updateUserInfos,
  getUserCourses
}