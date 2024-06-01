require('dotenv').config()
const User = require('../models/User')
const Token = require('../models/Token')
const { StatusCodes } = require('http-status-codes')
const CustomError = require('../errors')
const {
  attachCookiesToResponse,
  createTokenUser,
  sendVerificationCode,
  sendResetPasswordCode,
  createHash
} = require('../utils')
const crypto = require('crypto')

const register = async (req, res) => {

  const { email, name, password } = req.body

  const emailAllreadyExist = await User.findOne({ email })

  if (emailAllreadyExist) {
    throw new CustomError.BadRequestError('inserted email allready exist. please pick another one')
  }

  const isFirstAccount = (await User.countDocuments({})) === 0
  const role = isFirstAccount ? "ROOTADMIN" : "USER"

  const verificationCode = crypto.randomInt(0, 1000000).toString().padStart(6, '0')
  const tenMinutes = 1000 * 60 * 10
  const verificationCodeExpirationDate = new Date(Date.now() + tenMinutes)

  const user = await User.create({ email, name, password, role, verificationCode, verificationCodeExpirationDate })

  await sendVerificationCode({
    name: user.name,
    email: user.email,
    verificationCode,
  })

  res.status(StatusCodes.CREATED).json({ msg: 'your account created successfully. please verify your account with the verification Code sent by us.' })
}

const login = async (req, res) => {

  const { email, password } = req.body

  if (!email || !password) {
    throw new CustomError.BadRequestError('providing email and password is required')
  }

  const user = await User.findOne({ email })

  if (!user) {
    throw new CustomError.UnauthenticatedError('no such a user with provided email address')
  }

  if (!user.isVerified) {
    throw new CustomError.UnauthorizedError('your account has been not verified yet!')
  }

  const isPasswordCorrect = await user.comparePassword(password)

  if (!isPasswordCorrect) {
    throw new CustomError.UnauthenticatedError('password is incorrect')
  }

  const tokenUser = createTokenUser(user)

  let refreshToken = ''

  const existingToken = await Token.findOne({ user: user._id })

  if (existingToken) {
    const { isValid } = existingToken

    if (!isValid) {
      throw new CustomError.UnauthenticatedError('information is not valid')
    }

    refreshToken = existingToken.refreshToken
    attachCookiesToResponse({ res, user: tokenUser, refreshToken })

    res.status(StatusCodes.OK).json({ user: tokenUser })
    return
  }

  refreshToken = crypto.randomBytes(40).toString('hex')

  const userAgent = req.headers['user-agent']
  const ip = req.ip
  const userToken = { refreshToken, ip, userAgent, user: user._id }

  await Token.create(userToken)

  attachCookiesToResponse({ res, user: tokenUser, refreshToken })
  res.status(StatusCodes.OK).json({ user: tokenUser })
}

const logout = async (req, res) => {
  await Token.findOneAndDelete({ user: req.user.userId })

  res.cookie('accessToken', 'logout', {
    httpOnly: true,
    expires: new Date(Date.now())
  })

  res.cookie('refreshToken', 'logout', {
    httpOnly: true,
    expires: new Date(Date.now())
  })

  res.status(StatusCodes.OK).json({ msg: 'loged out successfully' })
}

const verifyEmail = async (req, res) => {
  const { verificationCode, email } = req.body

  const user = await User.findOne({ email })

  if (!user) {
    throw new CustomError.UnauthenticatedError('error! no such a user exist.')
  }

  const isCodeValid = await user.compareVerificationCode(verificationCode)

  if (!isCodeValid) {
    throw new CustomError.UnauthenticatedError('error! verification code is not valid')
  }

  const currentDate = new Date()

  if (currentDate > user.verificationCodeExpirationDate) {
    throw new CustomError.BadRequestError('verification code has expired! try after 15 minutes')
  }

  user.isVerified = true
  user.verifiedIn = Date.now()
  user.verificationCode = ''

  await user.save()

  const tokenUser = createTokenUser(user)

  let refreshToken = ''

  const existingToken = await Token.findOne({ user: user._id })

  if (existingToken) {
    const { isValid } = existingToken

    if (!isValid) {
      throw new CustomError.UnauthenticatedError('information is not valid')
    }

    refreshToken = existingToken.refreshToken
    attachCookiesToResponse({ res, user: tokenUser, refreshToken })

    res.status(StatusCodes.OK).json({ user: tokenUser, msg: 'your account verified successfully' })
    return
  }

  refreshToken = crypto.randomBytes(40).toString('hex')

  const userAgent = req.headers['user-agent']
  const ip = req.ip
  const userToken = { refreshToken, ip, userAgent, user: user._id }

  await Token.create(userToken)

  attachCookiesToResponse({ res, user: tokenUser, refreshToken })
  res.status(StatusCodes.OK).json({ user: tokenUser, msg: 'your account verified successfully' })
}

const forgetPassword = async (req, res) => {
  const { email } = req.body

  if (!email) {
    throw new CustomError.BadRequestError('email is required to send reset link')
  }

  const user = await User.findOne({ email })

  if (!user) {
    throw new CustomError.NotFoundError('there is no such a user with entered email')
  }

  const resetPasswordCode = crypto.randomInt(0, 1000000).toString().padStart(6, '0')
  const tenMinutes = 1000 * 60 * 10
  const resetPasswordCodeExpirationDate = new Date(Date.now() + tenMinutes)

  await sendResetPasswordCode({
    name: user.name,
    email: user.email,
    resetPasswordCode
  })

  user.resetPasswordCode = resetPasswordCode
  user.resetPasswordCodeExpirationDate = resetPasswordCodeExpirationDate

  await user.save()

  res.status(StatusCodes.OK).json({ msg: 'reset password Code sent to your email' })
}

const resetPassword = async (req, res) => {
  const { resetPasswordCode, email, password } = req.body

  if (!email || !password || !resetPasswordCode) {
    throw new CustomError.BadRequestError('reset password error!')
  }

  const user = await User.findOne({ email })

  if (!user) {
    throw new CustomError.NotFoundError('there is no such a user')
  }

  const isCodeValid = await user.compareResetCode(resetPasswordCode)

  if (!isCodeValid) {
    throw new CustomError.UnauthenticatedError('error! verification code is not valid')
  }

  const currentDate = new Date()

  if (currentDate > user.resetPasswordCodeExpirationDate) {
    throw new CustomError.BadRequestError('the rest password vrification code has expired')
  }

  user.password = password
  user.resetPasswordCode = ''
  
  await user.save()

  res.status(StatusCodes.OK).json({ msg: 'reseting password successfull' })
}

module.exports = {
  register,
  login,
  logout,
  verifyEmail,
  forgetPassword,
  resetPassword,
}