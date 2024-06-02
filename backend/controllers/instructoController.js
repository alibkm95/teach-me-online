const User = require('../models/User')
const Instructor = require('../models/Instructor')
const { StatusCodes } = require('http-status-codes')
const CustomError = require('../errors')

const createInstructor = async (req, res) => {

  const { id: userId } = req.params
  const { position, skills } = req.body

  const user = await User.findOne({ _id: userId })

  if (!user) {
    throw new CustomError.NotFoundError('there is no such a user!')
  }

  const alreadyExists = await Instructor.findOne({ user: userId })

  if (alreadyExists) {
    throw new CustomError.BadRequestError('the selected user is already an instructor!')
  }

  if (!position) {
    throw new CustomError.BadRequestError('the instructors position must be provided!')
  }

  try {
    const newInstructor = await Instructor.create({ user: userId, skills, position })

    user.role = 'INSTRUCTOR'
    await user.save()

    res.status(StatusCodes.CREATED).json({ newInstructor })

  } catch (error) {
    throw new CustomError.BadRequestError(error.message)
  }
}

const getInstructor = async (req, res) => {

  const { id: instructorId } = req.params

  const instructor = await Instructor.findOne({ _id: instructorId })
    .populate({
      path: 'user',
      select: '_id name role profile'
    })

  if (!instructor) {
    throw new CustomError.NotFoundError('there is no such an instructor!')
  }

  res.status(StatusCodes.OK).json({ instructor })
}

module.exports = {
  createInstructor,
  getInstructor
}